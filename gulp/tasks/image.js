import webp from 'gulp-webp';
// import imagemin from 'gulp-imagemin';

export const images = () => {
  return app.gulp
    .src(app.path.src.img)
    // .pipe(
    //   app.plugins.plumber(
    //     app.plugins.notify.onError({
    //       title: 'IMG',
    //       message: 'Error: <%= error.message %>',
    //     })
    //   )
    // )
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(webp())
    // .pipe(app.gulp.dest(app.path.build.img))
    // .pipe(app.gulp.src(app.path.src.img))
    // .pipe(app.plugins.newer(app.path.build.img))
    // .pipe(
    //   imagemin({
    //     progressive: true,
    //     interlaced: true,
    //     optimizationLevel: 2,
    //   })
    // )
    .pipe(
      app.plugins.size({
        showFiles: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.img))
    // .pipe(app.plugins.browserSync.stream());
};
