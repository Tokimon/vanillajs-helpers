[vanillajs-helpers](../README.md) > ["indexLoop"](../modules/_indexloop_.md)



# External module: "indexLoop"

## Index

### Type aliases

* [IndexLoopCallback](_indexloop_.md#indexloopcallback)


### Functions

* [indexLoop](_indexloop_.md#indexloop)



---
## Type aliases
<a id="indexloopcallback"></a>

###  IndexLoopCallback

**Τ IndexLoopCallback**:  *`function`* 

*Defined in [indexLoop.ts:5](https://github.com/Tokimon/vanillajs-helpers/blob/d7b5019/indexLoop.ts#L5)*


#### Type declaration
►(item: *`any`*, index: *`number`*, arr: *`ArrayLike`.<`any`>*): `void`⎮`boolean`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| item | `any`   |  - |
| index | `number`   |  - |
| arr | `ArrayLike`.<`any`>   |  - |





**Returns:** `void`⎮`boolean`






___


## Functions
<a id="indexloop"></a>

###  indexLoop

► **indexLoop**(collection: *`any`[]⎮`ArrayLike`.<`any`>*, cb: *[IndexLoopCallback](_indexloop_.md#indexloopcallback)*): `number`



*Defined in [indexLoop.ts:25](https://github.com/Tokimon/vanillajs-helpers/blob/d7b5019/indexLoop.ts#L25)*



Iterate over numeric indexes in an object (use `return false` to break the loop prematurely).

    const len = indexLoop([1,2,3], (n) => { console.log(n); }); // -> 1 ... 2 ... 3
    // len === 3
    
    // With premature break
    indexLoop([1,2,3], (n) => { console.log(n); return n < 3 }); // -> 1 ... 2


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| collection | `any`[]⎮`ArrayLike`.<`any`>   |  The collection to iterate over |
| cb | [IndexLoopCallback](_indexloop_.md#indexloopcallback)   |  The function to call on each iteration |





**Returns:** `number`
- The lenght of the given collection






___


