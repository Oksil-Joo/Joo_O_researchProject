
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-sass'; 
import dart from 'sass';

const sassify = sass(dart); 

function compileSass(done) {
    return (
        gulp.src('sass/**/*.scss') 
        .pipe(sassify({outputStyle: "compressed"}).on('error', sassify.logError)) // run it thru the compiler, and also compress it
        .pipe(gulp.dest('public/css'))
    ) 
  };

  function squashImages(done) {
    gulp.src('images/**') // grab everything in the images folder
		.pipe(imagemin()) // run every image through the imagemin engine
        .pipe(gulp.dest('dist')) // put the optimized images here
        
    done();
}

function watch() {
    console.log('watching files...');
    gulp.watch("sass/**/*.scss", compileSass);
    gulp.watch("images/**", squashImages);
}

export { 
    watch as default, 
    squashImages as crunch,
    compileSass as compile
}