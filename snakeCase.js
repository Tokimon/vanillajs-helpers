import dashed from './dashed';
export default function snakeCase(str, separateNumbers) {
    return dashed(str, separateNumbers).replace(/-+/g, '_');
}
