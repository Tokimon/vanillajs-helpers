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



*Defined in [eachWord.ts:27](https://github.com/Tokimon/vanillajs-helpers/blob/d7b5019/eachWord.ts#L27)*



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
| phrase | `string`  | - |   Phrase to loop over |
| cb | [IndexLoopCallback](_indexloop_.md#indexloopcallback)  | - |   Callback function to call on every iteration |
| separator | `RegExp`⎮`string`  |  /[- _,]+/ |   - |





**Returns:** `number`
- Number of words in the phrase (length of looped array)






___


