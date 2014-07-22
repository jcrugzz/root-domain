/*
 *
 * index.js :: main include for this simple fucking module
 *
 * MIT 2014 :: Jarrett Cruger
 *
 */

var parse = require('parse-domain');

module.exports = function (url) {
  var d = parse(url);

  if (!d) return undefined;

  return [d.domain, d.tld].join('.');
};

