import camelCase from './camelCase';



/**
 * Transform a phrase into a PascalCased word (eg. 'pascal case' -> 'PascalCase')
 */
export default function pascalCase(str: string): string {
  return (<Function> camelCase({ upper: true }))(str);
}
