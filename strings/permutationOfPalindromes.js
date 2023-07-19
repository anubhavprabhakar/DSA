/**link to problem: https://skilled.dev/course/group-permutations-of-palindromes

 * @param {List[str]} strings
 * @return {List[List[str]]}
 */
function groupPermutationsOfPalindromes(strings) {
  function isPermutationOfPalindrome(string){
    const isOdd = (num) => num%2!==0
    const stringHash = {}
    
    for (let char of string){
      if(!stringHash[char]){
        stringHash[char]=0
      }
      stringHash[char]++
    }
    
    let oddCharCount = 0
    
    Object.values(stringHash).forEach((numChars) => {
      if(isOdd(numChars)){
        oddCharCount++
      }
    })
    return oddCharCount <=1
  }
  
  const permutationsOfPalindrome = {}
  
  strings.forEach((word) => {
    if(isPermutationOfPalindrome(word)){
      const key = word
      .split('')
      .sort()
      .join('')
      
      if(!permutationsOfPalindrome[key]){
        permutationsOfPalindrome[key]=[]
      }
      permutationsOfPalindrome[key].push(word)
    }
  })
  
  return Object.values(permutationsOfPalindrome)
};
