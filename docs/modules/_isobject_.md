[vanillajs-helpers](../README.md) > ["isObject"](../modules/_isobject_.md)



# External module: "isObject"

## Index

### Functions

* [isObject](_isobject_.md#isobject)



---
## Functions
<a id="isobject"></a>

###  isObject

► **isObject**(obj: *`any`*): `boolean`



*Defined in [isObject.ts:19](https://github.com/Tokimon/vanillajs-helpers/blob/97e473e/isObject.ts#L19)*



Is the given object of type String

    class Obj {}
    
    isObject({}); // -> true
    isObject(new Obj()); // -> true
    isObject('123'); // -> false


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  Object to test |





**Returns:** `boolean`
- Whether the object a plain object or not






___


