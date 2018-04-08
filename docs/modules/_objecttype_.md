[vanillajs-helpers](../README.md) > ["objectType"](../modules/_objecttype_.md)



# External module: "objectType"

## Index

### Functions

* [objectType](_objecttype_.md#objecttype)



---
## Functions
<a id="objecttype"></a>

###  objectType

► **objectType**(obj: *`any`*): `string`



*Defined in [objectType.ts:13](https://github.com/Tokimon/vanillajs-helpers/blob/d7b5019/objectType.ts#L13)*



Returns the objects type definition name (eg. \[object String\] => "string")

    objectType('string'); // -> 'string'
    objectType(123); // -> 'number'
    objectType({}); // -> 'object'


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  Object to get the type of |





**Returns:** `string`
- String representation of the object type






___


