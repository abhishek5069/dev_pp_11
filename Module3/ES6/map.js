 //APPLIED ON ARRAY
 //TAKE A FUNCTION AS INPUT RETURNS ARRAY
 let arr=[1,2,3,4];
function double(x){
    return 2*x;
}
let ab=arr.map(double);
console.log("original");
console.log(ab); 
 
//MAP REPLICA

function mymap(arr,operation){
    let list=[];
for(let i=0;i<arr.length;i++){
    list.push(operation(arr[i]));
}
return list;
}
let res=mymap(arr,double);
console.log("created");
console.log(res);