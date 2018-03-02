

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
  myHeading.innerHTML = 'I need you support, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

document.getElementById('multiply').onclick = function() {
    // var multiply_result = multiply(20,20);
    // document.getElementById("result").value = multiply_result;

    var firstnum = document.querySelector('input[name="first"]').value;
    var secondnum = document.querySelector('input[name="second"]').value;
     // var multiply_result = multiply(firstnum,secondnum);
    document.getElementById("result").value = multiply(firstnum,secondnum);
    
};