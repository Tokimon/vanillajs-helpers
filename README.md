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

All snippets are written in TypeScript and converted into various JS versions suiting your use case:

- `./`: ES 6+ and TypeScript files (TypeScript and JS files can live alongside each other just fine).
- `./cjs`: CommonJS - ES 6 syntax but with CommonJS `require` imports
- `./es5`: ES 5 - Good old ES 5 with CommonJS `require` imports

#### BROWSER SPECIFIC HELPERS

These helpers a JS platform agnostic, for browser specific helpers check out:
[vanillajs-browser-helpers](https://github.com/Tokimon/vanillajs-browser-helpers)


## Cross browser support
All methods are using latest techniques and generally no efforts have been made to
accommodate older browsers which do not support certain features. Polyfills should
be used to fill the gap. This is intentional as the need for polyfills are ever
diminishing, with modern browsers (and Node environments) getting updated all the time the vast
majority of the methods will be supported at one point. Also, with compilers like Babel, polyfills can be included automatically in the build process, making it simple to ensure full support. Therefore it is more future proof and clutter free to leave fallbacks and polyfills out of
the methods and just focus on core functinonality.

Only in few edge cases where a polyfill might be tricky to implement correctly for a given
functionality, fallback functionality will be incorporated.

**Note**  
You will have to add these snippets as part of your transpilation if you wish to have
enable auto detection of polyfills.

## Available methods

Method | Description
------ | -----------
[camelCase](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_camelcase_.md) | Turn a phrase or word with different casing into a `camelCased` word.
[capitalize](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_capitalize_.md) | Capitalize Each Word In A Phrase.
[chunkString](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_chunkstring_.md) | Chop up a string into chunks of the desired length.
[currencyFormat](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_currencyformat_.md) | Format a number into a specific currency format like: $ 1.000,00.
[dashed](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_dashed_.md) | Turn a phrase or word with different casing into a `dashed-lowercase-phrase`.
[eachWord](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_eachword_.md) | Loop over each word in a phrase.
[formatNumber](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_formatnumber_.md) | Format a number according to a given template like: 1.000,00.
[hash](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_hash_.md) | Create a unique hash from a string.
[hexToNumber](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_hextonumber_.md) | Convert Hexadecimal into a number (eg. b4 => 180).
[hexToRGB](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_hextorgb_.md) | Converts a Hexadecimal color to a RGB(A) color array.
[indexLoop](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_indexloop_.md) | Iterate over indexes in an array like object (break out early with `return false`).
[isArray](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_isarray_.md) | Tests if a given object is an Array
[isBoolean](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_isboolean_.md) | Tests if a given object is a Boolean
[isFunction](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_isfunction_.md) | Tests if a given object is a Function
[isGenerator](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_isgenerator_.md) | Tests if a given object is a Generator function
[isNumber](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_isnumber_.md) | Tests if a given object is a Number
[isObject](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_isobject_.md) | Tests if a given object is an Object (plain object)
[isString](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_isstring_.md) | Tests if a given object is a String
[leadingZero](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_leadingzero_.md) | Make sure a number is a string of a given length with empty slots filled up with zeroes (0), like: 007
[limitDecimals](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_limitdecimals_.md) | Limit decimals of a floating number to a given length.
[numberToHex](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_numbertohex_.md) | Convert a number to a Hexadecimal representation (eg. 180 => b4).
[objectType](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_objecttype_.md) | Determine what type a given object is (string, array, etc.)
[pascalCase](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_pascalcase_.md) | Turn a phrase or word with different casing into a `PascalCased` word.
[phrasify](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_phrasify_.md) | Converts a word of a special casing or a phrase, into a space separated phrase.
[promisefy](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_promisefy_.md) | Converts a regular method using `(err, data)` type of callback into a method that returns a promise.
[randomHexColor](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_randomrgbcolor_.md) | Gives a random RGB color.
[randomId](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_randomid_.md) | Generates a random id string of a given length.
[randomRGBColor](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_randomrgbcolor_.md) | Gives a random RGB color.
[RGBToHex](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_rgbtohex_.md) | Converts a RGB color to a HEX color (eg. [255, 0, 0] => #ff0000)
[safeDateChange](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_safedatechange_.md) | Change to another date without jumping month (eg. if you are going from 31st of January to February you would normally end up in March).
[snakeCase](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_snakecase_.md) | Turn a phrase or word with different casing into a `snake_cased` word.
[truncate](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_truncate_.md) | Ensures a max length of a given string.
[uniqueArray](https://github.com/Tokimon/vanillajs-helpers/tree/master/docs/modules/_uniquearray_.md) | Make sure an Array only contains unique values.

## Installation

```
npm install vanillajs-helpers
```

```
yarn add vanillajs-helpers
```

## Usage

```ts
// TypeScript modules (TypeScript will include the .ts file opposed to the .js file)
import camelCase from 'vanillajs-helpers/camelCase';
camelCase('Camel cased phrase'); // camelCasedPhrase
```

```js
// ES 6 Modules (ES 6 modules will include the .js file opposed to the .ts file)
import camelCase from 'vanillajs-helpers/camelCase';
camelCase('Camel cased phrase'); // camelCasedPhrase
```

```js
// CommonJS Modules
const camelCase = require('vanillajs-helpers/cjs/camelCase').default;
camelCase('Camel cased phrase'); // camelCasedPhrase
```

```js
// ES5 (if you don't want to include files transpilation step)
const camelCase = require('vanillajs-helpers/es5/camelCase').default;
camelCase('Camel cased phrase'); // camelCasedPhrase
```

## Something missing?

If you have any questions, find any bugs or have ideas for missing functionality you would like to see included, feel
free to add an issue in the [issue list](https://github.com/Tokimon/vanillajs-helpers/issues) or perhaps do a
[Pull Request](https://github.com/Tokimon/vanillajs-helpers/pulls) of a great snippet you created.
