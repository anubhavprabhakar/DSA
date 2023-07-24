/** link to the problem: https://skilled.dev/course/binary-tree-max-depth
This is an iterative solution, it deals with the stack over flow problem
that arises in the recursive solution

 * @param {BinaryNode} root
 * @return {int}
 */
const findMaxDepth = (root) => {
	let maxDepth = -1
  const stack = []
  
  if(root){
    maxDepth+=1
    stack.push({node: root, depth: maxDepth})
  }
  
  while(stack.length){
    const {node, depth} = stack.pop()
    
    if(node){
      maxDepth = Math.max(maxDepth, depth)
      stack.push({node: node.right, depth: depth+1})
			stack.push({node: node.left, depth: depth+1})
    }
  }
  
  return maxDepth
}
