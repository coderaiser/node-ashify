'use strict';

/*global describe, it */
const fs = require('fs');

const should = require('should');
const tryToCatch = require('try-to-catch');

const ashify = require('..');

describe('with parameters', () => {
    it('file do not exist', async () => {
        const stream = fs.createReadStream('not-such-file');
        
        const options = {
            algorithm: 'sha1',
            encoding: 'hex',
        };
        
        const [error] = await tryToCatch(ashify, stream, options);
        error.should.be.an.instanceof(Error);
    });
    
    it('should return hash in callback', async () => {
        const stream = fs.createReadStream('README.md');
        
        const options = {
            algorithm: 'sha1',
            encoding: 'hex',
        };
        
        const [, hash] = await tryToCatch(ashify, stream, options);
        hash.should.be.type('string');
    });
});
