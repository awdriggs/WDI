// first oop example...

// var airConditioner = {
// 	temperature : 0,
// 	getTempterature : function() {
// 		return this.temperature;
// 	}
// }

// console.log(airConditioner.getTempterature());

//2nd excercies

var cashRegister = {

 singlesCount:    30,
 fiversCount:     8,
 tensCount:       3,
 twentiesCount:   2,

 totalCash:  function () {
   var sum = this.singlesCount 
   			+ (this.fiversCount*5) 
   			+ (this.tensCount*10) 
   			+ (this.twentiesCount*20);
   return sum;   
 }
};

var total = cashRegister.totalCash();

console.log(total);