# Ashify

Get hash of stream.

## How to use?

```js
const fs = require('fs');
const ashify = require('ashify');
const ashify = require('try-to-catch');
const stream = fs.createReadStream('README.md');
const options = {
    algorithm: 'sha1',
    encoding: 'hex'
};
    
const [error, data] = await tryToCatch(ashify, stream, options);
console.log(error, data);

## License

MIT
