[vanillajs-helpers](../README.md) > ["hash"](../modules/_hash_.md)



# External module: "hash"

## Index

### Functions

* [hash](_hash_.md#hash)
* [hashCode](_hash_.md#hashcode)



---
## Functions
<a id="hash"></a>

###  hash

► **hash**(str: *`string`*): `string`



*Defined in [hash.ts:41](https://github.com/Tokimon/vanillajs-helpers/blob/97e473e/hash.ts#L41)*



Generates a unique hash (DJB2) string from a string

    hash('Hash this string'); // -> sg463l


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string`   |  String to generate hash string from |





**Returns:** `string`
- Hash string






___

<a id="hashcode"></a>

###  hashCode

► **hashCode**(str: *`string`*): `number`



*Defined in [hash.ts:15](https://github.com/Tokimon/vanillajs-helpers/blob/97e473e/hash.ts#L15)*



Generates a unique numeric hash (DJB2) code from a string

    hashCode('Hash this string'); // -> 1720121313


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string`   |  String to generate hash code from |





**Returns:** `number`
- Hash code






___


