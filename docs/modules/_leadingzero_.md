[vanillajs-helpers](../README.md) > ["leadingZero"](../modules/_leadingzero_.md)



# External module: "leadingZero"

## Index

### Functions

* [leadingZero](_leadingzero_.md#leadingzero)



---
## Functions
<a id="leadingzero"></a>

###  leadingZero

► **leadingZero**(num: *`number`⎮`string`*, len?: *`number`*): `string`



*Defined in [leadingZero.ts:14](https://github.com/Tokimon/vanillajs-helpers/blob/d56b968/leadingZero.ts#L14)*



Makes sure a given number is a certain length and fills excess space with zeroes (0)

    leadingZero(1); // -> '01'
    leadingZero(123); // -> '123'
    leadingZero(123, 5); // -> '00123'


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| num | `number`⎮`string`  | - |   Number to add leading zeroes to |
| len | `number`  | 2 |   linimum length of the returned string |





**Returns:** `string`
- The given number as a string padded with zeroes to match the given min length






___


