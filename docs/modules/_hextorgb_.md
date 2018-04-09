[vanillajs-helpers](../README.md) > ["hexToRGB"](../modules/_hextorgb_.md)



# External module: "hexToRGB"

## Index

### Functions

* [hexToRGB](_hextorgb_.md#hextorgb)



---
## Functions
<a id="hextorgb"></a>

###  hexToRGB

► **hexToRGB**(hex: *`string`*): `number`[]



*Defined in [hexToRGB.ts:20](https://github.com/Tokimon/vanillajs-helpers/blob/17062f0/hexToRGB.ts#L20)*



Converts a Hexadecimal color to a RGB(A) color array

    hexToRGB('#2fd466'); // -> [47, 212, 102]
    
    // And with alpha channel
    hexToRGB('#2fd46680'); // -> [47, 212, 102, 0.5]


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hex | `string`   |  Hex color to convert to RGB |





**Returns:** `number`[]
- Array with RGB values






___


