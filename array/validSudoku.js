//link to problem: https://skilled.dev/course/valid-sudoku-board
//this solution is incomplete; will finish later on
/**
* @param {List[List[int]]} board
* @return {boolean}
*/
function isValidSudokuBoard(board) {
  function hasValidShape(board) {
  	// If we don't have any rows or columns, it must be false
  	if (board.length === 0 || board[0].length === 0) {
    	return false;
  	}

  	// # of rows and columns must be equal to be a square
  	const rowCount = board.length;
  	const columnCount = board[0].length;
  	const isSquare = rowCount === columnCount;
	
  	if (!isSquare) {
    	return false;
  	}
    
    const hasSubsquares = Math.sqrt(rowCount) % 1 === 0;
    if(!hasSubsquares){
      return false
    }
    
	}
}


