import ttf2woff2 from 'gulp-ttf2woff2';

export const copyWoff2 = () => {
  return app.gulp
    .src(app.path.src.font.woff2)
    // .pipe(
    //   app.plugins.plumber(
    //     app.plugins.notify.onError({
    //       title: 'FONTS',
    //       message: 'Error: <%= error.message %>',
    //     })
    //   )
    // )
    .pipe(app.plugins.newer(app.path.build.font))
    .pipe(app.gulp.dest(app.path.build.font))
    // .pipe(app.plugins.browserSync.stream());
};

export const createWoff2fromTtf = () => {
  return app.gulp
    .src(app.path.src.font.ttf)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'FONTS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.font))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.font))
    // .pipe(app.plugins.browserSync.stream());
};
