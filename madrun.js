'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'mocha',
    'lint': () => 'putout lib test madrun.js',
    'fix:lint': () => run('lint', '--fix'),
    'coverage': () => 'nyc npm test',
};

