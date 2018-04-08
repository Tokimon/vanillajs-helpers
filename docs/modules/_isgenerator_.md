[vanillajs-helpers](../README.md) > ["isGenerator"](../modules/_isgenerator_.md)



# External module: "isGenerator"

## Index

### Functions

* [isGenerator](_isgenerator_.md#isgenerator)
* [isGeneratorLike](_isgenerator_.md#isgeneratorlike)



---
## Functions
<a id="isgenerator"></a>

###  isGenerator

► **isGenerator**(obj: *`any`*): `boolean`



*Defined in [isGenerator.ts:39](https://github.com/Tokimon/vanillajs-helpers/blob/d56b968/isGenerator.ts#L39)*



Determine if the given object is a Generator Function

    function* gen() {}
    
    isGeneratorLike(gen); // -> true
    isGeneratorLike(() => {}); // -> false


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  Object to test |





**Returns:** `boolean`
- Whether the object a Generator or not






___

<a id="isgeneratorlike"></a>

###  isGeneratorLike

► **isGeneratorLike**(obj: *`any`*): `boolean`



*Defined in [isGenerator.ts:20](https://github.com/Tokimon/vanillajs-helpers/blob/d56b968/isGenerator.ts#L20)*



Determine if the given object is a Generator(ish) object

    function* gen() {}
    
    isGeneratorLike(gen); // -> true
    isGeneratorLike({ next() {}, throw() {} }); // -> true
    isGeneratorLike(() => {}); // -> false


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  Object to test |





**Returns:** `boolean`
- Whether the object a Generator like function or not






___


