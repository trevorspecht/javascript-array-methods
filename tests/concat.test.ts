import { InstanceMethods } from '../instance_methods/instance_methods';

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

  it('directly append argument object when argument is array-like but not an array', () => {
    const arrayLike = {
      length: 2,
      0: 1,
      1: 2
    };

    const result = arr.concat(arrayLike);
    expect(result).toMatchObject([
      'a',
      'b',
      'c',
      'd',
      { 0: 1, 1: 2, length: 2 }
    ]);
  });

  it('spread elements when argument is array-like and has Symbol.isConcatSpreadable = true', () => {
    const arrayLike = {
      0: 0,
      1: 1,
      length: 2,
      [Symbol.isConcatSpreadable]: true
    };

    const result = arr.concat(arrayLike);
    expect(result).toMatchObject(['a', 'b', 'c', 'd', 0, 1]);
  });

  it('concatenates two string arrays', () => {
    const arr2 = ['x', 'y', 'z'];

    const result = arr.concat(arr2);
    expect(result).toMatchObject(['a', 'b', 'c', 'd', 'x', 'y', 'z']);
  });

  it('concatenates three arrays of different types', () => {
    const arr2 = ['x', 'y', 'z'];
    const arr3 = [1, 2, 3];

    const result = arr.concat(arr2, arr3);
    expect(result).toMatchObject(['a', 'b', 'c', 'd', 'x', 'y', 'z', 1, 2, 3]);
  });

  it('concatenates single item', () => {
    const item = 7;

    const result = arr.concat(item);
    expect(result).toMatchObject(['a', 'b', 'c', 'd', 7]);
  });

  it('nested arrays', () => {
    //@ts-ignore
    const arr1: InstanceMethods<any> = [[1]];
    const arr2 = [2, [3]];

    const result = arr1.concat(arr2);
    expect(result).toMatchObject([[1], 2, [3]]);
  });
});
