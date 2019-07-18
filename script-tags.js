let generateButton = document.getElementById("generate");
//Code snippets
let inputTags =document.querySelector("#inputTags");
let tags=document.querySelector("#tags");

//SC number
let inputSC = document.querySelector("#inputSC");
let scNumber = document.querySelector("#scNumber");
//Expiry date
let inputDate =document.querySelector("#inputDate");
let expiryDate=document.querySelector("#expiryDate");
//End of SC number
generateButton.addEventListener("mousedown", function(){

    let res=tags.split("<noscript>")[1];
res=res.replace('"</noscript> <!-- End of event snippet: Please do not remove -->"', " ");
console.log(res);

//Input tag
tags.innerHTML=inputTags.value;
tags.style.color="red";
tags.style.fontWeight ="900";
//End of input tag

//SC number
scNumber.innerHTML='"SC#'+inputSC.value+'"';
scNumber.style.color="red";
scNumber.style.fontWeight ="900";
//End of SC number

//Expiry date

expiryDate.innerHTML='"'+inputDate.value+'"';
expiryDate.style.color="red";
expiryDate.style.fontWeight ="900";

//End of expiry date
});

//Reset button
let reset=document.querySelector("#reset");

reset.addEventListener("mousedown", function(){
    window.location.reload();
})

//End of reset button

