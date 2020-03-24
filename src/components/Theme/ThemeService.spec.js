import { createStaticTheme, createVariables, traverse } from './ThemeService';

describe('ThemeService', () => {
  const theme = {
    color: {
      neutral: {
        100: '#FAFBFC',
        300: '#D8DDE1',
        500: '#9DA7B1',
        700: '#5C656F',
        900: '#212933',
      },
    },
    spacing: {
      s: '4px',
      m: '8px',
      l: '12px',
      xl: '16px',
    },
  };

  describe('createStaticTheme', () => {
    it('should replace the theme values with CSS variables', () => {
      const actual = createStaticTheme(theme);
      const expected = {
        color: {
          neutral: {
            100: 'var(--color-neutral-100)',
            300: 'var(--color-neutral-300)',
            500: 'var(--color-neutral-500)',
            700: 'var(--color-neutral-700)',
            900: 'var(--color-neutral-900)',
          },
        },
        spacing: {
          s: 'var(--spacing-s)',
          m: 'var(--spacing-m)',
          l: 'var(--spacing-l)',
          xl: 'var(--spacing-xl)',
        },
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('createVariables', () => {
    it('should return values for the CSS variables', () => {
      const actual = createVariables(theme);
      const expected =
        // eslint-disable-next-line max-len
        ':root { --color-neutral-100: #FAFBFC; --color-neutral-300: #D8DDE1; --color-neutral-500: #9DA7B1; --color-neutral-700: #5C656F; --color-neutral-900: #212933; --spacing-s: 4px; --spacing-m: 8px; --spacing-l: 12px; --spacing-xl: 16px; }';
      expect(actual).toBe(expected);
    });
  });

  describe('traverse', () => {
    it('should traverse an object', () => {
      const obj = { foo: 'bar' };
      const fn = jest.fn();

      traverse(obj, fn);

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith('foo', 'bar', ['foo']);
    });

    it('should traverse a nested object', () => {
      const obj = { foo: { bar: 'baz' } };
      const fn = jest.fn();

      traverse(obj, fn);

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith('bar', 'baz', ['foo', 'bar']);
    });

    it('should skip nil values', () => {
      const obj = { foo: null, bar: undefined, baz: false };
      const fn = jest.fn();

      traverse(obj, fn);

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith('baz', false, ['baz']);
    });
  });
});
