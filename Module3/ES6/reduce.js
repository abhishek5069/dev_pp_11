//APPLIED ON ARRAY
//TAKE INPUT FUNCTION WITH 2 VARAND RETURN SINGLE VALUE
let a=[1,2,3,5];
function sum(x,y) {
    return x+y;
}
let ans=a.reduce(sum);
console.log("original");
console.log(ans);

//replica

function myreduce(arr,f){
    let ans=arr[0];
    for(let i=1;i<arr.length;i++){
        ans=f(ans,arr[i]);
    }
    return ans;
}
console.log("created");
let res=myreduce(a,sum);
console.log(res);