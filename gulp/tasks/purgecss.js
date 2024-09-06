import purgecss from 'gulp-purgecss';

export const purgeCSS = () => {
  return app.gulp
    .src(app.path.build.style + '/*.css')
    .pipe(
      purgecss({
        content: [
          app.path.build.root + '*.html',
          app.path.build.js + '/*.js',
        ],
        safelist: {
          standard: [/^form__labinp/, /^btn-/],
        },
      })
    )
    .pipe(
      app.plugins.size({
        showFiles: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.style)); 
};
