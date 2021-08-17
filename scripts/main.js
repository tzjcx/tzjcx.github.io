let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.jpg') {
      myImage.setAttribute('src','images/cat.jpg');
    } else {
      myImage.setAttribute('src','images/me.jpg');
    }
}

let MyButton = document.querySelector('button');
let MyHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    MyHeading.textContent = 'Hello, I\'m '+ myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    MyHeading.textContent = 'Hello, I\'m '+ storedName;
}

MyButton.onclick = function() {
    setUserName();
}

let colorPicker=document.getElementById("colorPicker");
let box=document.getElementById("box");
let output=document.getElementById("output");
let body=document.querySelector("div#mainfo");

body.style.borderColor=colorPicker.value;
colorPicker.addEventListener("input",function(event){body.style.borderColor=event.target.value;},false);
colorPicker.addEventListener("change",function(event){output.textContent="Color set to "+colorPicker.value;},false);


/* document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */
