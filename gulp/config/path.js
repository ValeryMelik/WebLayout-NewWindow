import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    root: `${buildFolder}/`,
    style: `${buildFolder}/style`,
    js: `${buildFolder}/js`,
    img: `${buildFolder}/img`,
    font: `${buildFolder}/fonts`,
    all: `${buildFolder}/**.*`,
  },

  src: {
    layout: `${srcFolder}/layout/*.pug`,
    style: `${srcFolder}/styles/*.scss`,
    script: `${srcFolder}/js/*.js`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: {
      row: `${srcFolder}/img/svg/row/*.svg`,
      ready: `${srcFolder}/img/svg/ready/*.svg`,
      handled: `${srcFolder}/img/svg/handled/`,
    },
    font: {
      woff2: `${srcFolder}/fonts/*.woff2`,
      ttf: `${srcFolder}/fonts/*.ttf`,
    },
  },

  watch: {
    style: `${srcFolder}/styles/**/*.scss`,
    layout: `${srcFolder}/layout/**/*.pug`,
    script: `${srcFolder}/js/**/*.js`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/svg/**/*.svg`,
    font: `${srcFolder}/fonts/**/*.*`,
  },

  clean: [buildFolder, `${srcFolder}/img/svg/handled/`],

  buildFolder,
  srcFolder,
  rootFolder,
};
