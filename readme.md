## stringify-object-values [![npm version](http://img.shields.io/npm/v/stringify-object-values.svg?style=flat)](https://npmjs.org/package/stringify-object-values.svg) [![Build Status](https://travis-ci.org/srph/node-stringify-object-values.svg?branch=master)](https://travis-ci.org/srph/node-stringify-object-values?branch=master)
```
npm i stringify-object-values
```
Stringifies each value of an object. This is useful when paired with [Webpack's DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin).

## Usage
```js
var stringify = require('stringify-object-values');

stringify({
  hello: 'world',
  favorite: 1,
  equation: '1+1',
  random: {},
  arr: []  
});

/* {
  hello: "'world'",
  favorite: 1,
  equation: "'1+1'",
  random: "{}",
  arr: "[]"
} */
```

#### With `webpack.DefinePlugin`
```js
var webpack = require('webpack');
var stringify = require('stringify-object-values');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({ 'process.env': stringify(process.env) });
  ]
}
```