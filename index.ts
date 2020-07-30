/**
 * Stringify object values
 * { hello: 'world' } -> { hello: "'world'" }
 *
 * @param {object} object
 * @return {object}
 */
export = (function stringify(object: { [x: string]: any; }) {
    return Object.keys(object)
        .reduce(function (previous: any, next: any) {
        return (previous[next] = JSON.stringify(object[next]), previous);
    }, {}) as {[x: string]: string};
});
