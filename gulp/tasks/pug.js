import gulpPug from 'gulp-pug';
import versionNumber from 'gulp-version-number';

export const layout = () => {
  return (
    app.gulp
      .src(app.path.src.layout)
      // .pipe(
      //   app.plugins.plumber(
      //     app.plugins.notify.onError({
      //       title: 'PUG',
      //       message: 'Error: <%= error.message %>',
      //     })
      //   )
      // )
      .pipe(gulpPug({ pretty: app.isDev, verbose: app.isDev }))
      // .pipe(
      //   app.plugins.rename({
      //     basename: index,
      //   })
      // )
      .pipe(
        app.plugins.size({
          showFiles: true,
        })
      )
      .pipe(
        app.plugins.ifPlug(
          app.isBuild,
          versionNumber({
            value: '%DT%',
            append: {
              key: '_v',
              cover: 0,
              to: ['css', 'js'],
            },
            output: {
              file: 'gulp/version.json',
            },
          })
        )
      )
      .pipe(app.gulp.dest(app.path.build.root))
      // .pipe(app.plugins.browserSync.stream())
  );
};
