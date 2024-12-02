import { InstanceMethods } from "../instance_methods/instance_methods";

describe('concat() method tests', () => {
  // @ts-ignore
  const arr: InstanceMethods<any> = ['a', 'b', 'c', 'd'];

  it('does not alter original or argument arrays', () => {
    const arr2 = [1, 2, 3];
    arr.concat(arr2);

    expect(arr).toMatchObject(['a', 'b', 'c', 'd']);
    expect(arr2).toMatchObject([1, 2, 3]);
  });

  it('returns original array when no argument is provided', () => {
    let result = arr.concat();
    expect(result).toMatchObject(arr);
  });

  it('return original array when argument is array-like but not an array', () => {
    const arrayLike = {
      [Symbol.isConcatSpreadable]: false,
      length: 2,
      0: 1,
      1: 2,
    };

    const result = arr.concat(arrayLike);
    expect(result).toMatchObject([...arr, arrayLike]);
  });

  it('return original array when argument is array-like but has Symbol.isConcatSpreadable = true', () => {
    const arrayLike = {
      0: 0,
      1: 1,
      length: 2,
      [Symbol.isConcatSpreadable]: true
    };

    const result = arr.concat(arrayLike);
    expect(result).toMatchObject([...arr, 0, 1]);
  });

  it('merges two string arrays', () => {
    const arr2 = ['x', 'y', 'z'];

    const result = arr.concat(arr2);
    expect(result).toMatchObject(['a', 'b', 'c', 'd', 'x', 'y', 'z']);
  });
});
