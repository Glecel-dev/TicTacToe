import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Tile } from '../components/Tile';

type Board = string[][];
const initialState: Board = [
  ['', '', ''], //1st row
  ['', '', ''], //2nd row
  ['', '', ''], //3rd row
];
export const PlayGround = () => {
  const [gameMap, setGameMap] = useState(initialState);
  const [currentTurn, setCurrentTurn] = useState('x');
  const [numberOfMoves, setNumberOfMoves] = useState(0);

  useEffect(() => {
    tictactoe(gameMap);
  }, [gameMap]);

  const onCellPress = (rowIndex: number, columnIndex: number) => {
    if (gameMap[rowIndex][columnIndex] !== '') {
      Alert.alert('You cannot click here, this cell is already occupied');
    }
    setGameMap((existingMap) => {
      const updatedMap = [...existingMap];
      updatedMap[rowIndex][columnIndex] = currentTurn;
      setNumberOfMoves(numberOfMoves + 1);
      return updatedMap;
    });

    setCurrentTurn(currentTurn === 'x' ? 'o' : 'x');
  };

  function tictactoe(playgroundMap: Board): void {
    const winner = isGameOver(playgroundMap);
    if (winner) {
      return Alert.alert('Huraaay', `Player ${winner} won`, [
        {
          text: 'Restart',
          onPress: resetGame,
        },
      ]);
    } else if (numberOfMoves == 9) {
      return Alert.alert("It's a tie", 'tie', [
        {
          text: 'Restart',
          onPress: resetGame,
        },
      ]);
    }
  }

  function isGameOver(board: Board): string {
    const linesToCheck = [
      [board[0][0], board[1][1], board[2][2]],
      [board[2][0], board[1][1], board[0][2]],
    ];

    for (let i = 0; i < board.length; i++) {
      // Add Rows
      linesToCheck.push(board[i]);
      // Add Columns
      linesToCheck.push(getColumn(board, i));
    }

    for (const line of linesToCheck) {
      const isWinner = threeInALine(line);
      if (isWinner) {
        return isWinner;
      }
    }
    return '';
  }

  function getColumn(board: Board, column: number): string[] {
    return [board[0][column], board[1][column], board[2][column]];
  }

  function threeInALine(line: string[]): string {
    const returnField = line[0];
    for (let field = 1; field < line.length; field++) {
      if (line[field] != returnField) {
        return '';
      }
    }
    return returnField;
  }

  const resetGame = () => {
    setGameMap([
      ['', '', ''], // 1st row
      ['', '', ''], // 2nd row
      ['', '', ''], // 3rd row
    ]);
    setCurrentTurn('x');
    setNumberOfMoves(0);
  };
  return (
    <>
      {gameMap!.map((row, rowIndex) => (
        <View testID="rowId" style={styles.row} key={`rowContainer-${rowIndex}`}>
          {row.map((cell, cellIndex) => (
            <Tile
              key={`cell-${cellIndex}`}
              cell={cell}
              onPress={() => onCellPress(rowIndex, cellIndex)}
            />
          ))}
        </View>
      ))}
      <View style={styles.resetGameButton}>
        <TouchableOpacity onPress={resetGame}>
          <Text style={styles.buttonText}>Reset Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  resetGameButton: {
    marginLeft: 110,
    marginTop: 60,
    backgroundColor: 'blue',
    width: 160,
    height: 60,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    fontSize: 20,
    color: 'white',
  },
});
