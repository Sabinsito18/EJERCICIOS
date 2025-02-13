const nums = [1, 2, 3, 4, 5];

nums.reverse();
console.log(nums); 

const transformado = nums.map((num, index) => num * index);
console.log(transformado); 