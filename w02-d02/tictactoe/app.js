var cells = document.getElementsByClassName('cell');
var turn = 0;
var turnDisplay = document.getElementById('turn');

//the winning combinations for ttt
var winningCombinations = [
      ['a1','a2','a3'],
      ['b1','b2','b3'],
      ['c1','c2','c3'],
      ['a1','b1','c1'],
      ['a2','b2','c2'],
      ['a3','b3','c3'],
      ['a1','b2','c3'],
      ['a3','b2','c1']
    ];

var tttClick = function(){
  //not working with the &#8203 character
  if(this.getAttribute("name") == "open"){
    if(turn == 0){
      this.innerHTML = "x";
      this.className += " clicked";
      turn = 1;
      turnDisplay.innerHTML = "<h3>player turn: o</h3>";

    } else if(turn == 1){
      this.innerHTML = "o";
      this.className += " clicked";
      turn = 0;
      turnDisplay.innerHTML = "<h3>player turn: x</h3>"
    }  
    this.setAttribute("name", "taken");  
  }

  //check the winner
  checkBoard(winningCombinations);

};

//functions for checking the board, takes an array of arrays with winning combos mapped
var checkBoard = function(winners){
  for(var i = 0; i < winners.length; i++){
    var xCount = 0;
    var oCount = 0;

    for(var j = 0; j < winners[i].length; j++){
      var currentElement = document.getElementById(winners[i][j])
      console.log(currentElement.innerHTML);

      if(currentElement.innerHTML == "x"){
        xCount++;
      } else if(currentElement.innerHTML == "o"){
        oCount++;
      }
    } //end innter for loop

    if(xCount == 3){
        //x won
        document.getElementById("winner").innerHTML = "<h3>winner: x!<h3>";
        turnDisplay.innerHTML = "<h3>game over!</h3>"
        renderWinner(winners[i]);
        removeListener();
        return true;
      } else if(oCount == 3){
        document.getElementById("winner").innerHTML = "<h3>winner: o!<h3>";
        turnDisplay.innerHTML = "<h3>game over!</h3>"
        //y won
        renderWinner(winners[i]);
        removeListener();
        return true;
      }
  }//end out for loop
  return false; //ie no winner
}

var renderWinner = function(array){
  for(var i = 0; i<array.length; i++){
    var currentElement = document.getElementById(array[i]);
    currentElement.className += " winningCell";    
  }
}

var removeListener = function(){
  for(var i = 0; i< cells.length; i++) {
    cells[i].removeEventListener("click", tttClick);
  }
}

window.onload = function() {
  for(var i = 0; i< cells.length; i++) {
    cells[i].addEventListener("click", tttClick);
  }
}

