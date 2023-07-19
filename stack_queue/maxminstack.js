//link to problem: https://skilled.dev/course/max-min-stack

class MaxMinStack {
  // Any of the initial methods can be updated
  constructor() {
    this.stack = [];
    this.minValueStack = []
    this.maxValueStack = []
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  push(item) {
    this.stack.push(item);
    if(this.minValueStack.length===0 || item<=this.getStackMin()){
      this.minValueStack.push(item)
    }
    if(this.maxValueStack.length===0 || item>=this.getStackMin()){
      this.maxValueStack.push(item)
    }
    return item;
  }
  pop() {
    const item=this.stack.pop();
    if(item===this.getStackMax()){
      this.maxValueStack.pop()
    }
    if(item===this.getStackMin()){
      this.minValueStack.pop()
    }
    return item
  }


  // You must implement the methods below
  getStackMax() {
		return this.maxValueStack[this.maxValueStack.length-1]
  }
  getStackMin() {
		return this.minValueStack[this.minValueStack.length-1]
  }
}
