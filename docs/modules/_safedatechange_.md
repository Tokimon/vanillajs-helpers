[vanillajs-helpers](../README.md) > ["safeDateChange"](../modules/_safedatechange_.md)



# External module: "safeDateChange"

## Index

### Functions

* [safeDateChange](_safedatechange_.md#safedatechange)



---
## Functions
<a id="safedatechange"></a>

###  safeDateChange

► **safeDateChange**(from: *`Date`*, to: *`Date`*): `Date`



*Defined in [safeDateChange.ts:19](https://github.com/Tokimon/vanillajs-helpers/blob/cf259dc/safeDateChange.ts#L19)*



Verifies and corrects Dates where the month could accedently skipped into the next month because the date is out of bounds by the month changed to.

    const date = new Date(2017, 0, 31);
    newDate = new Date(date);
    newDate.setMonth(1);
    
    // Normally you would expect "newDate" month to be February, but since the date
    // of the previous date was 31 and february max date is 28 (or 29), the actual
    // "newDate" is "Match 3rd 2017". Using this function keeps it at "February 28 2017"
    
    safeDateChange(date, newDate);
    
    newDate; // <- "February 28 2017"


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| from | `Date`   |  - |
| to | `Date`   |  - |





**Returns:** `Date`





___

