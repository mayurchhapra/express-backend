// Test
const test = require('./v1/test');

// Router Mapper
const route = (application, versionTag, controllers) => {
  const versionPath = versionTag ? `/${versionTag}/` : '/';
  for (const controller in controllers) {
    const path = versionPath + controller;
    application.use(path, controllers[controller]);
  }
};

module.exports = (app) => {
  // test
  route(app, null, {
    test
  });
};