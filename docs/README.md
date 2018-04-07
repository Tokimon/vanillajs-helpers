
# Vanilla JS helpers

[![Build Status](https://travis-ci.org/Tokimon/vanillajs-helpers.svg?branch=master)](https://travis-ci.org/Tokimon/vanillajs-helpers)
[![Coverage](https://coveralls.io/repos/github/Tokimon/vanillajs-helpers/badge.svg?branch=master)](https://coveralls.io/github/Tokimon/vanillajs-helpers)
<br>
[![bitHound Overall Score](https://www.bithound.io/github/Tokimon/vanillajs-helpers/badges/score.svg)](https://www.bithound.io/github/Tokimon/vanillajs-helpers)
[![bitHound Code](https://www.bithound.io/github/Tokimon/vanillajs-helpers/badges/code.svg)](https://www.bithound.io/github/Tokimon/vanillajs-helpers)
[![bitHound Dependencies](https://www.bithound.io/github/Tokimon/vanillajs-helpers/badges/dependencies.svg)](https://www.bithound.io/github/Tokimon/vanillajs-helpers/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/Tokimon/vanillajs-helpers/badges/devDependencies.svg)](https://www.bithound.io/github/Tokimon/vanillajs-helpers/master/dependencies/npm)

This is a collection of simple, no dependency, vanilla JS snippets with the aim
of making it easier to work with vanilla JS.

They is written in ES6, since now both Node and most of the major browsers support this syntax,
all scripts have however been converted into the CommonJS syntax and stored in the `./cjs` folder,
should they whish to be used in a Node environment.

Polyfills haven't been included as they exist in abundance on NPM, and since the
need for polyfills are ever diminishing it is more future proof and clutter free
to leave them out.

**BROWSER HELPERS**

These helpers a JS platform agnostic, for browser specific helpers check out:
[vanillajs-browser-helpers](https://github.com/Tokimon/vanillajs-browser-helpers)

## Documentation

Documentation is written in the [Wiki](https://github.com/Tokimon/vanillajs-helpers/wiki)
of the [GitHub repository](https://github.com/Tokimon/vanillajs-helpers), but here below is an overview of the helpers available.

### Helpers

- [camelCase](https://github.com/Tokimon/vanillajs-helpers/wiki/camelCase):
Turn a phrase or word with different casing into a `camelCased` word.
- [capitalize](https://github.com/Tokimon/vanillajs-helpers/wiki/capitalize):
Capitalize Each Word In A Phrase.
- [chunkString](https://github.com/Tokimon/vanillajs-helpers/wiki/chunkString):
Chop up a string into chunks of the desired length.
- [currencyFormat](https://github.com/Tokimon/vanillajs-helpers/wiki/currencyFormat):
Format a number into a specific currency format like: $ 1.000,00.
- [dashed](https://github.com/Tokimon/vanillajs-helpers/wiki/dashed):
Turn a phrase or word with different casing into a `dashed-lowercase-phrase`.
- [eachWord](https://github.com/Tokimon/vanillajs-helpers/wiki/eachWord):
Loop over each word in a phrase.
- [formatNumber](https://github.com/Tokimon/vanillajs-helpers/wiki/formatNumber):
Format a number acording to a given template like: 1.000,00.
- [hash](https://github.com/Tokimon/vanillajs-helpers/wiki/hash):
Create a unique hash from a string.
- [hexToNumber](https://github.com/Tokimon/vanillajs-helpers/wiki/hexToNumber):
Convert Hexadecimal into a number (eg. b4 => 180).
- [hexToRGB](https://github.com/Tokimon/vanillajs-helpers/wiki/hexToRGB):
Converts a Hexadecimal color to a RGB(A) color array.
- [isArray](https://github.com/Tokimon/vanillajs-helpers/wiki/isArray):
Tests if a given object is an Array
- [isBoolean](https://github.com/Tokimon/vanillajs-helpers/wiki/isBoolean):
Tests if a given object is a Boolean
- [isCollection](https://github.com/Tokimon/vanillajs-helpers/wiki/isCollection):
Tests if a given object is an Array or array like object (contains numeric entries and a length)
- [isFunction](https://github.com/Tokimon/vanillajs-helpers/wiki/isFunction):
Tests if a given object is a Function
- [isGenerator](https://github.com/Tokimon/vanillajs-helpers/wiki/isGenerator):
Tests if a given object is a Generator function
- [isNumber](https://github.com/Tokimon/vanillajs-helpers/wiki/isNumber):
Tests if a given object is a Number
- [isObject](https://github.com/Tokimon/vanillajs-helpers/wiki/isObject):
Tests if a given object is an Object (plain object)
- [isString](https://github.com/Tokimon/vanillajs-helpers/wiki/isString):
Tests if a given object is a String
- [iterate](https://github.com/Tokimon/vanillajs-helpers/wiki/iterate):
Iterate over entries in an array like object.
- [leadingZero](https://github.com/Tokimon/vanillajs-helpers/wiki/leadingZero):
Make sure a number is a string of a given length with empty slots filled up with zeroes (0), like: 007
- [leftPad](https://github.com/Tokimon/vanillajs-helpers/wiki/leftPad):
Pads a string to the left with a given character (much like leadingZero).
- [limitDecimals](https://github.com/Tokimon/vanillajs-helpers/wiki/limitDecimals):
Limit decimals of a floating number to a given length.
- [numberToHex](https://github.com/Tokimon/vanillajs-helpers/wiki/numberToHex):
Convert a number to a Hexadecimal representation (eg. 180 => b4).
- [objectType](https://github.com/Tokimon/vanillajs-helpers/wiki/objectType):
Determine what type a given object is (string, array, etc.)
- [pascalCase](https://github.com/Tokimon/vanillajs-helpers/wiki/pascalCase):
Turn a phrase or word with different casing into a `PascalCased` word.
- [phrasify](https://github.com/Tokimon/vanillajs-helpers/wiki/phrasify):
Converts a word of a special casing or a phrase, into a space separated phrase.
- [promisefy](https://github.com/Tokimon/vanillajs-helpers/wiki/promisefy):
Converts a regular method using `(err, data)` type of callback into a method that returns a promise.
- [randomId](https://github.com/Tokimon/vanillajs-helpers/wiki/randomId):
Generates a random id string of a given length.
- [randomRGBColor](https://github.com/Tokimon/vanillajs-helpers/wiki/randomRGBColor):
Gives a random RGB color.
- [repeatString](https://github.com/Tokimon/vanillajs-helpers/wiki/repeatString):
Creates a string with a given character (or string) repeated x number of times.
- [RGBToHex](https://github.com/Tokimon/vanillajs-helpers/wiki/RGBToHex):
Converts a RGB color to a HEX color (eg. [255, 0, 0] => #ff0000)
- [rightPad](https://github.com/Tokimon/vanillajs-helpers/wiki/rightPad):
Pads a string to the right with a given character (the inverse of leftPad).
- [snakeCase](https://github.com/Tokimon/vanillajs-helpers/wiki/snakeCase):
Turn a phrase or word with different casing into a `snake_cased` word.
- [trim](https://github.com/Tokimon/vanillajs-helpers/wiki/trim):
Trims off trailing spaces (or defined char) on both sides of a string.
- [truncate](https://github.com/Tokimon/vanillajs-helpers/wiki/truncate):
Ensures a max length of a given string.
- [uniqueArray](https://github.com/Tokimon/vanillajs-helpers/wiki/uniqueArray):
Make sure an Array only contains unique values.

## Installation

```
npm install vanillajs-helpers
```

## Usage

```js
// ES 6 Modules
import camelCase from 'vanillajs-helpers/camelCase';
camelCase('Camel cased phrase'); // camelCasedPhrase
```

```js
// CommonJS Modules
const camelCase = require('vanillajs-helpers/cjs/camelCase').default;
camelCase('Camel cased phrase'); // camelCasedPhrase
```

```js
// ES5 (if you don't want to transpile)
const camelCase = require('vanillajs-helpers/es5/camelCase').default;
camelCase('Camel cased phrase'); // camelCasedPhrase
```

## Something missing?

If you have any questions, find any bugs or have ideas for missing functionality you would like to see included, feel
free to add an issue in the [issue list](https://github.com/Tokimon/vanillajs-helpers/issues) or perhaps do a
[Pull Request](https://github.com/Tokimon/vanillajs-helpers/pulls) of a great snippet you created.

## Testing

Check out the [Testing docs](https://github.com/Tokimon/vanillajs-helpers/wiki/testing)



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
* ["isCollection"](modules/_iscollection_.md)
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
* ["randomId"](modules/_randomid_.md)
* ["randomRGBColor"](modules/_randomrgbcolor_.md)
* ["safeDateChange"](modules/_safedatechange_.md)
* ["snakeCase"](modules/_snakecase_.md)
* ["truncate"](modules/_truncate_.md)
* ["uniqueArray"](modules/_uniquearray_.md)



---