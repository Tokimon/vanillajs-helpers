[vanillajs-helpers](../README.md) > ["pascalCase"](../modules/_pascalcase_.md)



# External module: "pascalCase"

## Index

### Functions

* [pascalCase](_pascalcase_.md#pascalcase)



---
## Functions
<a id="pascalcase"></a>

###  pascalCase

► **pascalCase**(input?: *[CamelCaseSettings](../interfaces/_camelcase_.camelcasesettings.md)*): [CamelCaseFunction](_camelcase_.md#camelcasefunction)

► **pascalCase**(input: *`string`*): `string`



*Defined in pascalCase.ts:20*



Return a function that transforms a string into a PascalCased word (eg. 'pascal case' -> 'PascalCase').

    const caser = pascalCase({ abbr: true, numbers: true });
    
    caser('data-VALUE2-input'); // -> DataVALUE2Input
    caser('XML data input'); // -> XMLDataInput


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | [CamelCaseSettings](../interfaces/_camelcase_.camelcasesettings.md)   |  The settings for the returned format method |





**Returns:** [CamelCaseFunction](_camelcase_.md#camelcasefunction)
- The method to perform the formatting




*Defined in pascalCase.ts:33*



Transform a string into a PascalCased word (eg. 'pascal case' -> 'PascalCase')

    pascalCase('data-value2-input'); // -> DataValue2input
    pascalCase('XML data input'); // -> XmlDataInput


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string`   |  The string to format |





**Returns:** `string`
- The formatted string






___


