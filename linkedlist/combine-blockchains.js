/** link to problem: https://skilled.dev/course/combine-blockchains

 * @param {Node} chainHead1
 * @param {Node} chainHead2
 * @return {Node}
 */
const combineBlockchains = (chainHead1, chainHead2) => {
  let combinedBlockchainHead = new Node(0)
  let combinedBlockchainTail = combinedBlockchainHead
  
  function append(timestamp){
    const appendedNode = new Node(timestamp)
    combinedBlockchainTail.next = appendedNode
    combinedBlockchainTail = appendedNode
  }
	
  if(chainHead1.timestamp<chainHead2.timestamp){
    combinedBlockchainHead.timestamp = chainHead1.timestamp
    chainHead1 = chainHead1.next
  }else{
    combinedBlockchainHead.timestamp = chainHead2.timestamp
    chainHead2 = chainHead2.next
  }
  
  while(chainHead1!==null && chainHead2!==null){
    const isChain1Smaller = chainHead1.timestamp<chainHead2.timestamp
  	if(isChain1Smaller){
    	append(chainHead1.timestamp)
      chainHead1=chainHead1.next
  	}else{
    	append(chainHead2.timestamp)
      chainHead2=chainHead2.next
  	}
  }
  while(chainHead1!==null){
    append(chainHead1.timestamp)
    chainHead1 = chainHead1.next
  }
  while(chainHead2!==null){
    append(chainHead2.timestamp)
    chainHead2 = chainHead2.next
  }
  
  return combinedBlockchainHead
};

