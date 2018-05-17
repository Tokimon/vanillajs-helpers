[vanillajs-helpers](../README.md) > ["promisefy"](../modules/_promisefy_.md)



# External module: "promisefy"

## Index

### Functions

* [promisefy](_promisefy_.md#promisefy)



---
## Functions
<a id="promisefy"></a>

###  promisefy

► **promisefy**(fn: *`Function`*): `Function`



*Defined in promisefy.ts:22*



Converts a callback based action into one returning a Promise instead.

    function action(name, callback) { ... callback(); }
    
    action = promisefy(action);
    
    action
      .then(() => 'all good')
      .catch(() => 'Something went wrong');


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fn | `Function`   |  - |





**Returns:** `Function`
- The formatted string






___


