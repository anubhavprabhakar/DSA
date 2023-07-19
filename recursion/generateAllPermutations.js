/** link to problem: https://skilled.dev/course/generate-all-permutations

 * @param {str} string
 * @return {List[str]}
 */
const generatePermutations = (string) => {
	if(string.length<2){
    return [string]
  }
  
  const permutationsArray = []
  
  for(let i=0; i<string.length; i++){
    const mainChar = string[i]
    const remainingChars = string.slice(0,i)+string.slice(i+1,string.length)
    const remainingPermutations = generatePermutations(remainingChars)
    
    for(let permutation of remainingPermutations){
      permutationsArray.push(mainChar+permutation)
    }
	}
  return permutationsArray
};
