// 2-1
var triangle = function () {
    for (var line = "#"; line.length < 8; line += "#") {
        console.log(line);
    }
};
//triangle();

//2-2
var fizzBuzz = function () {

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
var makeChessBoard = function (size) {
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