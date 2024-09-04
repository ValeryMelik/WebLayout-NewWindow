import webpack from 'webpack-stream';
// import uglify from 'gulp-uglify-es';
// import babel from 'gulp-babel';

import named from 'vinyl-named';

export const script = () => {
  return (
    app.gulp
      .src(app.path.src.script, { sourcemaps: app.isDev })
      .pipe(app.plugins.ifPlug(app.isDev, app.plugins.sourcemaps.init()))
      .pipe(named())
      // .pipe(
      //   app.plugins.plumber(
      //     app.plugins.notify.onError({
      //       title: 'JS',
      //       message: 'Error: <%= error.message %>',
      //     })
      //   )
      // )
      .pipe(
        webpack({
          mode: app.isBuild ? 'production' : 'development',
          // output: {
          //   filename: '[name].js',
          // },
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
                use: [
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                ],
              },
            ],
          },
        })
      )
      .pipe(
        app.plugins.rename({
          // basename: 'style',
          suffix: '.min',
        })
      )
      // .pipe(concat('app.min.js'))
      // .pipe(
      //   babel({
      //     presets: ['@babel/env'],
      //   })
      // )
      // .pipe(
      //   uglify()
      //   // .on('error', notify.onError())
      // )
      .pipe(
        app.plugins.size({
          showFiles: true,
        })
      )
      .pipe(app.plugins.ifPlug(app.isDev, app.plugins.sourcemaps.write()))
      .pipe(app.gulp.dest(app.path.build.js))
      // .pipe(app.plugins.browserSync.stream())
  );
};
