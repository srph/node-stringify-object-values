var expect = require('chai').expect;
var stringify = require('./');

describe('stringify', function() {
  it('should stringify each of the object\'s value', function() {
    var test = {
      hello: 'world',
      favorite: 1,
      equation: '1+1',
      random: {},
      arr: []  
    };

    expect(stringify(test)).to.eql({
      hello: JSON.stringify('world'),
      favorite: JSON.stringify(1),
      equation: JSON.stringify('1+1'),
      random: JSON.stringify({}),
      arr: JSON.stringify([])
    });
  });
});