/** link: https://skilled.dev/course/reverse-a-linked-list
reverse a linked list in place, ie. without creating a new linked list
 * @param {Node} head
 * @return {Node}
 */
const reverseLinkedList = (head) => {
	let reversedHead = null
  let temp = head
  while(head!==null){
    head=head.next
    temp.next=reversedHead
    reversedHead=temp
    temp=head
  }
  return reversedHead  
};

