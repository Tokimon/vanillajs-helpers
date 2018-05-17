[vanillajs-helpers](../README.md) > ["chunkString"](../modules/_chunkstring_.md)



# External module: "chunkString"

## Index

### Functions

* [chunkString](_chunkstring_.md#chunkstring)



---
## Functions
<a id="chunkstring"></a>

###  chunkString

► **chunkString**(str: *`string`*, size?: *`number`*): `string`[]



*Defined in chunkString.ts:13*



Split a String up into smaller strings of a give size (eg. 'ABCDEF' -> \[AB,CD,EF\])

    chunkString('abcdefghijkl'); // -> ['ab', 'cd', 'ef', 'gh', 'ij', 'kl']
    chunkString('abcdefghijkl', 4); // -> ['abcd', 'efgh', 'ijkl']


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| str | `string`  | - |   String to split up |
| size | `number`  | 2 |   Size par chunk |





**Returns:** `string`[]
- Array of string chunks






___


