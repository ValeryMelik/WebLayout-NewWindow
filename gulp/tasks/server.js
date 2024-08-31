const page = 'main'; // Название страницы, для которой настраивается сервер

export function server(done) {
  app.plugins.browserSync.create(page).init({
    server: {
      baseDir: app.path.build.root,
      index: `${page}.html`,
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
  app.plugins.browserSync.get(page).reload();
  done();
}
