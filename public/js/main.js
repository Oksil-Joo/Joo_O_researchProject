(() => {
    const   theMedia = document.querySelector(".folklist"),
            theTemplate = document.querySelector("#midea-template").content;

            function getData() {
                fetch("/data.json")
                .then(res => res.json()) //unpach the API
                .then(data => {
                    console.table(data);
                
                    buildMedia(data);
                })
                .catch(error => console.error(error));
            }

            function buildMedia(info) {
                let media = Object.keys(info);
         
                media.forEach(fun => {
                    let panel = theTemplate.cloneNode(true),
                         mediaInfo = panel.firstElementChild.children;
         
                         mediaInfo[0].querySelector('img').src = `images/${info[fun].pic}`;
                         mediaInfo[1].textContent = info[fun].name;
                        //  mediaInfo[2].textContent = info[fun].role;
                        //  mediaInfo[3].textContent = info[fun].desc;
         
                     theMedia.appendChild(panel);
                })
             }
     getData();
})();