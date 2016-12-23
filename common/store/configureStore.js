if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  console.log('1-1');
  module.exports = require('./configureStore.dev');
}
