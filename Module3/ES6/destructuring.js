// DESTRUVTURING OBJ
let obj={
    name:"abhishe",
    clas: "ninth",
    rollno: 1
};
obj.bro=14;
let { name , clas , rollno,bro}=obj;
console.log(bro);

// DESTRUTURING ARRAY

let arr=[1,2,5,6,7];
let [first,second,_,fourth]=arr;
console.log(fourth);