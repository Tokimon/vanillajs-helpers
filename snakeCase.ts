import { PhrasifySettings } from './phrasify';
import dashed from './dashed';



/**
 * Transform phrase into a snake_case phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 */
export default function snakeCase(str: string, settings?: PhrasifySettings) {
  return dashed(str, settings).replace(/-+/g, '_');
}
