[vanillajs-helpers](../README.md) > ["dashed"](../modules/_dashed_.md)



# External module: "dashed"

## Index

### Functions

* [dashed](_dashed_.md#dashed)



---
## Functions
<a id="dashed"></a>

###  dashed

► **dashed**(str: *`string`*, settings?: *[PhrasifySettings](../interfaces/_phrasify_.phrasifysettings.md)*): `string`



*Defined in dashed.ts:16*



Transform phrase into a dashed phrase (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')

    dashed('some dashed phrase'); // -> some-dashed-phrase
    dasher('dash version1 beta', { numbers: true }); // -> dash-version-1-beta


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string`   |  String to transform |
| settings | [PhrasifySettings](../interfaces/_phrasify_.phrasifysettings.md)   |  Settings to pass to the phrasify function |





**Returns:** `string`
- The string with spaces replaced by a dash (-)






___


