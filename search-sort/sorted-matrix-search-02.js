/* link to problem: https://skilled.dev/course/sorted-matrix-search
time complexity: O(r+c) which is better than O(rlogc)
space: O(1)

/**
 * @param {List[List[int]]} matrix
 * @param {int} target
 * @return {List[int]}
 */
const searchMatrix = (matrix, target) => {
	
  let row = matrix.length-1
  let column = 0
  
  while(row>=0 && column<=matrix[0].length){
    const currentItem = matrix[row][column]
    
    if(currentItem === target){
      return [row, column]
    }
    
    if(currentItem > target){
      row-=1
    }else{
      column+=1
    }
  }
  return [-1, -1]
}
  
