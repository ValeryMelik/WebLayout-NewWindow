import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';

import named from 'vinyl-named';

export const script = () => {
  return app.gulp
    .src(app.path.src.script, { sourcemaps: app.isDev })
    .pipe(app.plugins.ifPlug(app.isDev, app.plugins.sourcemaps.init()))
    .pipe(named())
    .pipe(
      webpack({
        mode: app.isBuild ? 'production' : 'development',
        optimization: {
          minimize: true,
        },
        module: {
          rules: [
            {
              test: /\.(?:js|mjs|cjs)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', { targets: 'defaults' }]],
                },
              },
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
          ],
        },
      })
    )
    .pipe(
      app.plugins.rename({
        suffix: '.min',
      })
    )
    .pipe(uglify())
    .pipe(
      app.plugins.size({
        showFiles: true,
      })
    )
    .pipe(app.plugins.ifPlug(app.isDev, app.plugins.sourcemaps.write()))
    .pipe(app.gulp.dest(app.path.build.js));
};
