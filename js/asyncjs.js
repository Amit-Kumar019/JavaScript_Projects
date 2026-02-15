// function sum(a, b){
//     return a+b;
// }

// let ans = sum(19, 1);
// console.log(ans);

function sumTillN(n){
    let ans = 0;
    for(i=1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

let ans = sumTillN(10);
console.log(ans);