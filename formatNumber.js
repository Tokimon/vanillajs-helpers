import limitDecimals from './limitDecimals';
const defaultSettings = {
    decimals: 2,
    thousand: '.',
    comma: ','
};
export default function formatNumber(num, settings) {
    const { decimals, thousand, comma } = Object.assign({}, defaultSettings, settings);
    const parts = `${limitDecimals(num, decimals)}`.split('.');
    parts[0] = parts[0].replace(/(\d)(?=(\d{3})+$)/g, `$1${thousand}`);
    return parts.join(comma);
}
