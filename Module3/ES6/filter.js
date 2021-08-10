 //APPLIED ON ARRAY
 //TAKE A FUNCTION AS INPUT RETURNS ARRAY
 let arr=[1,2,6,4];
function even(x){
    return x%2==0;
}
let ab=arr.filter(even);
console.log("original filter");
console.log(ab); 

//FILTER REPLICA
function even(x){
    return x%2==0;
}
function myfilter(arr,even){
    let list=[];
for(let i=0;i<arr.length;i++){
    if(even(arr[i])){
        list.push(arr[i]);
    }
}
return list;
}
let res=myfilter(arr,even);
console.log("created filter");
console.log(res);