[vanillajs-helpers](../README.md) > ["currencyFormat"](../modules/_currencyformat_.md)



# External module: "currencyFormat"

## Index

### Type aliases

* [CurrencyFomatter](_currencyformat_.md#currencyfomatter)


### Functions

* [currencyFormat](_currencyformat_.md#currencyformat)



---
## Type aliases
<a id="currencyfomatter"></a>

###  CurrencyFomatter

**Τ CurrencyFomatter**:  *`function`* 

*Defined in [currencyFormat.ts:5](https://github.com/Tokimon/vanillajs-helpers/blob/cf259dc/currencyFormat.ts#L5)*


#### Type declaration
►(num: *`number`*): `string`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| num | `number`   |  - |





**Returns:** `string`






___


## Functions
<a id="currencyformat"></a>

###  currencyFormat

► **currencyFormat**(thousand?: *`string`*): [CurrencyFomatter](_currencyformat_.md#currencyfomatter)



*Defined in [currencyFormat.ts:35](https://github.com/Tokimon/vanillajs-helpers/blob/cf259dc/currencyFormat.ts#L35)*



Creates a function that formats a number to a given currency format (eg. 1000 -> 1.000,00 €)

The template string should be the number 1000 described with before and after symbols (no numbers), a thousand separator and a decimal separator followed by the number of decimals defined with zeroes: `[before]1[thou.]000[dec.]00[after] -> $ 1,000.00`

    // Format number to default currency format (euro)
    const euro = currencyFormat();
    euro(2345234.678); // -> '2.345.234,68 €'
    
    // Format number to USD currency format
    const usd = currencyFormat('$ 1,000.00');
    usd(2345234.678); // -> '$ 2,345,234.68'
    
    // Format number to custom currency format
    const custom = currencyFormat('# 1-000;00 ¤');
    custom(2345234.678); // -> '# 2-345-234;68 ¤'
    
    // Specifying number of decimals
    const sixdecimals = currencyFormat('$ 1,000.000000');
    sixdecimals(2345234.678); // -> '$ 2,345,234.678000'
    sixdecimals(234.12345678); // -> '$ 234.123457'


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| thousand | `string`  | &quot;1.000,00 €&quot; |   - |





**Returns:** [CurrencyFomatter](_currencyformat_.md#currencyfomatter)





___


