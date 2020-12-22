import { isEmpty, toLower } from './fp';

describe('Functional programming utils', () => {
  describe('isEmpty', () => {
    it.each([
      ['undefined', undefined],
      ['null', null],
      ['number', 0],
      ['empty string', ''],
      ['empty array', []],
      ['empty object', {}],
    ])('should return true for %s', (_, value) => {
      const actual = isEmpty(value);
      expect(actual).toBeTruthy();
    });

    it.each([
      ['string', 'foo'],
      ['array', ['foo']],
      ['object', { foo: 'bar' }],
    ])('should return false for %s', (_, value) => {
      const actual = isEmpty(value);
      expect(actual).toBeFalsy();
    });
  });

  describe('toLower', () => {
    it.each([
      ['fOo BAr', 'foo bar'],
      [123, '123'],
      [['fOo', 'BAr'], 'foo,bar'],
      [undefined, ''],
      [null, ''],
    ])('should lowercase %s', (value, expected) => {
      const actual = toLower(value);
      expect(actual).toBe(expected);
    });
  });
});
