export class InstanceMethods<T> extends Array<T> {
  constructor(private array: T[]) {
    super();
  }

  getArray(): T[] {
    return this.array;
  }

  /**
   * The at() method of Array instances takes an integer value and returns the item at that index,
   * allowing for positive and negative integers.
   * Negative integers count back from the last item in the array.
   */
  override at(index: number): T | undefined {
    const { array } = this;

    if (index >= 0) {
      return array[index];
    } else {
      return array[array.length + index];
    }
  }

  /**
   * The concat() method of Array instances is used to merge two or more arrays.
   * This method does not change the existing arrays, but instead returns a new array.
   */
  override concat(...items: any[]): any[]
  override concat(items: (T | any[])): any[] {
    const { array } = this;

    if (!items) {
      return array;
    }

    if (Array.isArray(items)) {
      return [...array, ...items];
    } else {
      return [...array, items];
    }
  }
}
