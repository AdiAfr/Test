var myHeading = document.querySelector('p2');
myHeading.textContent = 'Hello world!';


/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/


var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	    if(mySrc === 'images/img1.jpeg') 
		myImage.setAttribute ('src','images/img2.jpeg');
	    else
		myImage.setAttribute ('src','images/img1.jpeg');
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('p');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
 	myHeading.textContent = 'Name: ' + myName;
}

myButton.onclick = function(){
	setUserName();
}
