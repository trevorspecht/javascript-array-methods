import { InstanceMethods } from '../instance_methods/instance_methods';

describe('instance method tests', () => {
  let arr = [1, 2, 3, 4, 5];

  it('getArray() returns the given array', () => {
    const methods = new InstanceMethods(arr);
    const array = methods.getArray();
    expect(array).toBe(arr);
  });
});
