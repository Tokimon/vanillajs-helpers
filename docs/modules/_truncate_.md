[vanillajs-helpers](../README.md) > ["truncate"](../modules/_truncate_.md)



# External module: "truncate"

## Index

### Interfaces

* [TruncateSettings](../interfaces/_truncate_.truncatesettings.md)


### Functions

* [truncate](_truncate_.md#truncate)



---
## Functions
<a id="truncate"></a>

###  truncate

► **truncate**(str: *`string`*, settings?: *[TruncateSettings](../interfaces/_truncate_.truncatesettings.md)*): `string`



*Defined in [truncate.ts:26](https://github.com/Tokimon/vanillajs-helpers/blob/d56b968/truncate.ts#L26)*



Limits a string to a given number of characters and adds '...' in the end

    truncate('No max length to the string'); // -> No max limit to the string length
    truncate('With a max length to the string', { maxLength: 10 }); // -> With a max...
    truncate('With a max length to the string and a differnet ending', { maxLength: 10, end: ' <---' }); // -> With a max <---


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| str | `string`  | - |   String to truncate |
| settings | [TruncateSettings](../interfaces/_truncate_.truncatesettings.md)  |  {} |   Settings to use with the truncation |





**Returns:** `string`
- The truncated string






___


