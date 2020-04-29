 const names=["sussy", "anna","bob"];

 
/*
 function testing(arr) {

  let   newArr = [];
    for (let i = 0;i < arr.length; i++) {
    let newitem ='${arr[i]} jordan';
    newArr.push(newitem);
    }
    if (newArr.length > 2) 
    {
        console.log ('here is  your long array: ${newArr}');
    }
   
 }

 testing(names); */

 let myText = "I am s string";
 for (let i=0; i<=myText.length; i++){

 let newText = myText.replace(/\s/g, '!');
 
console.log(newText);
 }