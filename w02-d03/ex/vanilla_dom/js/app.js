//alert("working!");

var pageTitle = document.getElementById('page-title');
var pageList = document.getElementsByTagName('ul');

var newLi = document.createElement('li');
newLi.innerHTML = "something awesome about js";
pageList[0].appendChild(newLi);

var headShot = document.getElementById('image-container');
//headShot.remove(); //it moved without using this code!
document.body.appendChild(headShot);

pageTitle.setAttribute("class", " red");

var listItems = document.getElementsByTagName('li');
for(var i = 0; i<listItems.length; i++){
	listItems[i].className +=  " blue";
}

var description = document.getElementById("description");
description.setAttribute('class', 'green');

var footer = document.createElement("footer");
footer.innerHTML = "<p>This is the footer paragraph";
footer.setAttribute('class', ' red')
document.body.appendChild(footer);
