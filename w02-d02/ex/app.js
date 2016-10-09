var cells = document.getElementsByClassName('cell');
var turn = 0;
var turnDisplay = document.getElementById('turn');

var tttClick = function(){
  //not working with the &#8203 character
  if(this.getAttribute("name") == "open"){
    if(turn == 0){
      this.innerHTML = "x";
      this.className += " clicked";
      turn = 1;
      turnDisplay.innerHTML = "player: o";

    } else if(turn == 1){
      this.innerHTML = "o";
      this.className += " clicked";
      turn = 0;
      turnDisplay.innerHTML = "player x"
    }  
    this.setAttribute("name", "taken");  
  }

};

window.onload = function() {
  for(var i = 0; i< cells.length; i++) {
    cells[i].addEventListener("click", tttClick);
  }
}

