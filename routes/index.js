import express from 'express';
const router = express.Router();

import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

import fs from 'fs';
//set up the root directory reference
//find the global URL using fileURLTOPath
// and then turn that into the __dirname (something like Users/Desktop/NGO_Redux/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//video const



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/audioView', (req, res) => {
    // res.end(`this is joo's page`);
    res.sendFile(path.join(__dirname, '../views/audioView.html'));
})

router.get('/videoView', (req, res) => {
    // res.end(`this is joe's page`);
    res.sendFile(path.join(__dirname, '../views/videoView.html'));
})

router.use((req, res) => {
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));
})

//video
  
router.get("/video", function (req, res) {
    
    console.log(req.headers);
  
    // Ensure there is a range given for the video
    const range = req.headers.range;
    if (!range) {
      res.status(400).send("Requires Range header");
    }
  
    // get video stats (about 11MB)
    const videoPath = path.join(__dirname, '../', video.path);
    const videoSize = fs.statSync(videoPath).size;
    console.log(videoSize)
  
    // Parse Range
    // Example: 'bytes=6750208-'
    const CHUNK_SIZE = 5 * 10 ** 5;
    const start =  Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    console.log(start,end);
  
    // Create headers
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, { start, end });
  
    // Stream the video chunk to the client
    videoStream.pipe(res);
  });

  router.get("/audio", (req, res) => {
    axios
      .get(INPUT, {
        responseType: "stream",
        adapter: httpAdapter,
        "Content-Range": "bytes 16561-8065611",
      })
      .then((Response) => {
        const stream = Response.data;
  
        res.set("content-type", "audio/mp3");
        res.set("accept-ranges", "bytes");
        res.set("content-length", Response.headers["content-length"]);
        console.log(Response);
  
        stream.on("data", (chunk) => {
          res.write(chunk);
        });
  
        stream.on("error", (err) => {
          res.sendStatus(404);
        });
  
        stream.on("end", () => {
          res.end();
        });
      })
      .catch((Err) => {
        console.log(Err.message);
      });
  });
  
export default router;