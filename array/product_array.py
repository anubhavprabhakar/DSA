'''
link to problem: https://skilled.dev/course/product-array
Problem:
Given an array of integers, write a function build_product_array that returns an array where each item is the product of all the items in the input array except for the item at that index.

Constraints:

Solve this without using division
You can create a results array, and it won't count against your space complexity
Memory may be a concern though, so try to limit your use of additional data structures


> take input array in list input
> store solutions in list results[] and return it
 
> this solution uses two look up arrays, comprising of left and right products; arrays have lookup time complexity of O(1)
> left product is product of all elements to the left of the current index, and vice versa for right
> now, we can directly multiply left and right product to get the running product in linear time
> time complexity: O(n)
> better than brute force solution since it had time complexity of O(n^2)

'''

# @param {List [int]} input
# @return {List [int]}
def build_product_array(input):
  results = [1]*len(input)
  #running product is product of all numbers excluding current index
  right_running_product = 1
  
  #using results to store left running product
  for i in range(1, len(input)):
    results[i] = results[i-1]*input[i-1]
  
  #refresh the results list with right running products as well
  for i in range(len(input)):
    end_index = len(input)-1-i
    results[end_index]*=right_running_product
    #update right_running_product to include current element in product
    right_running_product*=input[end_index]
  
  return results
