[vanillajs-helpers](../README.md) > ["snakeCase"](../modules/_snakecase_.md)



# External module: "snakeCase"

## Index

### Functions

* [snakeCase](_snakecase_.md#snakecase)



---
## Functions
<a id="snakecase"></a>

###  snakeCase

► **snakeCase**(str: *`string`*, settings?: *[PhrasifySettings](../interfaces/_phrasify_.phrasifysettings.md)*): `string`



*Defined in [snakeCase.ts:19](https://github.com/Tokimon/vanillajs-helpers/blob/17062f0/snakeCase.ts#L19)*



Transform phrase into a snake_case phrase (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')

    snakeCase('Convert This phrase'); // -> convert_this_phrase
    snakeCase('dash VERSION1 beta', { numbers: true }); // -> dash_version_1_beta


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string`   |  String to transform |
| settings | [PhrasifySettings](../interfaces/_phrasify_.phrasifysettings.md)   |  Settings to pass to the phrasify function |





**Returns:** `string`
- The string transformed to snake_case






___


