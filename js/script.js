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
        const row = _board[column].indexOf(0);
        _board[column][row] = player;
    };

    const clearSpace = (column) => {
        let row = _board[column].indexOf(0);
        
        if (row === 0) return;
        else if (row === -1) row = _board[column].length;

        _board[column][row - 1] = 0;
    }

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
        clearSpace,
        getWinner,
        reset
    };
})();

const view = (() => {
    const _message = document.getElementById('message');
    const _indicator = document.getElementById('indicator');
    const _gameboard = document.getElementById('gameboard');
    const columns = _gameboard.querySelectorAll('.column');
    const _discs = (() => {
        const discs = [];
        columns.forEach(column => {
            discs.push(column.querySelectorAll('.disc'));
        });
        return discs;
    })();

    const setScoreboard = (msg, color) => {
        _message.textContent = msg;
        _indicator.style.backgroundColor = color;
        _indicator.style.transform = _indicator.style.transform ? null : "rotateY(180deg)";
    }

    const update = (gameboard, map) => {
        gameboard.getBoard().forEach((column, colIndex) => {
            column.forEach((row, rowIndex) => {
                _discs[colIndex][rowIndex].style.backgroundColor = map.has(row) ? map.get(row) : null;
            });
        });
    };

    return {
        columns,
        setScoreboard,
        update
    };
})();

const ai = (() => {
    const _columnOrder = [3,2,4,1,5,0,6];

    const findBestMove = (board) => {
        let bestScore = Infinity;
        let bestMove;

        const availableMoves = board.getAvailableMoves();
        const movesSorted = _columnOrder.filter(move => availableMoves.includes(move));

        movesSorted.forEach(move => {
            board.markSpace(move, 2);
            let score = _minimax(board, 0, -Infinity, Infinity, true);
            board.clearSpace(move);
            
            if (score < bestScore) {
                bestScore = score;
                bestMove = move;
            }
            //console.log({score, bestScore, move, bestMove});
        });
        return bestMove;
    };

    const _minimax = (board, depth, alpha, beta, isMaximizing) => {
        // check if end game
        const winner = board.getWinner();
        //hardcode computer as minimizing
        if (winner === 1) return 100 - depth;
        else if (winner === 2) return -100 + depth;

        const availableMoves = board.getAvailableMoves();
        if (!availableMoves.length || depth === 8) return 0;

        const movesSorted = _columnOrder.filter(move => availableMoves.includes(move));

        //maximizing
        if (isMaximizing) {
            let maxScore = -Infinity;
            for (let i = 0; i < movesSorted.length; i++) {
                board.markSpace(movesSorted[i], 1);
                const score = _minimax(board, depth+1, alpha, beta, false);
                board.clearSpace(movesSorted[i]);
                maxScore = Math.max(maxScore, score);
                alpha = Math.max(alpha, score);

                if (beta <= alpha) break;
            }
            return maxScore;
        } else {
            let minScore = Infinity;
            for (let i = 0; i < movesSorted.length; i++) {
                board.markSpace(movesSorted[i], 2);
                const score = _minimax(board, depth+1, alpha, beta, true);
                board.clearSpace(movesSorted[i]);
                minScore = Math.min(minScore, score);
                beta = Math.min(beta, score);

                if (beta <= alpha) break;
            }
            return minScore;
        }
    }
    return {findBestMove};
})();

const controller = ((gameboard, view, ai) => {
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
        view.setScoreboard(`Player ${_currentPlayer.getId()}'s turn`, _currentPlayer.getColor());
    };

    const play = column => {
        if (!_gameOver && !gameboard.isColumnFull(column)) {
            gameboard.markSpace(column, _currentPlayer.getId());
            view.update(gameboard, _playerColorMap);

            const winner = gameboard.getWinner();
            const availableMoves = gameboard.getAvailableMoves();
            if (!winner && availableMoves.length) {
                //next turn
                _currentPlayer = (_currentPlayer === _playerOne) ? _playerTwo : _playerOne;
                view.setScoreboard(`Player ${_currentPlayer.getId()}'s turn`, _currentPlayer.getColor());
                if (!_currentPlayer.isHuman()) {
                    //AI play turn
                    //const move = Math.floor(Math.random() * availableMoves.length);
                    //play(availableMoves[move]);
                    setTimeout(() => play(ai.findBestMove(gameboard)), 500);
                }
            } else {
                //end game
                _gameOver = true;
                if (winner) view.setScoreboard(`Player ${_currentPlayer.getId()} wins!`, _currentPlayer.getColor());
                else view.setScoreboard('Draw!', null);
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
})(gameboard, view, ai);

//Event Handlers
view.columns.forEach((column, index) => {
    column.querySelectorAll('.space').forEach(space => {
        space.addEventListener('click', () => {
            controller.play(index);
        });
    });
});

document.getElementById('reset').addEventListener('click', controller.reset);