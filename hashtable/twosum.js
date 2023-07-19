/**link to problem: https://skilled.dev/course/target-two-sum

 * @param {List[int]} array
 * @param {int} target
 * @return {List[List[int]]}
 */
const getTargetIndexes = (array, target) => {
  const targetIndex = {}
  const results = []
  
  for(let i = 0; i<array.length; i++){
    targetIndex[array[i]]=i
    
    let key = array[i]
    let diff = target-key
		
    if(targetIndex[diff]>=0){
      if(i!==targetIndex[diff]){
        let temp = [i, targetIndex[diff]]
      	results.push(temp)
      	targetIndex[key]=-1
        targetIndex[diff]=-1
      }
    }
  }
  
  return results
  
};
