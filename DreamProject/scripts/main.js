let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/food-truck-illuminated-truck-vehicle.jpg') {
      myImage.setAttribute ('src','images/IMG_1858.jpg');
    } else {
      myImage.setAttribute ('src','images/food-truck-illuminated-truck-vehicle.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Taste the Best, ' + myName;
  }
}
 
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Taste the Best, ' + storedName;
  }
 
  myButton.onclick = function() {
    setUserName();
  }