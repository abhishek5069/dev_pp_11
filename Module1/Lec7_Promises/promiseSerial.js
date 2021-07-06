const fs=require("fs");
//promise hell

let f1promise=fs.promises.readFile("./f1.txt");
f1promise.then(function(data){
    console.log(data +"");
    let f2promise=fs.promises.readFile("./f2.txt");
    f2promise.then(function(data){
        console.log(data +"");
        let f3promise=fs.promises.readFile("./f3.txt");
        f3promise.then(function(data){
            console.log(data +"");
        })
    })
})







