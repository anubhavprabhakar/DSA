/** link to problem: https://skilled.dev/course/best-time-to-buy-and-sell-stock

This is the optimal solution with time complexity of O(n)
It uses a greedy algorithm to track the lowest and heighest price at the current day,
and calculates the difference between the smallest price encountered till now 
and the current price, inorder to find the max profit.

* @param {number[]} prices
* @return {number}
*/
const getMaxProfit = (prices) => {
  var max_profit = 0
  var min_price = prices[0]
  
  for(let i=0; i<prices.length; i++){
    if(prices[i]<=min_price){
      min_price=prices[i]
    }else{
      var profit = prices[i]-min_price
      max_profit = Math.max(profit, max_profit)
    }
  }
  
  return max_profit
};
