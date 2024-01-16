// Exercise 2: Single Number

const singleNumber = function (nums) {
  // Start coding here
  const allSet = new Set();
  const acceptSet = new Set(nums);
  for (let num of nums) {
    allSet.has(num) ? acceptSet.delete(num) : allSet.add(num);
  }
  return acceptSet.values().next().value;
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
