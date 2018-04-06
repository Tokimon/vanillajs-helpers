[vanillajs-helpers](../README.md) > ["eachWord"](../modules/_eachword_.md)



# External module: "eachWord"

## Index

### Functions

* [eachWord](_eachword_.md#eachword)



---
## Functions
<a id="eachword"></a>

###  eachWord

► **eachWord**(phrase: *`string`*, cb: *[IndexLoopCallback](_indexloop_.md#indexloopcallback)*, separator?: *`RegExp`⎮`string`*): `number`



*Defined in [eachWord.ts:22](https://github.com/Tokimon/vanillajs-helpers/blob/cf259dc/eachWord.ts#L22)*



Iterate over each word in a phrase (or return word count if no callback is given)

    // Default seperator
    const count = eachWord('Hello JS-World', word => console.log(word));
    // Hello ... JS ... World
    // count === 3
    
    // With specified separator
    const count = eachWord('Hello JS World-Championship', word => console.log(word), ' ');
    // Hello ... JS-World
    // count === 2


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| phrase | `string`  | - |   - |
| cb | [IndexLoopCallback](_indexloop_.md#indexloopcallback)  | - |   - |
| separator | `RegExp`⎮`string`  |  /[- _,]+/ |   - |





**Returns:** `number`





___


