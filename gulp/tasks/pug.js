import gulpPug from 'gulp-pug';
import versionNumber from 'gulp-version-number';

export const layout = () => {
  return (
    app.gulp
      .src(app.path.src.layout)

      .pipe(gulpPug({ pretty: app.isDev, verbose: app.isDev }))
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
  );
};
