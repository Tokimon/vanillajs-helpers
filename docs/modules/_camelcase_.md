[vanillajs-helpers](../README.md) > ["camelCase"](../modules/_camelcase_.md)



# External module: "camelCase"

## Index

### Interfaces

* [CamelCaseSettings](../interfaces/_camelcase_.camelcasesettings.md)


### Type aliases

* [CamelCaseFunction](_camelcase_.md#camelcasefunction)


### Functions

* [camelCase](_camelcase_.md#camelcase)



---
## Type aliases
<a id="camelcasefunction"></a>

###  CamelCaseFunction

**Τ CamelCaseFunction**:  *`function`* 

*Defined in [camelCase.ts:12](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/camelCase.ts#L12)*


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



*Defined in [camelCase.ts:53](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/camelCase.ts#L53)*



Transform a phrase into a camelCased word (eg. 'camel case' -> 'camelCase') If a settings `CamelCaseSettings` object is given a function is returned that transforms a string.

    // using default settings
    camelCase('data-value2-input'); // -> dataValue2input
    camelCase('XML data input'); // -> XmlDataInput

    // Adjusting settings
    const caser = camelCase({ abbr: true, numbers: true, upper: true });
    caser('data-VALUE2-input'); // -> DataVALUE2Input
    caser('XML data input'); // -> XMLDataInput


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | [CamelCaseSettings](../interfaces/_camelcase_.camelcasesettings.md)   |  - |





**Returns:** [CamelCaseFunction](_camelcase_.md#camelcasefunction)



*Defined in [camelCase.ts:54](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/camelCase.ts#L54)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string`   |  - |





**Returns:** `string`





___


