/*link to the problem: https://skilled.dev/course/age-sort
this is an improved solution from O(nlogn) time
since this problem has constraints of input range from 0 to 100, we use bucket sort in O(n)

/**
 * @param {number[]} ageList
 * @return {number[]}
 */


const sortByAge = (ageList) => {
	const MIN_AGE = 0
  const MAX_AGE = 100
  
  const sortedAges = []
  const ageCount = new Array(MAX_AGE+1).fill(0)
  
  ageList.forEach(age => ageCount[age]++)
  
  for(let age=MIN_AGE; age<=MAX_AGE; age++){
    const count = ageCount[age]
    
    for(let i=0; i<count; i++){
      sortedAges.push(age)
    }
  } 
  return sortedAges
}

