import { InstanceMethods } from '../instance_methods/at';

describe('instance method tests', () => {
  let arr = [1, 2, 3, 4, 5];

  it('getArray() returns the given array', () => {
    const methods = new InstanceMethods(arr);
    const array = methods.getArray();
    expect(array).toBe(arr);
  });

  describe('at() tests', () => {
    const methods = new InstanceMethods(arr);

    it('index >= 0', () => {
      const index = 3;
      const result = methods.at(index);
      expect(result).toBe(4);
    });

    it('index < 0', () => {
      const index = -3;
      const result = methods.at(index);
      expect(result).toBe(3);
    });
  });
});
