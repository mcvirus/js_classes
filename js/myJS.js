window.onload = function () {
    showTime();
    setInterval('showTime()', 1000);
}
function showTime() {
    var timePlace = document.getElementsByTagName('h1');
    var time = new Date();
    timePlace[0].innerHTML = time.toLocaleTimeString();
}
//==========================
function quiz1() {
    var str = '#';
    for (var i = 0; i < 7; i++) {
        console.log(str);
        str += " #";
    }
}
quiz1();
//==========================

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }

    }
}
fizzBuzz();
//============================

function quiz3() {
    var size = 8;
    var board = "";
    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
            if ((x + y) % 2 == 0)
                board += " ";
            else
                board += "#";
        }
        board += "\n";
    }
    console.log(board);
}
quiz3();
//quiz4
function min(value1, value2) {
    var min = (value1 < value2) ? value1 : value2;
    return min;
}
console.log(min(0, -10));
//==========================
function isEven(number) {
    if (number === 0) {
        return "true";
    } else if (number === 1) {
        return "false";
    }
    else if (number > 0) {
        return isEven(number - 2);
    } else {
        return isEven(-number);
    }
}
console.log(isEven(-55));

//===================
function countBs(str, symbol) {
    var counter = 0;
    for (var i in str) {
        if (symbol === str[i]) {
            counter++;
        }
    }
    return counter;
}

function countChar(str) {
    return countBs(str, 'В');

}

//console.log(test('ВоВа ВаВа'));
console.log(countBs('ВоВа аВа', 'В'));


/* function multiplier(factor) {
 return function(number) {

 return number * factor;
 };
 }
 var twice = multiplier(2);
 console.log(twice(5));

 function findSolution(target) {
 function find(start, history) {
 if (start == target)
 return history;
 else if (start > target)
 return null;
 else
 return find(start + 5, "(" + history + " + 5)") ||
 find(start * 3, "(" + history + " * 3)");
 }
 return find(1, "1");
 }
 console.log(findSolution(13)); */

function zeroPad(number, width) {
    var formattedNumber = String(number)
    while (formattedNumber.length < width) {
        formattedNumber = '0' + formattedNumber;
    }
    return formattedNumber;
}
function showReport(cows, hens, pigs) {
    console.log(zeroPad(cows, 3) + ' cows');
    console.log(zeroPad(hens, 3) + ' hens');
    console.log(zeroPad(pigs, 3) + ' pigs');
    return cows, hens, pigs;
}
var report = showReport(10, 5, 89);

//Структура данных: объекты и массивы
// quiz1
function range(startArr, endArr, step) {
    var array = [];
    var step = Math.abs(step) || 1;
    if (startArr < endArr) {
        for (i = startArr; i <= endArr; i += step) {
            array.push(i);
        }
    } else if (startArr > endArr){
        for (i = startArr; i >= endArr; i -= step) {
            array.push(i);
        }
    }
    return array;
}
function sum(array) {
    var sum = 0;
    for (var i in array) {
        sum += array[i];
    }
    return sum;
}
var arr = range(5, 2,-1);
console.log(arr);
console.log(sum(arr));

//quiz2
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
function reverseArray(array){
    var reverseArray = [];
    for(var i in array){
        reverseArray.unshift(array[i]);
    }
    return reverseArray;
}
console.log('original', arr);
console.log('reversed', reverseArray(arr));

function reverseArrayInPlace(array){
    var maxPosition = array.length -1;
    for(var i = 0; i < (maxPosition / 2); i++){
        var temp = array[i];
        array[i] = array[maxPosition - i];
        array[maxPosition - i] = temp;
    }
    return array;
}
console.log('reversed', reverseArrayInPlace(arr));