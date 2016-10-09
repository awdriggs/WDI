
console.log('app.js working');

window.onload = function(){
	//click event for the checking account
	var checking = document.getElementsByClassName('checking');
	checking[0].onclick = function(){
		if(event.target.className == 'deposit'){
			console.log("check deposit clicked");
			var input = document.getElementsByClassName("checking")[0].getElementsByTagName('input')[0];
			accounts.deposit(parseInt(input.value), "checking");
			input.value = "";
		}

		if(event.target.className == 'withdraw'){
			console.log("checking withdraw clicked");
			var input = document.getElementsByClassName("checking")[0].getElementsByTagName('input')[0];
			accounts.withdraw(parseInt(input.value), "checking");
			input.value = "";
		}
		
	}

	//click events for savings account
	var savings = document.getElementsByClassName('savings');
	savings[0].onclick = function(){
	if(event.target.className == 'deposit'){
			//console.log("deposit clicked");
			var input = document.getElementsByClassName("savings")[0].getElementsByTagName('input')[0];
			accounts.deposit(parseInt(input.value), "savings");
			input.value = "";
		}

		if(event.target.className == 'withdraw'){
			//console.log("withdraw clicked");
			var input = document.getElementsByClassName("savings")[0].getElementsByTagName('input')[0];
			accounts.withdraw(parseInt(input.value), "savings");
			input.value = "";
		}
	}

	//this updates the screen all the time, all events
	document.addEventListener('click', render);

	//render on load to apply the zero class
	render();

}

//updates the display
var render = function(){
	var balances = document.getElementsByClassName("balance");
	balances[0].innerHTML = accounts.checking.total;
	balances[1].innerHTML = accounts.savings.total;

	//add a class if the amount in the account is zero
	if(balances[0].innerHTML == '0'){
		balances[0].className = "balance zero"
	}else balances[0].className = "balance";

	if(balances[1].innerHTML == '0'){
		balances[1].className = "balance zero"
	}else balances[1].className = "balance";
	
}

