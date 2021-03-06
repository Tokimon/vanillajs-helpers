[vanillajs-helpers](../README.md) > ["camelCase"](../modules/_camelcase_.md)



# External module: "camelCase"

## Index

### Interfaces

* [CamelCaseSettings](../interfaces/_camelcase_.camelcasesettings.md)


### Type aliases

* [CamelCaseFunction](_camelcase_.md#camelcasefunction)


### Functions

* [camelCase](_camelcase_.md#camelcase)
* [caser](_camelcase_.md#caser)


### Object literals

* [defaultSettings](_camelcase_.md#defaultsettings)



---
## Type aliases
<a id="camelcasefunction"></a>

###  CamelCaseFunction

**Τ CamelCaseFunction**:  *`function`* 

*Defined in camelCase.ts:11*


#### Type declaration
►(str: *`string`*): `string`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string`   |  - |





**Returns:** `string`






___


## Functions
<a id="camelcase"></a>

###  camelCase

► **camelCase**(input?: *[CamelCaseSettings](../interfaces/_camelcase_.camelcasesettings.md)*): [CamelCaseFunction](_camelcase_.md#camelcasefunction)

► **camelCase**(input: *`string`*): `string`



*Defined in camelCase.ts:60*



Return a function that transforms a string into a camelCased word (eg. 'camel case' -> 'camelCase').

    const caser = camelCase({ abbr: true, numbers: true, upper: true });
    
    caser('data-VALUE2-input'); // -> DataVALUE2Input
    caser('XML data input'); // -> XMLDataInput


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | [CamelCaseSettings](../interfaces/_camelcase_.camelcasesettings.md)   |  The settings for the returned format method |





**Returns:** [CamelCaseFunction](_camelcase_.md#camelcasefunction)
- The method to perform the formatting




*Defined in camelCase.ts:80*



Transform a string into a camelCased word (eg. 'camel case' -> 'camelCase')

    camelCase('data-value2-input'); // -> dataValue2input
    camelCase('XML data input'); // -> XmlDataInput
    

The Ruels of the camel casing can be changed by giving it an object

    const camelCaseKeepAbbr = camelCase({ abbr: true });
    camelCaseKeepAbbr('XML data input'); // -> XMLDataInput


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string`   |  The string to format |





**Returns:** `string`
- The formatted string






___

<a id="caser"></a>

###  caser

► **caser**(settings: *[CamelCaseSettings](../interfaces/_camelcase_.camelcasesettings.md)*, str: *`string`*): `string`



*Defined in camelCase.ts:33*



Transform a string into a camelCased word (eg. 'camel case' -> 'camelCase')

    caser('data-value2-input'); // -> dataValue2input


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| settings | [CamelCaseSettings](../interfaces/_camelcase_.camelcasesettings.md)   |  The settings for the string formatting |
| str | `string`   |  The string to format |





**Returns:** `string`
- The formatted string






___


<a id="defaultsettings"></a>

## Object literal: defaultSettings


<a id="defaultsettings.abbr"></a>

###  abbr

**●  abbr**:  *`false`*  = false

*Defined in camelCase.ts:17*





___
<a id="defaultsettings.numbers"></a>

###  numbers

**●  numbers**:  *`true`*  = true

*Defined in camelCase.ts:18*





___
<a id="defaultsettings.upper"></a>

###  upper

**●  upper**:  *`false`*  = false

*Defined in camelCase.ts:16*





___


