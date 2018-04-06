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



*Defined in [chunkString.ts:9](https://github.com/Tokimon/vanillajs-helpers/blob/cf259dc/chunkString.ts#L9)*



Split a String up into smaller strings of a give size (eg. 'ABCDEF' -> \[AB,CD,EF\])

    chunkString('abcdefghijkl'); // -> ['ab', 'cd', 'ef', 'gh', 'ij', 'kl']
    chunkString('abcdefghijkl', 4); // -> ['abcd', 'efgh', 'ijkl']


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| str | `string`  | - |   - |
| size | `number`  | 2 |   - |





**Returns:** `string`[]





___


