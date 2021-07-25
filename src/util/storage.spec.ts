import { storageFactory, parse, serialize } from './storage';

describe('StorageService', () => {
  describe('storageFactory', () => {
    const KEY = 'key';
    const VALUE = 'value';
    const INDEX = 0;

    describe('in browser storage', () => {
      const storageMock = {
        setItem: jest.fn(),
        getItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
        key: jest.fn(),
        length: 0,
      };

      const store = storageFactory(storageMock);

      it('should support browser storage', () => {
        const actual = store.isSupported;
        expect(actual).toBeTruthy();
      });

      it('should save data to the store', () => {
        store.setItem(KEY, VALUE);
        expect(storageMock.setItem).toHaveBeenCalled();
        expect(storageMock.setItem).toHaveBeenCalledWith(KEY, VALUE);
      });

      it('should retrieve data from the store', () => {
        store.getItem(KEY);
        expect(storageMock.getItem).toHaveBeenCalled();
        expect(storageMock.getItem).toHaveBeenCalledWith(KEY);
      });

      it('should remove data from the store', () => {
        store.removeItem(KEY);
        expect(storageMock.removeItem).toHaveBeenCalled();
        expect(storageMock.removeItem).toHaveBeenCalledWith(KEY);
      });

      it('should clear data from the store', () => {
        store.clear();
        expect(storageMock.clear).toHaveBeenCalled();
      });

      it('should get the key at the index in the store', () => {
        store.key(INDEX);
        expect(storageMock.key).toHaveBeenCalled();
        expect(storageMock.key).toHaveBeenCalledWith(INDEX);
      });
    });

    describe('in memory', () => {
      const storageMock = {
        setItem: (): string | null => {
          throw new Error();
        },
        removeItem: (): string | null => {
          throw new Error();
        },
        getItem: jest.fn(),
        clear: jest.fn(),
        key: jest.fn(),
        length: 0,
      };

      const store = storageFactory(storageMock);

      it('should not support browser storage', () => {
        const actual = store.isSupported;
        expect(actual).toBeFalsy();
      });

      it('should save and retrieve data from the store', () => {
        store.setItem(KEY, VALUE);
        const actual = store.getItem(KEY);
        expect(actual).toBe(VALUE);
      });

      it('should remove data from the store', () => {
        store.setItem(KEY, VALUE);
        store.removeItem(KEY);
        const actual = store.getItem(KEY);
        expect(actual).toBeNull();
      });

      it('should clear data from the store', () => {
        store.setItem(KEY, VALUE);
        store.clear();
        const actual = store.getItem(KEY);
        expect(actual).toBeNull();
      });

      it('should get the key at the index in the store', () => {
        store.setItem(KEY, VALUE);
        const actual = store.key(INDEX);
        expect(actual).toBe(KEY);
      });

      it('should return the number of items', () => {
        store.setItem(KEY, VALUE);
        const actual = store.length;
        const expected = 1;
        expect(actual).toBe(expected);
      });
    });
  });

  describe('parse', () => {
    it('should parse a string to JSON', () => {
      const string =
        // eslint-disable-next-line max-len
        '{"string":"foo","boolean":true,"number":42,"object":{"hello":"world"},"array":["foo","bar"]}';
      const actual = parse(string);
      const expected = {
        string: 'foo',
        boolean: true,
        number: 42,
        object: { hello: 'world' },
        array: ['foo', 'bar'],
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('serialize', () => {
    it('should stringify JSON', () => {
      const json = {
        string: 'foo',
        boolean: true,
        number: 42,
        object: { hello: 'world' },
        array: ['foo', 'bar'],
      };
      const actual = serialize(json);
      const expected =
        // eslint-disable-next-line max-len
        '{"string":"foo","boolean":true,"number":42,"object":{"hello":"world"},"array":["foo","bar"]}';
      expect(actual).toBe(expected);
    });
  });
});
