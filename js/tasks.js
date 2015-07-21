﻿// 2-1
function triangle() {
    for (var line = "#"; line.length < 8; line += "#") {
        console.log(line);
    }
};
//triangle();

//2-2
function fizzBuzz() {

    for (var i = 1; i <= 100; i++) {
        var line = "";
        if (i % 3 === 0) {
            line = "Fizz";
        }
        if (i % 5 === 0) {
            line += "Buzz";
        }
        console.log(line || i);
    }
}
//fizzBuzz();

//2-3
function makeChessBoard(size) {
    var board = "";
    for (var i = 1; i <= size; i++) {
        for (var j = 1; j <= size; j++) {
            if ((i + j) % 2 === 0) {
                board += "#";
            } else {
                board += " ";
            }
        }
        board += "\n";
    }
    console.log(board);
}
//makeChessBoard(8);

//3-1
function min(numberA, numberB) {
    return (numberA > numberB) ? numberB : numberA;
}
//console.log(min(1, -9));

//3-2
function isEven(number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number);
    } else {
        return isEven(number - 2);
    }
    //return (number % 2 === 0) ? true : false;
}
//console.log(isEven(-4));

//4-1

function range(start, end, step) {
    var rangeArr = [];
    if (!!!step) {
        step = 1;
    }
    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            rangeArr.push(i);
        }
    } else {
        for (var j = start; j >= end; j += step) {
            rangeArr.push(j);
        }
    }
    return rangeArr;
}
function sum(numberArr) {
    var result = 0;
    for (var i = 0; i < numberArr.length; i++) {
        result += numberArr[i];
    }
    return result;
}
//console.log(range(5, 2, -1));
//console.log(sum(range(1, 10, 2)));

//4-2
function reverseArray(inputArray) {
    var reversedArray = [];
    for (var i = inputArray.length - 1; i >= 0 ; i--) {
        reversedArray.push(inputArray[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(inputArray) {
    for (var i = 0; i < Math.floor(inputArray.length / 2) ; i++) {
        var old = inputArray[i];
        inputArray[i] = inputArray[inputArray.length - 1 - i];
        inputArray[inputArray.length - 1 - i] = old;
    }
    return inputArray;
}

//console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 11]));
//console.log(reverseArray(["A", "B", "C"]));

//4-3

function arrayToList(inputArray) {
    var list = null;
    for (var i = inputArray.length - 1; i >= 0; i--) {
        list = {
            value: inputArray[i],
            rest: list
        };
    }
    return list;
}
//console.log(arrayToList([10, 20, 30]));
function listToArray(list) {
    var arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

//console.log(listToArray(arrayToList([10, 20, 30])));
function prepend(value, list) {
    return { value: value, rest: list }
}
//console.log(prepend(10, prepend(20, null)));

function nth(list, position) {
    if (!list)
        return undefined;
    else if (position === 0)
        return list.value;
    else
        return nth(list.rest, position - 1);
}
//console.log(nth(arrayToList([10, 20, 30]), 1));

//4-4

function deepEqual(valueA, valueB) {
    if (valueA === valueB) {
        return true;
    };
    if (valueA == null && typeof(valueA) != "object" ||
        valueB == null && typeof(valueB) != "object") {
        return false;
    };
    var propsInvalueA = 0,
        propsInvalueB = 0;
    for (var prop in valueA) {
        propsInvalueA++;
    }
    for (var prop in valueB) {
        propsInvalueB++;
        if (!(prop in valueA) || !deepEqual(valueA[prop], valueB[prop])) {
            return false;
        }
    }
    return propsInvalueA === propsInvalueB;
}
var obj = { here: { is: "an" }, object: 2 };
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
//console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

//5-1
function flatten(inputArr) {
    return inputArr.reduce(function (flat, current) {
        return flat.concat(current);
    });
}
//console.log(flatten([[1, 2, 3], [4, 5], [6]]));

//5-4
function every(inputArr, predicate) {
    for (var i = 0; i < inputArr.length; i++) {
        if (!predicate(inputArr[i])) {
            return false;
        }
    }
    return true;
}
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false

function some(inputArr, predicate) {
    for (var i = 0; i < inputArr.length; i++) {
        if (predicate(inputArr[i])) {
            return true;
        }
    }
    return false;
}
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false