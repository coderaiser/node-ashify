(function() {
    'use strict';
    
    var crypto      = require('crypto'),
        ERROR_EMPTY = 'could not be empty!';
    
    module.exports = function(stream, options, callback) {
        var shasum;
        
        if (!stream)
            throw(Error('stream '   + ERROR_EMPTY));
        
        if (!options)
            throw(Error('options '+ ERROR_EMPTY));
        
        if (!callback)
            throw(Error('callback ' + ERROR_EMPTY));
        
        shasum = crypto.createHash(options.algorithm);
        
        stream.on('data', function(d) {
            shasum.update(d);
        });
        
        stream.once('error', function(error) {
            callback(error);
        });
        
        stream.once('end', function() {
          var hex = shasum.digest(options.encoding);
          
          callback(null, hex);
        });
    };
    
})();
