/**link to problem: https://skilled.dev/course/catch-the-hacker

 * @param {List[str]} emails
 * @return {str}
 */
const findHackerEmail = (emails) => {
	const emailCountTable = {}
  let maxCount = 0
  let hackerEmail = ''
  
  for(const email of emails){
    if(!emailCountTable[email]){
      emailCountTable[email] = 0
    }
    emailCountTable[email]++
  }
  
  for(const email in emailCountTable){
    const count = emailCountTable[email]
    
    const isMaxCount = count>maxCount
    maxCount = isMaxCount?count:maxCount
    hackerEmail = isMaxCount?email:hackerEmail    
  }
  
  return hackerEmail  
};
