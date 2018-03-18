[vanillajs-helpers](../README.md) > ["RGBToHex"](../modules/_rgbtohex_.md)



# External module: "RGBToHex"

## Index

### Functions

* [RGBToHex](_rgbtohex_.md#rgbtohex)



---
## Functions
<a id="rgbtohex"></a>

###  RGBToHex

► **RGBToHex**(r: *`number`[]*): `string`

► **RGBToHex**(r: *`number`*, g: *`number`*, b: *`number`*, a?: *`undefined`⎮`number`*): `string`



*Defined in [RGBToHex.ts:21](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/RGBToHex.ts#L21)*



Converts a rgb(a) color to a hex color.

    // RGB as array
    RGBToHex( [123, 123, 123] ) // -> #7b7b7b

    // RGB as arguments
    RGBToHex( 123, 123, 123 ) // -> #7b7b7b80

    // With alpha channel
    RGBToHex( 123, 123, 123, 0.5 ) // -> #7b7b7b80


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| r | `number`[]   |  - |





**Returns:** `string`



*Defined in [RGBToHex.ts:22](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/RGBToHex.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| r | `number`   |  - |
| g | `number`   |  - |
| b | `number`   |  - |
| a | `undefined`⎮`number`   |  - |





**Returns:** `string`





___


