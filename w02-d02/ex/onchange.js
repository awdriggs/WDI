var picker = document.getElementById('dropdown');

var listenForChange = function(){
	console.log(this.value);
}

picker.addEventListener("change", listenForChange);
