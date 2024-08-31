import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import ifPlug from 'gulp-if';
import newer from 'gulp-newer';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';

export const plugins = {
  browserSync,
  ifPlug,
  concat,
  newer,
  notify,
  plumber,
  rename,
  replace,
  size,
  sourcemaps,
};
