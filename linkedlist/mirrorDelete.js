/** link to problem: https://skilled.dev/course/mirror-delete
this problem is solved using runner technique

 * @param {Node} head
 * @param {int} k
 * @return {Node}
 */
const mirrorDelete = (head, k) => {
	function deleteNextNode(nodeBefore){
    nodeBefore.next = nodeBefore.next.next
  }
  
  let leadNode = head
  let followNode = head
  let size=0
  
  while(size<k+1 && leadNode!=null){
    leadNode=leadNode.next
    size++
  }
  
  if(size===k+1){
    while(leadNode!=null){
    leadNode=leadNode.next
      if(leadNode){
        followNode=followNode.next
      }
  	}
  
  	if(followNode!=head){
      	deleteNextNode(followNode)
  	}else if(followNode==head){
      head=head.next
    }
  }  
  return head
};

