import camelCase from './camelCase';



/**
 * Transform a phrase into a PascalCased word (eg. 'pascal case' -> 'PascalCase')
 */
export default function pascalCase(str: string): string {
  return (camelCase({ upper: true }) as Function)(str);
}
