import svgSprite from 'gulp-svg-sprite';
import cheerio from 'gulp-cheerio';
import svgmin from 'gulp-svgmin';

export const copySvgReady = () => {
  return (
    app.gulp
      .src(app.path.src.svg.ready)
      .pipe(svgmin())
      // .pipe(
      //   app.plugins.plumber(
      //     app.plugins.notify.onError({
      //       title: 'SVG',
      //       message: 'Error: <%= error.message %>',
      //     })
      //   )
      // )
      .pipe(app.plugins.newer(app.path.src.svg.handled))
      .pipe(app.gulp.dest(app.path.src.svg.handled))
  );
};
export const handleSvg = () => {
  return (
    app.gulp
      .src(app.path.src.svg.row)
      .pipe(svgmin())
      // .pipe(
      //   app.plugins.plumber(
      //     app.plugins.notify.onError({
      //       title: 'SVG',
      //       message: 'Error: <%= error.message %>',
      //     })
      //   )
      // )
      .pipe(app.plugins.newer(app.path.src.svg.handled))
      .pipe(
        cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            // $('[style]').removeAttr('style');
          },
          parserOptions: { xmlMode: true },
        })
      )
      .pipe(app.plugins.replace('&gt', '>'))
      .pipe(app.gulp.dest(app.path.src.svg.handled))
  );
};

export const createSvgSpite = () => {
  return (
    app.gulp
      .src(app.path.src.svg.handled + '*.svg')
      // .pipe(
      //   app.plugins.plumber(
      //     app.plugins.notify.onError({
      //       title: 'SVG',
      //       message: 'Error: <%= error.message %>',
      //     })
      //   )
      // )
      .pipe(
        svgSprite({
          mode: {
            stack: {
              sprite: '../sprite.svg',
            },
          },
        })
      )
      .pipe(
        app.plugins.size({
          showFiles: true,
        })
      )
      .pipe(app.gulp.dest(app.path.build.img))
  );
  // .pipe(app.plugins.browserSync.stream());
};
