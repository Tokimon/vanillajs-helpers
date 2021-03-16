import expect from './assets/chai';
import hexToRGB from '../hexToRGB';

describe('"hexToRGB"', () => {
  it('Should generate a RGB array from empty string', () => {
    expect(hexToRGB('')).to.deep.equal([0, 0, 0]);
  });

  it('Should generate a RGB array from a hex color', () => {
    expect(hexToRGB('#ff0000')).to.deep.equal([255, 0, 0]);
    expect(hexToRGB('#0f0')).to.deep.equal([0, 255, 0]);
    expect(hexToRGB('0ff')).to.deep.equal([0, 255, 255]);
  });

  it('Should generate a RGB array from a hex color (without `#`)', () => {
    expect(hexToRGB('0ff')).to.deep.equal([0, 255, 255]);
  });

  it('Should add the alpha channel if present', () => {
    expect(hexToRGB('#ff000080')).to.deep.equal([255, 0, 0, 0.5]);
  });
});
