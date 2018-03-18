[vanillajs-helpers](../README.md) > ["formatNumber"](../modules/_formatnumber_.md)



# External module: "formatNumber"

## Index

### Interfaces

* [FormatNumberSettings](../interfaces/_formatnumber_.formatnumbersettings.md)


### Functions

* [formatNumber](_formatnumber_.md#formatnumber)



---
## Functions
<a id="formatnumber"></a>

###  formatNumber

► **formatNumber**(num: *`number`*, settings?: *[FormatNumberSettings](../interfaces/_formatnumber_.formatnumbersettings.md)*): `string`



*Defined in [formatNumber.ts:33](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/formatNumber.ts#L33)*



Formats a number with defined thousand and decimal separator, and a decimal limit (see `limitDecimals` for details on `decCount`)

    // Default format
    formatNumber(123456); // -> 123.456,00

    // Custom format
    formatNumber(123456, { decimals: '>3', thousandSep: '-', decimalSep: ':' }); // -> 123-456:000


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| num | `number`   |  - |
| settings | [FormatNumberSettings](../interfaces/_formatnumber_.formatnumbersettings.md)   |  - |





**Returns:** `string`





___


