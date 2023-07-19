/**link to problem: https://skilled.dev/course/sum-digits

 * @param {int} number
 * @return {int}
 */
const sumDigits = (number) => {
	sum = 0
  while(number>0){
    sum+=number%10
    number=Math.floor(number/10)
  }
  return sum
}
