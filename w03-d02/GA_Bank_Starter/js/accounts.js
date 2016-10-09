console.log('accounts.js working')

var accounts = {
	savings: new Account(),
	checking: new Account(),
	total:0,
	
	updateTotal: function(){
		this.total = this.savings.total + this.checking.total;
		return this.total;
	},

	withdraw: function(amount, account){
		
		//makes sure there is enough money in the accounts
		if(this.total < amount){
			return false;
		}

		//check for the account type
		if(account == "savings"){
			//withdraw the amount from savings
			var remainder = this.savings.withdraw(amount);
			//if there is not enough money in that account, this will take the remainder from the other account
			//otherwise it is withdrawing 0
			this.checking.withdraw(remainder);
		} else if(account == "checking"){
			//withdraw the amount from checking, same process as above
			var remainder = this.checking.withdraw(amount);
			this.savings.withdraw(remainder);
		}

		this.updateTotal();

	},

	deposit: function(amount, account){
		if(account == "savings"){
			this.savings.deposit(amount);
		} else if(account == "checking"){
			this.checking.deposit(amount);
		}


		accounts.updateTotal();

	}

}

//constructor for Account
function Account(){
	this.total = 0;
}

//behaviors of account
Account.prototype.deposit = function(amount) {
	this.total += amount;
};

Account.prototype.withdraw = function(amount) {
	//not enough money in this account!
	if(amount>this.total){
		//calculate the negative balance
		var difference = amount - this.total;
		//deplete this account
		this.total = 0;
		//this is the negative balance
		return difference;
	} else 
		this.total -= amount;
		return this.total; //not sure why this is needed but it is! took me an hour to debug
}



// //testing functions
// accounts.deposit(100, 'checking');
// accounts.deposit(100, 'savings');

// accounts.updateTotal();
// console.log(accounts.total);
// console.log('attempting overdraft');
// accounts.withdraw(150, 'savings');

// console.log('new total '+ accounts.total);
// console.log('this should return false, not enough funds')
// accounts.withdraw(100, 'checking');
