'''Given an array of integers, write a function build_product_array that returns an array where each item is the product of all the items in the input array except for the item at that index.

Constraints:

Solve this without using division
You can create a results array, and it won't count against your space complexity
Memory may be a concern though, so try to limit your use of additional data structures


> take input array in list input
> store solutions in list results[] and return it

> this solution uses brute force
> time complexity: O(n^2)

'''

# @param {List [int]} input
# @return {List [int]}

def build_product_array(input):
  results = []
  
  for i in range(len(input)):
    product = 1
    for j in range(len(input)):
      if j==i:
        continue
      product*=input[j]
    results.append(product)
  return results
