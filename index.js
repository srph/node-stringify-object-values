/**
 * Stringify object values
 * { hello: 'world' } -> { hello: "'world'" }
 *
 * @param {object} object
 * @return {object}
 */
module.exports = function stringify(object) {
  return Object.keys(object)
    .reduce((previous, next) => {
      return (previous[next] = JSON.stringify(object[next]), previous);
    }, {}); 
}