[vanillajs-helpers](../README.md) > ["RGBToHex"](../modules/_rgbtohex_.md)



# External module: "RGBToHex"

## Index

### Functions

* [RGBToHex](_rgbtohex_.md#rgbtohex)



---
## Functions
<a id="rgbtohex"></a>

###  RGBToHex

► **RGBToHex**(rgb: *`number`[]*): `string`

► **RGBToHex**(r: *`number`*, g: *`number`*, b: *`number`*, a?: *`undefined`⎮`number`*): `string`



*Defined in [RGBToHex.ts:20](https://github.com/Tokimon/vanillajs-helpers/blob/d7b5019/RGBToHex.ts#L20)*



Converts a Array of R G B (A) colors into a hex color.

    RGBToHex([123, 123, 123]) // -> #7b7b7b
    
    // With alpha channel
    RGBToHex([123, 123, 123, 0.5]) // -> #7b7b7b80


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rgb | `number`[]   |  The R G B (A) color represented as an array |





**Returns:** `string`
- A Hex representation of the given color




*Defined in [RGBToHex.ts:39](https://github.com/Tokimon/vanillajs-helpers/blob/d7b5019/RGBToHex.ts#L39)*



Converts R G B (A) color arguments into a hex color.

    // RGB as arguments
    RGBToHex( 123, 123, 123 ) // -> #7b7b7b80
    
    // With alpha channel
    RGBToHex( 123, 123, 123, 0.5 ) // -> #7b7b7b80


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| r | `number`   |  Red color |
| g | `number`   |  Green color |
| b | `number`   |  Blue color |
| a | `undefined`⎮`number`   |  Alpha channel |





**Returns:** `string`
- A Hex representation of the given colors






___


