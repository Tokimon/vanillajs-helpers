import phrasify from './phrasify';

/**
 * Transform phrase into a dashed phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 */
export default function dashed(str: string, dashAroundNumbers?: boolean) {
  return (<Function> phrasify({ numbers: !!dashAroundNumbers }))(str)
    .toLowerCase()
    .replace(/\s+/g, '-');
}
