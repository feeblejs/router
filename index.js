[require('react-router'), require('react-router-redux')].forEach(function(lib) {
  Object.keys(lib).forEach(function(key) {
    if (key !== '__esModule') {
      module.exports[key] = lib[key]
    }
  })
})

module.exports = require('./lib/router')
