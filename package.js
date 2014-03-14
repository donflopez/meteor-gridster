Package.describe({
  summary: "Provides Gridster.js"
});

Package.on_use(function (api, where) {
  api.add_files(['jquery.gridster.with-extras.min.js', 'jquery.gridster.css'], ['client']);
});
