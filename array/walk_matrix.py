'''link to the problem: https://skilled.dev/course/walk-a-matrix
   Problem:
   Write a function walk_matrix that takes an r x c 2D array
   and returns a 1D array of all the elements in the matrix
   printed in clockwise order.
   
   # Input
    matrix = [
        [0, 1, 2, 3],
        [11, 12, 13, 4],
        [10, 15, 14, 5],
        [9, 8, 7, 6]
    ]

# Output: walkMatrix(matrix)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

'''

#input matrix
#call walk_matrix

#space complexity is O(1)
#time complexity is O(n) since all nodes are visited once in O(1) time

def walk_matrix(matrix):
  elements = []
  start_row=0
  start_column=0
  end_row=len(matrix)-1
  end_column=len(matrix[0])-1
  while(start_row<=end_row and start_column<=end_column):
    #traverse top row from left to right
    for column in range(start_column, end_column+1):
      num = matrix[start_row][column]
      elements.append(num)
    #increment start row by 1 as we traversed this row
    start_row+=1
    #traverse the right-most column from top to bottom
    for row in range(start_row, end_row+1):
        num = matrix[row][end_column]
        elements.append(num)
    #decrement the end column as we traversed this column
    end_column-=1
    
    #check if the current row is visited or not, for edge case when only one row is left
    if(start_row<=end_row):
      #traverse the bottom row from right to left
      for column in range(end_column, start_column-1, -1):
        num = matrix[end_row][column]
        elements.append(num)
      #decrement the end row as we traversed this row    
      end_row-=1
    
    #check if the current column is visited or not, for edge case when only one column is left(one node technically)
    if(start_column<=end_column):
      for row in range(end_row, start_row-1, -1):
        num = matrix[row][start_column]
        elements.append(num)
      #increment the start column as we traversed this column 
      start_column+=1
  
  return elements
