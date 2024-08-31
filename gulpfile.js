// main module
import gulp from 'gulp';
// path import
import { path } from './gulp/config/path.js';
// plugins import
import { plugins } from './gulp/config/plugins.js';

// global var
globalThis.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path,
  gulp,
  plugins,
};

// tasks import
import { reset } from './gulp/tasks/reset.js';
import { layout } from './gulp/tasks/pug.js';
import { style } from './gulp/tasks/style.js';
import { script } from './gulp/tasks/script.js';
import { images } from './gulp/tasks/image.js';
import { copyWoff2, createWoff2fromTtf } from './gulp/tasks/fonts.js';
import {
  copySvgReady,
  handleSvg,
  createSvgSpite,
} from './gulp/tasks/sprite.js';
import { server, reload } from './gulp/tasks/server.js';

// watcher func
function watcher() {
  gulp.watch(path.watch.layout, gulp.series(layout, reload));
  gulp.watch(path.watch.style, gulp.series(style, reload));
  gulp.watch(path.watch.script, gulp.series(script, reload));
  gulp.watch(path.watch.img, gulp.series(images, reload));
  gulp.watch(path.watch.svg, gulp.series(sprite, reload));
  gulp.watch(path.watch.font, gulp.series(fonts, reload));
}

// tasks
const sprite = gulp.series(copySvgReady, handleSvg, createSvgSpite);
const fonts = gulp.parallel(copyWoff2, createWoff2fromTtf);
const mainTasks = gulp.parallel(layout, style, script, images, sprite, fonts);

// developer mode
export const dev = gulp.series(
  reset,
  layout,
  mainTasks,
  gulp.parallel(watcher, server)
);

// production mode
export const build = gulp.series(reset, mainTasks, server);
