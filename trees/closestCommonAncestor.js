/** link to problem: https://skilled.dev/course/closest-common-ancestor-in-binary-tree
 * @param {BinaryNode} root
 * @param {int} firstChildValue
 * @param {int} secondChildValue
 * @return {BinaryNode}
 */

const findClosestAncestor = (root, firstChildValue, secondChildValue) => {
  if(!root){
    return
  }
  if(root.data===firstChildValue || root.data===secondChildValue){
    return root
  }
  
  let searchLeft = findClosestAncestor(root.left, firstChildValue, secondChildValue)
  let searchRight = findClosestAncestor(root.right, firstChildValue, secondChildValue)

  if (searchLeft && searchRight) {
    return root;
  }
  
  return searchLeft?searchLeft:searchRight
  
}
