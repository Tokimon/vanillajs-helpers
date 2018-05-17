[vanillajs-helpers](../README.md) > ["limitDecimals"](../modules/_limitdecimals_.md)



# External module: "limitDecimals"

## Index

### Functions

* [limitDecimals](_limitdecimals_.md#limitdecimals)



---
## Functions
<a id="limitdecimals"></a>

###  limitDecimals

► **limitDecimals**(num: *`number`⎮`string`*, decimals?: *`number`⎮`string`*): `string`



*Defined in limitDecimals.ts:33*



Limit decimals of a floating number to specified length. The length depends on `decimals` which can have the following settings (n = integer):

Char

Description

**>n**

Minimum number of decimals, if the current number of decimals are shorter than the defined length, extra 0 (zeros) will be added.

**<n**

Maximum number of decimals, longer decimals will be rounded and shortened down to this number.

**n**

Match this exact number of decimals, rounding longer decimals and adding extra 0 (zeroes) to shorter ones.

    // Exact number of decimals
    limitDecimals(123.4567) // -> 123.46
    limitDecimals(123, 5) // -> 123.00000
    
    // Max number of decimals
    limitDecimals(123.4567, '<3') // -> 123.457
    limitDecimals(123, '<3') // -> 123
    
    // Min number decimals
    limitDecimals(123.4, '>4') // -> 123.4000
    limitDecimals(123.456789, '>4') // -> 123.456789


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| num | `number`⎮`string`  | - |   Number to limit the decimals on |
| decimals | `number`⎮`string`  | 2 |   Setting for how to handle the decimals |





**Returns:** `string`
- String representation of the number with the decimals adjusted according to the decimal setting






___


