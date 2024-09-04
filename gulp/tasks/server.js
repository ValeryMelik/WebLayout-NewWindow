export function server(done) {
  app.plugins.browserSync.create('index').init({
    server: {
      baseDir: app.path.build.root,
      index: `index.html`,
    },
    notify: false,
    port: 3000,
    ui: {
      port: 3001,
    },
  });
  done();
}

export function reload(done) {
  app.plugins.browserSync.get('index').reload();
  done();
}
