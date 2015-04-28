var calc = require('../calc.js');
var expect = require('chai').expect;

describe('calc', function() {
  var a = 4, b = 3;
  it('should add when called', function() {
    expect(calc.add(a,b)).to.eql(7);
  });
});

describe('calc', function() {
  var a = 8, b = 3;
  it('should subtract when called', function() {
    expect(calc.subtract(a,b)).to.eql(5);
  });
});

describe('calc', function() {
  var a = 3, b = 3;
  it('should multiply when called', function() {
    expect(calc.multiply(a,b)).to.eql(9);
  });
});

describe('calc', function() {
  var a = 4, b = 2;
  it('should divide when called', function() {
    expect(calc.divide(a,b)).to.eql(2);
  });
});
