window.onload = function() {
	console.log('chillin in the park.');
	
	var title = document.createElement("h1");
	var list = document.getElementById("park");
	var body = list.parentNode;
	// Insert the title
	body.insertBefore(title, list);
	title.innerHTML = '$uite Park Time';


	// Question 8 - Click Event on Duck
	var image = document.getElementById('duck');

	image.addEventListener('click', function(){
		//alert('working yo');
		image.setAttribute('id', 'weaselpecker');
	});

};
