/** link to problem: https://skilled.dev/course/best-time-to-buy-and-sell-stock

This is the brute force solution with time complexity of O(n^2)

* @param {number[]} prices
* @return {number}
*/
const getMaxProfit = (prices) => {
  var max_profit = 0
  
  for(let i=0; i<prices.length-1; i++){
    for(let j=i+1; j<prices.length; j++){
      let profit = prices[j]-prices[i]
      if(max_profit < profit){
        max_profit = profit
      }
    }
  }
  
  return max_profit
};
