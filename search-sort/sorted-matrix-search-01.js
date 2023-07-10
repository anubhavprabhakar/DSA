/*
    link to problem: https://skilled.dev/course/sorted-matrix-search
    this solution is improved over brute force
    brute force worst time: O(n) n->total number of elements(r*c)
    this solution worst time: O(rlogc) r-> number of rows, c-> number of columns
    however, this solution needs further improvement by reducing time  
*/

/**
 * @param {List[List[int]]} matrix
 * @param {int} target
 * @return {List[int]}
 */
const searchMatrix = (matrix, target) => {
	let rowIndex = -1
  let columnIndex = -1
  
  for(let i=0; i<matrix.length; i++){
    let matrixLength = matrix[i].length-1
    let isTargetInBounds = target>=matrix[i][0] && target<=matrix[i][matrixLength]
    if(isTargetInBounds){
      let startIndex=0
      let endIndex=matrixLength
      while(startIndex<=endIndex){
        let midpoint = Math.floor((startIndex+endIndex)/2)
        if(matrix[i][midpoint]===target){
          rowIndex=i
          columnIndex=midpoint
        }
        if(target<matrix[i][midpoint]){
          endIndex=midpoint-1
        }else{
          startIndex=midpoint+1
        }
      }
    }
  }
  return [rowIndex, columnIndex]
}
