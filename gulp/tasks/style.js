import dart from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixes from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(dart);

export const style = () => {
  return (
    app.gulp
      .src(app.path.src.style, { sourcemaps: app.isDev })
      .pipe(app.plugins.ifPlug(app.isDev, app.plugins.sourcemaps.init()))
      // .pipe(
      //   app.plugins.plumber(
      //     app.plugins.notify.onError({
      //       title: 'SASS',
      //       message: 'Error: <%= error.message %>',
      //     })
      //   )
      // )
      .pipe(
        sass({
          outputStyle: 'expanded',
        }).on('error', sass.logError)
      )
      .pipe(
        autoprefixes({
          grid: true,
          overrideBrowserslist: ['last 3 versions'],
          cascade: false,
        })
      )
      .pipe(
        app.plugins.ifPlug(
          app.isBuild,
          cleanCSS({
            level: 2,
          })
        )
      )
      .pipe(
        app.plugins.rename({
          // basename: 'style',
          suffix: '.min',
        })
      )
      .pipe(
        app.plugins.size({
          showFiles: true,
        })
      )
      .pipe(app.plugins.ifPlug(app.isDev, app.plugins.sourcemaps.write()))
      .pipe(app.gulp.dest(app.path.build.style))
      // .pipe(app.plugins.browserSync.stream())
  );
};
