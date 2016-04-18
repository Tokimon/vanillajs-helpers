import attr from './attr';
import { camelCase } from './wordCasing';

/**
 * Get/set the value of a 'data-' attribute on a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to fetch the data from
 * @param  {String} dataName - Name of the 'data-' attribute to handle (eg. id -> data-id)
 * @param  {String|Number} [value] - Value to insert into the 'data-' attribute
 * @return {String} - Data found in the 'data-' attribute (or the old value if {value} is defined)
 */
export default function data(elm, dataName, value) {
  if(!dataName) { return null; }

  if(elm.dataset) {
    // Make sure the names are camel cased and not dashed
    dataName = camelCase(dataName, '-');
    const oldVal = elm.dataset[dataName];
    if(value) { elm.dataset[dataName] = value; }
    return oldVal;
  }

  // Fallback to getting/setting attribute
  return attr(elm, `data-${dataName}`, value);
}
