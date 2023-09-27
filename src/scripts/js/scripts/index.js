var WIDTH = 25;
var HEIGHT = 25;
var ELEMENTS = new Array();
var SQUARES = new Array();
var BOARD = document.getElementById("board");
var HIDDEN = "⯀";
function setupBoard() {
    SQUARES = [];
    while (BOARD.firstElementChild) {
        BOARD.removeChild(BOARD.firstElementChild);
    }
    for (var row = 0; row < WIDTH; row++) {
        var r = [];
        for (var col = 0; col < HEIGHT; col++) {
            r.push(HIDDEN);
        }
        SQUARES.push(r);
        ELEMENTS.push(r);
    }
    for (var row = 0; row < WIDTH; row++) {
        for (var col = 0; col < HEIGHT; col++) {
            SQUARES[row][col] = ".";
        }
    }
    for (var i = 0; i < HEIGHT; i++) {
        var row = document.createElement("div");
        for (var j = 0; j < WIDTH; j++) {
            var sq = document.createElement("p");
            sq.innerHTML = HIDDEN;
            sq.setAttribute("row", i.toString());
            sq.setAttribute("col", j.toString());
            sq.style.height = (BOARD.offsetHeight / HEIGHT) + "px";
            sq.style.width = (BOARD.offsetWidth / WIDTH) + "px";
            ELEMENTS[i][j] = sq;
            row.appendChild(sq);
        }
        BOARD.appendChild(row);
    }
    for (var i = 0; i < 40; i++) {
        var rx = Math.round(Math.random() * ELEMENTS.length);
        var ry = Math.round(Math.random() * ELEMENTS[0].length);
        var randomSquare = SQUARES[rx][ry];
        for (var x = rx - 1; x <= rx + 1; x++) {
            for (var y = ry - 1; y <= ry + 1; y++) {
                if (x >= 0 && x <= SQUARES.length - 1
                    && y >= 0 && y <= SQUARES[0].length - 1) {
                    var str = SQUARES[x][y];
                    SQUARES[x][y] = str == HIDDEN ? "1" : str;
                }
            }
        }
        SQUARES[rx][ry] = "M";
    }
    console.log(SQUARES);
}
setupBoard();
