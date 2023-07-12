/* link to problem: https://skilled.dev/course/first-bad-version
this solution is implemented in O(log n) time with an adaptation of binary search,
this is an improvement over brute force which is O(n)

/**
 * NOTE: function isBadVersion is defined in the test scope
 * and will be called correctly when used in this solution function.
 */

/**
 * @param {number} totalVersions
 * @return {number}
 */
const firstBadVersion = (totalVersions) => {
	let startVersion = 0
  let endVersion = totalVersions
  
  while(startVersion<=endVersion){
    const middleVersion = Math.floor((startVersion+endVersion)/2)
    
    if(!isBadVersion(startVersion)){
      if(!isBadVersion(middleVersion)){
        startVersion=middleVersion+1
      }else{
        endVersion=middleVersion-1
      }
    }else{
      return startVersion
    }
  }
}

