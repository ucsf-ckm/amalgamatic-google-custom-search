/*jshint expr: true*/

var custom = require('../index.js');

var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.experiment;
var it = lab.test;

var Code = require('code');
var expect = Code.expect;

describe('exports', function () {
    it('includes search() and setOptions()', function (done) {
        expect(typeof custom.search).to.equal('function');
        expect(typeof custom.setOptions).to.equal('function');
        done();
    });
});
