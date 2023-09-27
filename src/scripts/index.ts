const WIDTH = 25;
const HEIGHT = 25;

let ELEMENTS: Array<Array<HTMLElement>> = new Array<Array<HTMLElement>>();
let SQUARES: Array<Array<string>> = new Array<Array<string>>();
const BOARD: HTMLElement = document.getElementById("board");

let HIDDEN: string = "⯀";

function setupBoard() {
    SQUARES = [];

    while (BOARD.firstElementChild) {
        BOARD.removeChild(BOARD.firstElementChild);
    }

    for (let row = 0; row < WIDTH; row++) {
        let r = [];
        for (let col = 0; col < HEIGHT; col++) {
            r.push(HIDDEN);
        }
        SQUARES.push(r);
        ELEMENTS.push(r);
    }

    for (let row = 0; row < WIDTH; row++) {
        for (let col = 0; col < HEIGHT; col++) {
            SQUARES[row][col] = ".";
        }
    }
    
    for (let i = 0; i < HEIGHT; i++) {
        let row = document.createElement("div");

        for (let j = 0; j < WIDTH; j++) {
            let sq: HTMLElement = document.createElement("p");
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

    for (let i = 0; i < 40; i++) {
        let rx = Math.round(Math.random() * ELEMENTS.length);
        let ry = Math.round(Math.random() * ELEMENTS[0].length);

        let randomSquare = SQUARES[rx][ry]

        for (let x = rx - 1; x <= rx + 1; x++) {
            for (let y = ry - 1; y <= ry + 1; y++) {
                if (x >= 0 && x <= SQUARES.length - 1 
                    && y >= 0 && y <= SQUARES[0].length - 1) {

                    let str = SQUARES[x][y];
                    SQUARES[x][y] = str == HIDDEN ? "1" : str;
                }
            }
        }
        SQUARES[rx][ry] = "M";
    }
    console.log(SQUARES);
}

setupBoard();