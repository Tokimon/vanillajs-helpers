import camelCase from './camelCase';
export default function pascalCase(str) {
    return camelCase({ upper: true })(str);
}
