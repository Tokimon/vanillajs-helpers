import phrasify from './phrasify';
export default function dashed(str, dashAroundNumbers) {
    return phrasify({ numbers: !!dashAroundNumbers })(str)
        .toLowerCase()
        .replace(/\s+/g, '-');
}
