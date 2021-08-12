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
    MyHeading.textContent = 'Hello, '+ myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    MyHeading.textContent = 'Hello, '+ storedName;
}

MyButton.onclick = function() {
    setUserName();
}
/* document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */