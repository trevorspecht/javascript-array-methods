import { InstanceMethods } from '../instance_methods/instance_methods';

describe('instance method tests', () => {
  let arr = [1, 2, 3, 4, 5];

  it('getArray() returns the given array', () => {
    const methods = new InstanceMethods(arr);
    const array = methods.getArray();
    expect(array).toBe(arr);
  });

  describe('at() tests', () => {
    const methods = new InstanceMethods(arr);

    it('returns same as bracket notation when index >= 0', () => {
      const index = 3;
      const result = methods.at(index);
      const bracketResult = arr[index];

      expect(result).toBe(4);
      expect(result).toBe(bracketResult);
    });

    it('counts back from end of array if index < 0', () => {
      const index = -3;
      const result = methods.at(index);

      expect(result).toBe(3);
    });

    it('returns undefined if index >= array.length', () => {
      let index = 5;
      let result = methods.at(index);

      expect(result).toBeUndefined();

      index = 7;
      result = methods.at(index);

      expect(result).toBeUndefined();
    });

    it('returns undefined if index < -array.length', () => {
      const index = -7;
      const result = methods.at(index);

      expect(result).toBeUndefined();
    });
  });
});
