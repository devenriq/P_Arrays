const nums = [1, 2, 3, 4];

const total = nums.reduce((sum, num) => {
  return (sum += num);
});

console.log(total);
