// link to problem: https://skilled.dev/course/binary-search-tree-validate

const validate(root, lowerBound, upperBound) => {
  if(!root){
    return true
  }
  
  if(root.data<=lowerBound || root.data>=upperBound){
    return false
  }
  
  const isValidLeft = validate(root.left, lowerBound, root.data)
  const isValidRight = validate(root.right, root.data, upperBound)
  
  return isValidLeft && isValidRight
  
}

const isBST = (root) => {
  const isValid = validate(root, -Infinity, Infinity)
  return isValid
}
