'''Write a function walk_matrix that takes an r x c 2D array
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
    
    for column in range(start_column, end_column+1):
      num = matrix[start_row][column]
      elements.append(num)
      
    start_row+=1
    
    for row in range(start_row, end_row+1):
        num = matrix[row][end_column]
        elements.append(num)
  
    end_column-=1
    
    if(start_row<=end_row):
      for column in range(end_column, start_column-1, -1):
        num = matrix[end_row][column]
        elements.append(num)
        
    end_row-=1
    
    if(start_column<=end_column):
      for row in range(end_row, start_row-1, -1):
        num = matrix[row][start_column]
        elements.append(num)
        
    start_column+=1
  
  return elements
