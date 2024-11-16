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
}
