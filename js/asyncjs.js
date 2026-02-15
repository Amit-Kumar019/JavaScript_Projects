// function sum(a, b){
//     return a+b;
// }

// let ans = sum(19, 1);
// console.log(ans);

// Topic 1  : I/O Intensive (heavy operations ) Tasks
// topic 2 i.o bound task and CPU bound taks
// Functional Argument

function sumTillN(n) {
  let ans = 0;
  for (i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

let ans = sumTillN(10);
console.log(ans);
