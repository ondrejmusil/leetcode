// Link to the task:
// https://leetcode.com/problems/design-hashset/

class MyHashSet {
    set: Set<number>;

    constructor() {
        this.set = new Set<number>();
    }

    add(key: number): void {
        this.set.add(key);
    }

    remove(key: number): void {
        this.set.delete(key);
    }

    contains(key: number): boolean {
        return this.set.has(key);
    }
}

const testSet = new MyHashSet();
testSet.add(1);      // set = [1]
testSet.add(2);      // set = [1, 2]
testSet.contains(1); // return True
console.log(testSet.contains(3)); // return False, (not found)
testSet.add(2);      // set = [1, 2]
console.log(testSet.contains(2)); // return True
testSet.remove(2);   // set = [1]
console.log(testSet.contains(2)); // return False, (already removed)
console.log(testSet.set);
