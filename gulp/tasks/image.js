import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';

export const images = () => {
  return app.gulp
    .src(app.path.src.img)
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(
      app.plugins.ifPlug(
        app.isBuild,
        imagemin([
          imageminMozjpeg({ quality: 60, progressive: true }),
          imageminOptipng({ optimizationLevel: 5 }),
        ])
      )
    )
    .pipe(webp({ quality: app.isBuild ? 60 : 100 }))
    .pipe(
      app.plugins.size({
        showFiles: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.img));
};
