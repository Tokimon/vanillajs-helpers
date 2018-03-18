[vanillajs-helpers](../README.md) > ["indexLoop"](../modules/_indexloop_.md)



# External module: "indexLoop"

## Index

### Type aliases

* [ArrayLike](_indexloop_.md#arraylike)
* [IndexLoopCallback](_indexloop_.md#indexloopcallback)


### Functions

* [indexLoop](_indexloop_.md#indexloop)



---
## Type aliases
<a id="arraylike"></a>

###  ArrayLike

**Τ ArrayLike**:  *`object`* 

*Defined in [indexLoop.ts:5](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/indexLoop.ts#L5)*


#### Type declaration


[key: `number`]: `any`






___

<a id="indexloopcallback"></a>

###  IndexLoopCallback

**Τ IndexLoopCallback**:  *`function`* 

*Defined in [indexLoop.ts:10](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/indexLoop.ts#L10)*


#### Type declaration
►(item: *`any`*, index: *`number`*, arr: *`any`[]⎮[ArrayLike](_indexloop_.md#arraylike)*): `void`⎮`boolean`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| item | `any`   |  - |
| index | `number`   |  - |
| arr | `any`[]⎮[ArrayLike](_indexloop_.md#arraylike)   |  - |





**Returns:** `void`⎮`boolean`






___


## Functions
<a id="indexloop"></a>

###  indexLoop

► **indexLoop**(collection: *`any`[]⎮[ArrayLike](_indexloop_.md#arraylike)*, cb: *[IndexLoopCallback](_indexloop_.md#indexloopcallback)*): `number`



*Defined in [indexLoop.ts:18](https://github.com/Tokimon/vanillajs-helpers/blob/255013e/indexLoop.ts#L18)*



Iterate over numeric indexes in an object (use `return false` to break the loop prematurely).


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| collection | `any`[]⎮[ArrayLike](_indexloop_.md#arraylike)   |  - |
| cb | [IndexLoopCallback](_indexloop_.md#indexloopcallback)   |  - |





**Returns:** `number`





___


