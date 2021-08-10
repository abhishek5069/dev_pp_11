// ON ARRAY
let a=[6,2,3];
let b=[7,5,6];
let c=[...a,...b,...a,...b];
//{..a,..b}={'0:bka phla,'1':b ka dusra etc}
console.log(c);

//ON OBJ
let oa={"a":5,"b":6};
let ob={"c":7,"d":8};
let oc={...oa,...ob};
//let oc={...oa,...ob,...oa,...ob};==={ a: 5, b: 6, c: 7, d: 8 } ans m obj ekbar hi aaegi
// console.log(oc);

let arr=[1,2,3,5,6];
