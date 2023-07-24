/** link to problem: https://skilled.dev/course/binary-tree-max-depth
this is a recursive solution, which builds up callstack, taking up O(n) space.
improvement: iterative solution, it would take up O(1) space, while time would be same.

 * @param {BinaryNode} root
 * @return {int}
 */
const findMaxDepth = (root) => {
	if(!root){
    	return -1
  }
  return ((findMaxDepth(root.left)>findMaxDepth(root.right))
          ?findMaxDepth(root.left)+1
          :findMaxDepth(root.right)+1
         )
}

