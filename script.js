const gameBoard = (()=>{
    let board = [['','',''],['','',''],['','','']];
    let plays = 0;
    let turn = 'X';

    const clear = () => {
        board = [['','',''],['','',''],['','','']];
        plays = 0;
        turn = 'X';
    };
    const init = () => {
        document.querySelectorAll('.tile').forEach((tile) => {
            tile.addEventListener('click', () => {
                let marker = tile.dataset.marker;
                if (marker === 'blank'){
                    let xy = tile.id.split('');
                    tile.src = `images/${turn}.jpg`;
                    tile.dataset.marker = turn;
                    play(xy[0], xy[1], turn);
                    flipTurn();
                    if (check()){
                        document.querySelector('#turn').innerHTML = check();
                    }
                }
            })
        });
    };
    const play = (x, y, marker) => {
        board[x][y] = marker; 
        plays++;
    };
    const flipTurn = () => {
        if (turn === 'X'){
            document.querySelector('#turn').innerHTML = "O's turn";
            turn = 'O';
        }else{
            document.querySelector('#turn').innerHTML = "X's turn";
            turn = 'X';
        }

    };
    const check = () => {
        console.log(board);
        if (checkX()){
                return "X wins";
        } else if (checkO()){
                return "O wins";
        } else if (plays === 9){
            return "Tie";
        }
    };
    const checkX = () => {
        return ((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') ||
        (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') ||
        (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') ||
        (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') || 
        (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') || 
        (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') || 
        (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || 
        (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X'));

    };
    const checkO = () => {
        return ((board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') ||
        (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') ||
        (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') ||
        (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') || 
        (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') || 
        (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') || 
        (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') || 
        (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O'));

    };
    return {board, plays, turn, clear, init, play, check, checkX, checkO};
})();

const playerFactory = (name, marker) => {
    return {name, marker};
}

gameBoard.init();



