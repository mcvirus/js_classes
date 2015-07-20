// 2-1
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