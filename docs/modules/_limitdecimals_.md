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



*Defined in [limitDecimals.ts:18](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/limitDecimals.ts#L18)*



Limit decimals of a floating number to specified length. The length depends on `decimals` which can have the following settings (n = integer):

*   > n = a minimum number of decimals, if the current number of decimals are
    > 
    >      shorter than the defined length, extra 0 (zeros) will be added.

*   <n = a maximum number of decimals, longer decimals will be rounded and

          shortened down to this number.

*   n = match this exact number of decimals, rounding longer decimals and adding

        extra 0 (zeroes) to shorter ones.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| num | `number`⎮`string`  | - |   - |
| decimals | `number`⎮`string`  | 2 |   - |





**Returns:** `string`





___


