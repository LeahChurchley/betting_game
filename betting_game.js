$(function() {
  var player_money = 100;
  var $guessInput = $('#guess');
  var $betInput = $('#bet');
  var $money = $('#money');
  var $result = $('#result');
  

  $('#playButton').on('click', function() {
    if (player_money <= 0){ // FIXME: I can go below zero and people can bet more than they have! :(
      $result.text("Game over!");
      return;
    }

    var guess = parseInt($guessInput.val());
    var bet = parseInt($betInput.val());
    var computer_answer = Math.floor((Math.random()*10) + 1);

    if (guess == computer_answer){
      player_money += bet;
      $money.text(player_money);
      $result.text("You won" + bet);
    
    } else if (guess == ((computer_answer -1 ) || (computer_answer -1))){
      $money.text(player_money);
      $result.text("Nothing Happens!");
    
    } else {
      player_money -= bet;
      $money.text(player_money);
      $result.text("You lose" + bet);
    }

  });

});




 
