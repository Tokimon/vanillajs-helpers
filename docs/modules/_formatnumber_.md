[vanillajs-helpers](../README.md) > ["formatNumber"](../modules/_formatnumber_.md)



# External module: "formatNumber"

## Index

### Interfaces

* [FormatNumberSettings](../interfaces/_formatnumber_.formatnumbersettings.md)


### Functions

* [formatNumber](_formatnumber_.md#formatnumber)


### Object literals

* [defaultSettings](_formatnumber_.md#defaultsettings)



---
## Functions
<a id="formatnumber"></a>

###  formatNumber

► **formatNumber**(num: *`number`*, settings?: *[FormatNumberSettings](../interfaces/_formatnumber_.formatnumbersettings.md)*): `string`



*Defined in formatNumber.ts:37*



Formats a number with defined thousand and decimal separator, and a decimal limit (see `limitDecimals` for details on `decCount`)

    // Default format
    formatNumber(123456); // -> 123.456,00
    
    // Custom format
    formatNumber(123456, { decimals: '>3', thousandSep: '-', decimalSep: ':' }); // -> 123-456:000


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| num | `number`   |  Number to format |
| settings | [FormatNumberSettings](../interfaces/_formatnumber_.formatnumbersettings.md)   |  Settings for the number formatting |





**Returns:** `string`
Formatted number as a string






___


<a id="defaultsettings"></a>

## Object literal: defaultSettings


<a id="defaultsettings.decimalsep"></a>

###  decimalSep

**●  decimalSep**:  *`string`*  = ","

*Defined in formatNumber.ts:16*





___
<a id="defaultsettings.decimals"></a>

###  decimals

**●  decimals**:  *`number`*  = 2

*Defined in formatNumber.ts:14*





___
<a id="defaultsettings.thousandsep"></a>

###  thousandSep

**●  thousandSep**:  *`string`*  = "."

*Defined in formatNumber.ts:15*





___


