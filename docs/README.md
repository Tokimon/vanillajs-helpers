
# Vanilla JS helpers

[![Build Status](https://travis-ci.org/Tokimon/vanillajs-helpers.svg?branch=master)](https://travis-ci.org/Tokimon/vanillajs-helpers)
[![Coverage](https://coveralls.io/repos/github/Tokimon/vanillajs-helpers/badge.svg?branch=master)](https://coveralls.io/github/Tokimon/vanillajs-helpers)

This is a collection of simple, no dependency, vanilla JS snippets with the aim
of making it easier to work with vanilla JS.

All snippets are written in TypeScript and converted into various JS versions suiting your use case:

- `./`: ES 6+ syntax.
- `./ts`: TypeScript (source files).
- `./cjs`: ES 6 syntax but with CommonJS `require` imports
- `./es5`: Good old ES 5 with CommonJS `require` imports

#### BROWSER SPECIFIC HELPERS

These helpers a JS platform agnostic, for browser specific helpers check out:
[vanillajs-browser-helpers](https://github.com/Tokimon/vanillajs-browser-helpers)


## ES version support
All methods are using latest techniques and generally no efforts have been made to
accommodate older browsers which do not support certain features. Polyfills should
be used to fill the gap. This is intentional as the need for polyfills are ever
diminishing, with modern browsers (and Node environments) getting updated all the time the vast
majority of the methods will be supported at one point. Also, with compilers like Babel, polyfills can be included automatically in the build process, making it simple to ensure full support. Therefore it is more future proof and clutter free to leave fallbacks and polyfills out of
the methods and just focus on core functionality.

Only in few edge cases where a polyfill might be tricky to implement correctly for a given
functionality, fallback functionality will be incorporated.

**Note**  
You will have to add these snippets as part of your transpilation if you wish to have
enable auto detection of polyfills.

## Available methods

Method | Description
------ | -----------
[camelCase](http://tokimon.github.io/vanillajs-helpers/modules/_camelcase_) | Turn a phrase or word with different casing into a `camelCased` word.
[capitalize](http://tokimon.github.io/vanillajs-helpers/modules/_capitalize_) | Capitalize Each Word In A Phrase.
[chunkString](http://tokimon.github.io/vanillajs-helpers/modules/_chunkstring_) | Chop up a string into chunks of the desired length.
[currencyFormat](http://tokimon.github.io/vanillajs-helpers/modules/_currencyformat_) | Format a number into a specific currency format like: $ 1.000,00.
[dashed](http://tokimon.github.io/vanillajs-helpers/modules/_dashed_) | Turn a phrase or word with different casing into a `dashed-lowercase-phrase`.
[eachWord](http://tokimon.github.io/vanillajs-helpers/modules/_eachword_) | Loop over each word in a phrase.
[formatNumber](http://tokimon.github.io/vanillajs-helpers/modules/_formatnumber_) | Format a number according to a given template like: 1.000,00.
[hash](http://tokimon.github.io/vanillajs-helpers/modules/_hash_) | Create a unique hash from a string.
[hexToNumber](http://tokimon.github.io/vanillajs-helpers/modules/_hextonumber_) | Convert Hexadecimal into a number (eg. b4 => 180).
[hexToRGB](http://tokimon.github.io/vanillajs-helpers/modules/_hextorgb_) | Converts a Hexadecimal color to a RGB(A) color array.
[indexLoop](http://tokimon.github.io/vanillajs-helpers/modules/_indexloop_) | Iterate over indexes in an array like object (break out early with `return false`).
[isArray](http://tokimon.github.io/vanillajs-helpers/modules/_isarray_) | Tests if a given object is an Array
[isBoolean](http://tokimon.github.io/vanillajs-helpers/modules/_isboolean_) | Tests if a given object is a Boolean
[isFunction](http://tokimon.github.io/vanillajs-helpers/modules/_isfunction_) | Tests if a given object is a Function
[isGenerator](http://tokimon.github.io/vanillajs-helpers/modules/_isgenerator_) | Tests if a given object is a Generator function
[isNumber](http://tokimon.github.io/vanillajs-helpers/modules/_isnumber_) | Tests if a given object is a Number
[isObject](http://tokimon.github.io/vanillajs-helpers/modules/_isobject_) | Tests if a given object is an Object (plain object)
[isString](http://tokimon.github.io/vanillajs-helpers/modules/_isstring_) | Tests if a given object is a String
[leadingZero](http://tokimon.github.io/vanillajs-helpers/modules/_leadingzero_) | Make sure a number is a string of a given length with empty slots filled up with zeroes (0), like: 007
[limitDecimals](http://tokimon.github.io/vanillajs-helpers/modules/_limitdecimals_) | Limit decimals of a floating number to a given length.
[numberToHex](http://tokimon.github.io/vanillajs-helpers/modules/_numbertohex_) | Convert a number to a Hexadecimal representation (eg. 180 => b4).
[objectType](http://tokimon.github.io/vanillajs-helpers/modules/_objecttype_) | Determine what type a given object is (string, array, etc.)
[pascalCase](http://tokimon.github.io/vanillajs-helpers/modules/_pascalcase_) | Turn a phrase or word with different casing into a `PascalCased` word.
[phrasify](http://tokimon.github.io/vanillajs-helpers/modules/_phrasify_) | Converts a word of a special casing or a phrase, into a space separated phrase.
[promisefy](http://tokimon.github.io/vanillajs-helpers/modules/_promisefy_) | Converts a regular method using `(err, data)` type of callback into a method that returns a promise.
[randomHexColor](http://tokimon.github.io/vanillajs-helpers/modules/_randomrgbcolor_) | Gives a random RGB color.
[randomId](http://tokimon.github.io/vanillajs-helpers/modules/_randomid_) | Generates a random id string of a given length.
[randomRGBColor](http://tokimon.github.io/vanillajs-helpers/modules/_randomrgbcolor_) | Gives a random RGB color.
[RGBToHex](http://tokimon.github.io/vanillajs-helpers/modules/_rgbtohex_) | Converts a RGB color to a HEX color (eg. [255, 0, 0] => #ff0000)
[safeDateChange](http://tokimon.github.io/vanillajs-helpers/modules/_safedatechange_) | Change to another date without jumping month (eg. if you are going from 31st of January to February you would normally end up in March).
[snakeCase](http://tokimon.github.io/vanillajs-helpers/modules/_snakecase_) | Turn a phrase or word with different casing into a `snake_cased` word.
[truncate](http://tokimon.github.io/vanillajs-helpers/modules/_truncate_) | Ensures a max length of a given string.
[uniqueArray](http://tokimon.github.io/vanillajs-helpers/modules/_uniquearray_) | Make sure an Array only contains unique values.

## Installation

```
npm install vanillajs-helpers
```

```
yarn add vanillajs-helpers
```

## Usage

```ts
// TypeScript modules
import camelCase from 'vanillajs-helpers/ts/camelCase';
camelCase('Camel cased phrase'); // camelCasedPhrase
```

```js
// ES 6 Modules
import camelCase from 'vanillajs-helpers/camelCase';
camelCase('Camel cased phrase'); // camelCasedPhrase
```

```js
// CommonJS Require Modules
const camelCase = require('vanillajs-helpers/cjs/camelCase').default;
camelCase('Camel cased phrase'); // camelCasedPhrase
```

```js
// ES5 (using CommonJS Require Modules)
const camelCase = require('vanillajs-helpers/es5/camelCase').default;
camelCase('Camel cased phrase'); // camelCasedPhrase
```

## Something missing?

If you have any questions, find any bugs or have ideas for missing functionality you would like to see included, feel
free to add an issue in the [issue list](https://github.com/Tokimon/vanillajs-helpers/issues) or perhaps do a
[Pull Request](https://github.com/Tokimon/vanillajs-helpers/pulls) of a great snippet you created.



## Index

### External modules

* ["RGBToHex"](modules/_rgbtohex_.md)
* ["camelCase"](modules/_camelcase_.md)
* ["capitalize"](modules/_capitalize_.md)
* ["chunkString"](modules/_chunkstring_.md)
* ["currencyFormat"](modules/_currencyformat_.md)
* ["dashed"](modules/_dashed_.md)
* ["eachWord"](modules/_eachword_.md)
* ["formatNumber"](modules/_formatnumber_.md)
* ["hash"](modules/_hash_.md)
* ["hexToNumber"](modules/_hextonumber_.md)
* ["hexToRGB"](modules/_hextorgb_.md)
* ["indexLoop"](modules/_indexloop_.md)
* ["isArray"](modules/_isarray_.md)
* ["isBoolean"](modules/_isboolean_.md)
* ["isFunction"](modules/_isfunction_.md)
* ["isGenerator"](modules/_isgenerator_.md)
* ["isNumber"](modules/_isnumber_.md)
* ["isObject"](modules/_isobject_.md)
* ["isString"](modules/_isstring_.md)
* ["leadingZero"](modules/_leadingzero_.md)
* ["limitDecimals"](modules/_limitdecimals_.md)
* ["numberToHex"](modules/_numbertohex_.md)
* ["objectType"](modules/_objecttype_.md)
* ["pascalCase"](modules/_pascalcase_.md)
* ["phrasify"](modules/_phrasify_.md)
* ["promisefy"](modules/_promisefy_.md)
* ["randomHexColor"](modules/_randomhexcolor_.md)
* ["randomId"](modules/_randomid_.md)
* ["randomRGBColor"](modules/_randomrgbcolor_.md)
* ["safeDateChange"](modules/_safedatechange_.md)
* ["snakeCase"](modules/_snakecase_.md)
* ["truncate"](modules/_truncate_.md)
* ["uniqueArray"](modules/_uniquearray_.md)



---
