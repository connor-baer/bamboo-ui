import { spacing } from './shared';

describe('Styles', () => {
  describe('spacing', () => {
    const theme = {
      spacing: {
        s: '0.5rem',
        m: '1rem',
        l: '2rem',
        xl: '4rem',
        gutter: '1rem',
      },
    };

    describe('when passed a number', () => {
      it('should apply equal spacing to all sides', () => {
        const actual = spacing(1)(theme);
        const expected = {
          marginTop: 'calc(1rem * 1)',
          marginRight: 'calc(1rem * 1)',
          marginBottom: 'calc(1rem * 1)',
          marginLeft: 'calc(1rem * 1)',
        };

        expect(actual).toEqual(expected);
      });
    });

    describe('when passed a string', () => {
      it('should apply equal spacing to all sides', () => {
        const actual = spacing('s')(theme);
        const expected = {
          marginTop: '0.5rem',
          marginRight: '0.5rem',
          marginBottom: '0.5rem',
          marginLeft: '0.5rem',
        };

        expect(actual).toEqual(expected);
      });
    });

    describe('when passed an array', () => {
      it('should apply equal spacing to all sides', () => {
        const actual = spacing(['s'])(theme);
        const expected = {
          marginTop: '0.5rem',
          marginRight: '0.5rem',
          marginBottom: '0.5rem',
          marginLeft: '0.5rem',
        };

        expect(actual).toEqual(expected);
      });

      it('should apply spacing vertically and horizontally', () => {
        const actual = spacing(['m', 'l'])(theme);
        const expected = {
          marginTop: '1rem',
          marginRight: '2rem',
          marginBottom: '1rem',
          marginLeft: '2rem',
        };

        expect(actual).toEqual(expected);
      });

      it('should apply spacing to top, bottom, and horizontally', () => {
        const actual = spacing(['s', 'm', 'l'])(theme);
        const expected = {
          marginTop: '0.5rem',
          marginRight: '1rem',
          marginBottom: '2rem',
          marginLeft: '1rem',
        };

        expect(actual).toEqual(expected);
      });

      it('should apply spacing to each side individually', () => {
        const actual = spacing(['s', 'm', 'l', 'xl'])(theme);
        const expected = {
          marginTop: '0.5rem',
          marginRight: '1rem',
          marginBottom: '2rem',
          marginLeft: '4rem',
        };

        expect(actual).toEqual(expected);
      });
    });

    describe('when passed an object', () => {
      it('should apply spacing to the specified side', () => {
        const actual = spacing({ top: 's' })(theme);
        const expected = {
          marginTop: '0.5rem',
        };

        expect(actual).toEqual(expected);
      });
    });

    describe('when passed a different property', () => {
      it('should apply the spacing as padding', () => {
        const actual = spacing(1, 'padding')(theme);
        const expected = {
          paddingTop: 'calc(1rem * 1)',
          paddingRight: 'calc(1rem * 1)',
          paddingBottom: 'calc(1rem * 1)',
          paddingLeft: 'calc(1rem * 1)',
        };

        expect(actual).toEqual(expected);
      });
    });

    describe('when passed the theme', () => {
      it('should use the theme prop', () => {
        const actual = spacing(1)(theme);
        const expected = {
          marginTop: 'calc(1rem * 1)',
          marginRight: 'calc(1rem * 1)',
          marginBottom: 'calc(1rem * 1)',
          marginLeft: 'calc(1rem * 1)',
        };

        expect(actual).toEqual(expected);
      });

      it('should desctructure the theme from props', () => {
        const actual = spacing(1)({ theme });
        const expected = {
          marginTop: 'calc(1rem * 1)',
          marginRight: 'calc(1rem * 1)',
          marginBottom: 'calc(1rem * 1)',
          marginLeft: 'calc(1rem * 1)',
        };

        expect(actual).toEqual(expected);
      });
    });
  });
});
