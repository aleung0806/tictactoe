const gameboard = (()=>{
    let board = [['','',''],['','',''],['','','']];
    let plays = 0;
    let turn = 'X';
    const clear = () => board = [['','',''],['','',''],['','','']];
    const init = () => {
        document.querySelectorAll('.tile').forEach((tile) => {
            tile.addEventListener('click', () => {
                console.log(tile.id);
                let xy = tile.id.split('');
                let marker = tile.dataset.marker;
                if (marker === 'blank'){
                    tile.src = `images/${turn}.jpg`;
                    tile.dataset.marker = turn;
                    play(xy[0], xy[1], turn);
                    if (turn === 'X'){
                        document.querySelector('#turn').innerHTML = "O's turn";
                        turn = 'O';
                    }else{
                        document.querySelector('#turn').innerHTML = "X's turn";
                        turn = 'X';
                    }
                    if (check()){
                        document.querySelector('#turn').innerHTML = check();
                    }
                }
            })
        });
    }
    const play = (x, y, marker) => {
        board[x][y] = marker; 
        plays++;
    }
    const display = () => board;
    const check = () => {
        console.log("checking....");
        console.log(board);
        if (board[0] === ['X', 'X', 'X'] ||
            board[1] === ['X', 'X', 'X'] ||
            board[2] === ['X', 'X', 'X'] ||
            (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') || 
            (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') || 
            (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') || 
            (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || 
            (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')){
                return "X wins";
        } else if (board[0] === ['O', 'O', 'O'] ||
            board[1] === ['O', 'O', 'O'] ||
            board[2] === ['O', 'O', 'O'] ||
            (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') || 
            (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') || 
            (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') || 
            (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') || 
            (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O')){
                return "O wins";
        } else if (plays === 9){
            return "Tie";
        }
    };
    return {board, init, play, display, check};
})();

const playerFactory = (name, marker) => {
    return {name, marker};
}

console.log('hello');
gameboard.init();



