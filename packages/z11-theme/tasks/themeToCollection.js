const { createCollection, createMap } = require('@z11/build');

module.exports = theme => {
  const collection = {};

  Object.keys(theme).forEach(style => {
    collection[style] = createMap(style, theme[style]);
  });

  return createCollection('theme', collection);
};
