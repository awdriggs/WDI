var build  = function(){
	//build the head
	buildHead();
	buildBody();
	setTimeout(letsChange, 3000);
}

//build the header
var buildHead = function(){
	console.log("head working")
	
	var links = document.createElement('link');
	document.head.appendChild(links);

	links.setAttribute('rel', "stylesheet");
	links.setAttribute('href', "css/style.css");
	links.setAttribute('media', "screen");
	links.setAttribute('title', "Vanilla DOM");
	links.setAttribute('charset', "utf-8");

	var title = document.createElement('title');
	document.head.appendChild(title)
	title.innerHTML = 'Vanilla';
}

//building out the body! 
var buildBody = function(){
	//section
	var section1 = document.createElement('section');
	document.body.appendChild(section1);
	section1.setAttribute('id', 'header');

	//page headline
	var headline = document.createElement('h1');
	section1.appendChild(headline);
	headline.setAttribute('id', 'page-title');
	headline.innerHTML='Vanilla-DOM';

	//image container
	var imageContain = document.createElement('div');
	section1.appendChild(imageContain);
	imageContain.setAttribute('id', 'image-container');
	
	var image = document.createElement('img');
	imageContain.appendChild(image);
	image.setAttribute('height', '100px');
	image.setAttribute('src', 'http://upload.wikimedia.org/wikipedia/commons/c/c0/Vanilla_Ice.jpg' );
	image.setAttribute('alt', 'Vanilla Ice');

	var para = document.createElement('p');
	section1.appendChild(para);
	para.setAttribute('id', 'description');
	para.innerHTML = 'Vanilla JavaScript can be awesome. Here\'s why.'

	var list = document.createElement('ul');
	section1.appendChild(list);
	list.setAttribute('id', 'awesome-list');

	
	for(var i = 0; i<3; i++){
		var liItem = document.createElement('li');
		list.appendChild(liItem);
		liItem.setAttribute('class', 'awesome-list-item')
		liItem.innerHTML = 'Everybody loves Vanilla';
	}
}

//from practice on manipulating dom
var letsChange = function() {
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
}

window.onload = function () {
	alert("working!");
	build();
	
}


