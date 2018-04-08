[vanillajs-helpers](../README.md) > ["phrasify"](../modules/_phrasify_.md)



# External module: "phrasify"

## Index

### Interfaces

* [PhrasifySettings](../interfaces/_phrasify_.phrasifysettings.md)


### Functions

* [phrasify](_phrasify_.md#phrasify)
* [seperateWords](_phrasify_.md#seperatewords)


### Object literals

* [defaultSettings](_phrasify_.md#defaultsettings)



---
## Functions
<a id="phrasify"></a>

###  phrasify

► **phrasify**(input?: *[PhrasifySettings](../interfaces/_phrasify_.phrasifysettings.md)*): `Function`

► **phrasify**(input: *`string`*): `string`



*Defined in [phrasify.ts:55](https://github.com/Tokimon/vanillajs-helpers/blob/d56b968/phrasify.ts#L55)*



Return a function that transform a string into a space separated phrase

    const phraser = phrasify({ numbers: true });
    
    phraser('dataVALUE2-input'); // -> data VALUE 2 input
    phraser('XMLDataInput'); // -> XML data input


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | [PhrasifySettings](../interfaces/_phrasify_.phrasifysettings.md)   |  The settings for the returned transform method |





**Returns:** `Function`
- The method to perform the transform




*Defined in [phrasify.ts:68](https://github.com/Tokimon/vanillajs-helpers/blob/d56b968/phrasify.ts#L68)*



Transform a string into a space separated phrase

    phrasify('dataVALUE2-input'); // -> data VALUE2 input
    phrasify('XMLDataInput'); // -> XML data input


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string`   |  The string to transform |





**Returns:** `string`
- The transformed phrase or word






___

<a id="seperatewords"></a>

###  seperateWords

► **seperateWords**(settings: *[PhrasifySettings](../interfaces/_phrasify_.phrasifysettings.md)*, str: *`string`*): `string`



*Defined in [phrasify.ts:27](https://github.com/Tokimon/vanillajs-helpers/blob/d56b968/phrasify.ts#L27)*



Transform a string into a space separated phrase

    seperateWords('dataValue2-input'); // -> data Value2 input


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| settings | [PhrasifySettings](../interfaces/_phrasify_.phrasifysettings.md)   |  The settings for the word separation |
| str | `string`   |  The string to transform |





**Returns:** `string`
- The transformed string






___


<a id="defaultsettings"></a>

## Object literal: defaultSettings


<a id="defaultsettings.numbers"></a>

###  numbers

**●  numbers**:  *`false`*  = false

*Defined in [phrasify.ts:12](https://github.com/Tokimon/vanillajs-helpers/blob/d56b968/phrasify.ts#L12)*





___


