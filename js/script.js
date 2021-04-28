const Player = (id, color, type) => {
    const _id = id;
    const _color = color;
    const _isHuman = type === 'human';

    const getId = () => {
        return _id;
    }

    const getColor = () => {
        return _color;
    }

    const isHuman = () => {
        return _isHuman;
    }

    return {
        getId,
        getColor,
        isHuman
    };
};

const gameboard = (() => {
    const _board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    const getBoard = () => {
        return _board;
    };

    const isColumnFull = column => {
        return Boolean(_board[column][_board[column].length - 1]);
    };

    const getAvailableMoves = () => {
        const moves = [];
        for (let column = 0; column < _board.length; column++) {
            if (!isColumnFull(column)) {
                moves.push(column);
            }
        }
        return moves;
    };

    const markSpace = (column, player) => {
        let row = _board[column].indexOf(0);
        _board[column][row] = player.getId();
    };

    const getWinner = () => {
        //hard coding initially
        const winningBoards = [
            [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3]
            ],
            [
                [0, 1],
                [0, 2],
                [0, 3],
                [0, 4]
            ],
            [
                [0, 2],
                [0, 3],
                [0, 4],
                [0, 5]
            ],
            [
                [1, 0],
                [1, 1],
                [1, 2],
                [1, 3]
            ],
            [
                [1, 1],
                [1, 2],
                [1, 3],
                [1, 4]
            ],
            [
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5]
            ],
            [
                [2, 0],
                [2, 1],
                [2, 2],
                [2, 3]
            ],
            [
                [2, 1],
                [2, 2],
                [2, 3],
                [2, 4]
            ],
            [
                [2, 2],
                [2, 3],
                [2, 4],
                [2, 5]
            ],
            [
                [3, 0],
                [3, 1],
                [3, 2],
                [3, 3]
            ],
            [
                [3, 1],
                [3, 2],
                [3, 3],
                [3, 4]
            ],
            [
                [3, 2],
                [3, 3],
                [3, 4],
                [3, 5]
            ],
            [
                [4, 0],
                [4, 1],
                [4, 2],
                [4, 3]
            ],
            [
                [4, 1],
                [4, 2],
                [4, 3],
                [4, 4]
            ],
            [
                [4, 2],
                [4, 3],
                [4, 4],
                [4, 5]
            ],
            [
                [5, 0],
                [5, 1],
                [5, 2],
                [5, 3]
            ],
            [
                [5, 1],
                [5, 2],
                [5, 3],
                [5, 4]
            ],
            [
                [5, 2],
                [5, 3],
                [5, 4],
                [5, 5]
            ],
            [
                [6, 0],
                [6, 1],
                [6, 2],
                [6, 3]
            ],
            [
                [6, 1],
                [6, 2],
                [6, 3],
                [6, 4]
            ],
            [
                [6, 2],
                [6, 3],
                [6, 4],
                [6, 5]
            ],
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0]
            ],
            [
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0]
            ],
            [
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0]
            ],
            [
                [3, 0],
                [4, 0],
                [5, 0],
                [6, 0]
            ],
            [
                [0, 1],
                [1, 1],
                [2, 1],
                [3, 1]
            ],
            [
                [1, 1],
                [2, 1],
                [3, 1],
                [4, 1]
            ],
            [
                [2, 1],
                [3, 1],
                [4, 1],
                [5, 1]
            ],
            [
                [3, 1],
                [4, 1],
                [5, 1],
                [6, 1]
            ],
            [
                [0, 2],
                [1, 2],
                [2, 2],
                [3, 2]
            ],
            [
                [1, 2],
                [2, 2],
                [3, 2],
                [4, 2]
            ],
            [
                [2, 2],
                [3, 2],
                [4, 2],
                [5, 2]
            ],
            [
                [3, 2],
                [4, 2],
                [5, 2],
                [6, 2]
            ],
            [
                [0, 3],
                [1, 3],
                [2, 3],
                [3, 3]
            ],
            [
                [1, 3],
                [2, 3],
                [3, 3],
                [4, 3]
            ],
            [
                [2, 3],
                [3, 3],
                [4, 3],
                [5, 3]
            ],
            [
                [3, 3],
                [4, 3],
                [5, 3],
                [6, 3]
            ],
            [
                [0, 4],
                [1, 4],
                [2, 4],
                [3, 4]
            ],
            [
                [1, 4],
                [2, 4],
                [3, 4],
                [4, 4]
            ],
            [
                [2, 4],
                [3, 4],
                [4, 4],
                [5, 4]
            ],
            [
                [3, 4],
                [4, 4],
                [5, 4],
                [6, 4]
            ],
            [
                [0, 5],
                [1, 5],
                [2, 5],
                [3, 5]
            ],
            [
                [1, 5],
                [2, 5],
                [3, 5],
                [4, 5]
            ],
            [
                [2, 5],
                [3, 5],
                [4, 5],
                [5, 5]
            ],
            [
                [3, 5],
                [4, 5],
                [5, 5],
                [6, 5]
            ],
            [
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3]
            ],
            [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4]
            ],
            [
                [0, 2],
                [1, 3],
                [2, 4],
                [3, 5]
            ],
            [
                [1, 0],
                [2, 1],
                [3, 2],
                [4, 3]
            ],
            [
                [1, 1],
                [2, 2],
                [3, 3],
                [4, 4]
            ],
            [
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5]
            ],
            [
                [2, 0],
                [3, 1],
                [4, 2],
                [5, 3]
            ],
            [
                [2, 1],
                [3, 2],
                [4, 3],
                [5, 4]
            ],
            [
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5]
            ],
            [
                [3, 0],
                [4, 1],
                [5, 2],
                [6, 3]
            ],
            [
                [3, 1],
                [4, 2],
                [5, 3],
                [6, 4]
            ],
            [
                [3, 2],
                [4, 3],
                [5, 4],
                [6, 5]
            ],
            [
                [3, 0],
                [2, 1],
                [1, 2],
                [0, 3]
            ],
            [
                [3, 1],
                [2, 2],
                [1, 3],
                [0, 4]
            ],
            [
                [3, 2],
                [2, 3],
                [1, 4],
                [0, 5]
            ],
            [
                [4, 0],
                [3, 1],
                [2, 2],
                [1, 3]
            ],
            [
                [4, 1],
                [3, 2],
                [2, 3],
                [1, 4]
            ],
            [
                [4, 2],
                [3, 3],
                [2, 4],
                [1, 5]
            ],
            [
                [5, 0],
                [4, 1],
                [3, 2],
                [2, 3]
            ],
            [
                [5, 1],
                [4, 2],
                [3, 3],
                [2, 4]
            ],
            [
                [5, 2],
                [4, 3],
                [3, 4],
                [2, 5]
            ],
            [
                [6, 0],
                [5, 1],
                [4, 2],
                [3, 3]
            ],
            [
                [6, 1],
                [5, 2],
                [4, 3],
                [3, 4]
            ],
            [
                [6, 2],
                [5, 3],
                [4, 4],
                [3, 5]
            ]
        ];

        for (let i = 0; i < winningBoards.length; i++) {
            if (winningBoards[i].every((space, index, spaces) => _board[space[0]][space[1]] && _board[space[0]][space[1]] === _board[spaces[0][0]][spaces[0][1]])) {
                return _board[winningBoards[i][0][0]][winningBoards[i][0][1]];
            }
        }

        return;
    }

    const reset = () => {
        for (let column = 0; column < _board.length; column++) {
            for (let row = 0; row < _board[column].length; row++) {
                _board[column][row] = 0;
            }
        }
    }

    return {
        getBoard,
        isColumnFull,
        getAvailableMoves,
        markSpace,
        getWinner,
        reset
    };
})();

const view = (() => {
    const _gameboard = document.getElementById('gameboard');
    const columns = _gameboard.querySelectorAll('.column');

    const update = (gameboard, map) => {
        gameboard.getBoard().forEach((column, colIndex) => {
            column.forEach((row, rowIndex) => {
                columns[colIndex].querySelectorAll('.space')[rowIndex].style.backgroundColor = map.has(row) ? map.get(row) : null;
            });
        });
    };

    return {
        columns,
        update
    };
})();

const controller = ((gameboard, view) => {
    const _playerOne = Player(1, 'yellow', 'human');
    const _playerTwo = Player(2, 'red', 'computer');
    const _playerColorMap = new Map([
        [_playerOne.getId(), _playerOne.getColor()],
        [_playerTwo.getId(), _playerTwo.getColor()]
    ]);

    let _gameOver;
    let _currentPlayer;

    const _initialize = () => {
        _gameOver = false;
        _currentPlayer = _playerOne;
    };

    const play = column => {
        if (!_gameOver && !gameboard.isColumnFull(column)) {
            gameboard.markSpace(column, _currentPlayer);
            view.update(gameboard, _playerColorMap);

            const winner = gameboard.getWinner();
            const availableMoves = gameboard.getAvailableMoves();
            if (!winner && availableMoves.length) {
                //next turn
                _currentPlayer = (_currentPlayer === _playerOne) ? _playerTwo : _playerOne;
                if (!_currentPlayer.isHuman()) {
                    //AI play turn
                    const move = Math.floor(Math.random() * availableMoves.length);
                    play(availableMoves[move]);
                }
            } else {
                //end game
                _gameOver = true;
                console.log(winner);
            }
        }
    };

    const reset = () => {
        gameboard.reset();
        view.update(gameboard, _playerColorMap);
        _initialize();
    };

    _initialize();

    return {
        play,
        reset
    };
})(gameboard, view);

//Event Handlers
view.columns.forEach((column, index) => {
    column.querySelectorAll('.space').forEach(space => {
        space.addEventListener('click', () => {
            controller.play(index);
        });
    });
});

document.getElementById('reset').addEventListener('click', controller.reset);