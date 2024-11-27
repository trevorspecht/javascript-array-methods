import { InstanceMethods } from "../instance_methods/instance_methods";

describe('concat() method tests', () => {
  const arr = ['a', 'b', 'c', 'd'];
  const methods = new InstanceMethods(arr);

  it('does not alter original or argument arrays', () => {
    const arr2 = [1, 2, 3];
    const result = methods.concat(arr2);

    expect(arr).toMatchObject(['a', 'b', 'c', 'd']);
    expect(arr2).toMatchObject([1, 2, 3]);
    expect(result).toMatchObject([...arr, ...arr2]);
  });

  it('returns original array when argument is undefined or null', () => {
    const result = methods.concat();
    expect(result).toBe(arr);
  });

  // it('return original array when argument is not an array', () => {
  //   const result = methods.concat({
  //     0: "a",
  //     1: "b",
  //     length: 2,
  //   });
  //   expect(result).toMatchObject(arr);
  // })

  it('merges two string arrays', () => {
    const arr2 = ['x', 'y', 'z'];

    const result = methods.concat(arr2);
    expect(result).toMatchObject(['a', 'b', 'c', 'd', 'x', 'y', 'z']);
  });
});
