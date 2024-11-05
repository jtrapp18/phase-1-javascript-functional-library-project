function myEach(collection, callback) {
    const myArray = Object.values(collection);

    for (const val of myArray) {
        callback(val);
    }

    return collection;
}

function myMap(collection, callback) {
    const myArray = Object.values(collection);
    const myNewArray = [];

    for (const val of myArray) {
        const updatedItem = callback(val);
        myNewArray.push(updatedItem);
    }

    return myNewArray;
}

function myReduce(collection, callback, acc=undefined) {
    let myArray

    if (acc===undefined) {
        const myArrayAll = Object.values(collection);
        myArray = myArrayAll.slice(1);
        acc = myArrayAll[0];        
    }
    else {
        myArray = Object.values(collection);
    }
    
    for (const val of myArray) {
        acc = callback(acc, val, collection);
    }

    return acc;
}

function myFind(collection, predicate) {
    const myArray = Object.values(collection);
    
    for (const val of myArray) {
        if (predicate(val)) {
            return val;
        }
    }
}

function myFilter(collection, predicate) {
    const myArray = Object.values(collection);
    const myNewArray = [];
    
    for (const val of myArray) {
        if (predicate(val)) {
            myNewArray.push(val) ;
        }
    }
    return myNewArray;
}

function mySize(collection) {
    const myArray = Object.values(collection);

    return myArray.length;
}

function myFirst(collection, n=undefined) {
    const myArray = Object.values(collection);

    return n===undefined ? myArray[0] : myArray.slice(0, n);
}

function myLast(collection, n=undefined) {
    const myArray = Object.values(collection);

    return n===undefined ? myArray[myArray.length-1] : myArray.slice(myArray.length - n);
}

function myKeys(collection) {
    const keyArr = [];
    
    for (const key in collection) {
        keyArr.push(key);
    }

    return keyArr;
}

function myValues(collection) {
    const valueArr = [];

    for (const val in collection) {
        valueArr.push(collection[val]);
    }

    return valueArr;
}

function findCBGenerator(target) {
    return (function(currEl) { return target === currEl });
  }

console.log(myEach([1, 2, 3], console.log));
console.log(myMap([1, 2, 3], function(num){ return num * 3; }));
console.log(myReduce([1, 2, 3, 4], (acc, val, collection) => (acc + (val * 3))));
console.log(myFind(["maru", "choux", "doge", "coco", "waychillgoldeneye", "trance"], findCBGenerator("waychillgoldeneye")))

console.log(Object.values({one: 1, two: 2, three: 3, four: 4}))
console.log(myValues({one: 1, two: 2, three: 3, four: 4}))