

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/icon.png') {
      myImage.setAttribute ('src','images/shot_1x.png');
    } else {
      myImage.setAttribute ('src','images/icon.png');
    }
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'I love my mom, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}