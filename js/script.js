const Player = (id, color) => {
    const _id = id;
    const _color = color;

    const getId = () => {
        return _id;
    }

    const getColor = () => {
        return _color;
    }
    return {
        getId,
        getColor
    };
};

const gameboard = (() => {
    //const _board = Array(Array(6), Array(6), Array(6), Array(6), Array(6), Array(6), Array(6));
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

    const markSpace = (column, player) => {
        let row = _board[column].indexOf(0);
        _board[column][row] = player.getId();
    };

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
        markSpace,
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
    const _playerOne = Player(1, 'yellow');
    const _playerTwo = Player(2, 'red');
    const _playerColorMap = new Map([
        [_playerOne.getId(), _playerOne.getColor()],
        [_playerTwo.getId(), _playerTwo.getColor()]
    ]);
    let _currentPlayer = _playerOne;

    const play = column => {
        if (!gameboard.isColumnFull(column)) {
            gameboard.markSpace(column, _currentPlayer);
            view.update(gameboard, _playerColorMap);
            _currentPlayer = (_currentPlayer === _playerOne) ? _playerTwo : _playerOne;
        }
        //console.log(column);
    }

    const reset = () => {
        _currentPlayer = _playerOne;
        gameboard.reset();
        view.update(gameboard, _playerColorMap);
    }

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