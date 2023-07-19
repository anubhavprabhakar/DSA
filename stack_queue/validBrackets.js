/** link to problem: https://skilled.dev/course/valid-brackets

 * @param {str} string
 * @return {bool}
 */
const hasValidBrackets = (string) => {
	const matchingBrackets={
    '(':')',
    '[':']',
    '{':'}'
  }
  
  const openingBrackets=Object.keys(matchingBrackets)
  const closingBrackets=Object.values(matchingBrackets)
  
  let bracketStack = []
  
  for(const bracket of string){
    if(openingBrackets.includes(bracket)){
      bracketStack.push(bracket)
    }else if(closingBrackets.includes(bracket)){
      let item=bracketStack.pop()
      if( !item || bracket!==matchingBrackets[item]){
        return false
      }
    }
  }
  const isValid=(bracketStack.length===0)?true:false
  return isValid
};

