> Require all node builtins to a single namespace.
Infulenced by [https://github.com/stephenplusplus/modmod](modmod)

# Install 

`npm install all-builtins`

# Usage

```js

var $ = require('all-builtins');

// One can use $.<builtinName> to access the builtin.

console.log(Object.keys($));

// Would log:
/*
[ 'assert',
  'buffer',
  'child_process',
  'cluster',
  'crypto',
  'dgram',
  'dns',
  'domain',
  'events',
  'fs',
  'http',
  'https',
  'net',
  'os',
  'path',
  'punycode',
  'querystring',
  'readline',
  'stream',
  'string_decoder',
  'tls',
  'tty',
  'url',
  'util',
  'vm',
  'zlib' ]
 */
 ```

