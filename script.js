const playerFactory = (name, marker) => {
    console.log(`${name}`);
    document.querySelector(`#${marker}_name`).innerHTML = name;

    let score = 0;
    const win = () => {
        score++;
        document.querySelector(`#${marker}_score`).innerHTML = `${score} points`;

    }
    return {name, marker, win};
};


const gameBoard = (()=>{
    let board = [['','',''],['','',''],['','','']];
    let plays = 0;
    let turn = 'X';
    let player1;
    let playe2;

    const clear = () => {
        board = [['','',''],['','',''],['','','']];
        plays = 0;
        turn = 'X';
        document.querySelectorAll('.tile').forEach((tile) => {
            tile.src = `images/blank.jpg`;
        });
        document.querySelector('#replay_button').style.display = "none";
        document.querySelector('#display').innerHTML = `${player1.name}'s turn`;
    };

    const init = () => {
        document.querySelector('#play_button').addEventListener('click', () => {
            document.querySelector('#body').style.display = "block";
            document.querySelector('#name_div').style.display = "none";
            name1 = document.querySelector('#name1').value;
            name2 = document.querySelector('#name2').value;

            player1 = playerFactory(name1, "X");
            player2 = playerFactory(name2, "O");

        });
        document.querySelectorAll('.tile').forEach((tile) => {
            tile.addEventListener('click', () => {
                let xy = tile.id.split('');
                if (board[xy[0]][xy[1]] === ''){
                    tile.src = `images/${turn}.jpg`;
                    board[xy[0]][xy[1]] = turn;
                    plays++;
                    flipTurn();
                    if (check()){
                        document.querySelector('#replay_button').style.display = "block";
                    }
                }
            })
        });
        document.querySelector('#replay_button').addEventListener('click', () => {
            clear();
        });
    };
    const flipTurn = () => {
        if (turn === 'X'){
            document.querySelector('#display').innerHTML = `${player2.name}'s turn`;
            turn = 'O';
        }else{
            document.querySelector('#display').innerHTML = `${player1.name}'s turn`;
            turn = 'X';
        }
    };
    const check = () => {
        if (checkX()){
            document.querySelector('#display').innerHTML = `${player1.name} wins`;
            player1.win();
        } else if (checkO()){
            document.querySelector('#display').innerHTML =  `${player2.name} wins`;
            player2.win();
        } else if (plays === 9){
            document.querySelector('#display').innerHTML = "Tie";
        }else{
            return false;
        }
        return true;
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
    return {name1, name2, board, plays, turn, clear, init, check, checkX, checkO};
})();



gameBoard.init();




