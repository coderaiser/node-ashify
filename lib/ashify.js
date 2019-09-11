'use strict';

const {promisify} = require('util');
const crypto = require('crypto');
const assert = require('assert');
const ERROR_EMPTY = 'could not be empty!';

module.exports = promisify((stream, options, callback) => {
    assert(stream, 'stream ' + ERROR_EMPTY);
    assert(options, 'options ' + ERROR_EMPTY);
    assert(callback, 'callback ' + ERROR_EMPTY);
    
    const shasum = crypto.createHash(options.algorithm);
    
    stream.on('data', (d) => {
        shasum.update(d);
    });
    
    stream.once('error', (error) => {
        callback(error);
    });
    
    stream.once('end', () => {
        const hex = shasum.digest(options.encoding);
        callback(null, hex);
    });
});

