$(document).ready(function() {

  
  let game={};
  let i=0;
  
  game.reset = function() {
    this.init();
    this.strict=false;
    this.light;
  }
 
  game.reset = function() {
    this.sequence=[];
    this.index = 0;
  }
   
 function gameStart() {
   //resetTimers();
   $(".display-char").text("--").removeClass("led-off-char");
   blinkMessage("hi", 2);
   addStep();
  }
  
 function blinkMessage(msg, times) {
   
  }
  
  function playLightBtn(num) {
     game.playNum=$("#"+num).addClass("lighter");    
   }
  
  function stopLightBtn() {
    game.playNum.removeClass("lighter");
  }

  function playSequence() {
    
    playLightBtn(game.sequence[i]);
    setTimeout(stopLightBtn,1000);
    i++;
  }
  
  function resetTimer() {
    clearTimeout(game.sequTime);
  }

  function addStep() { 
    game.sequence.push(Math.floor((Math.random() * 4) + 1));
    console.log(game.sequence);
    game.sequTime=setTimeout(playSequence, 500);
  }
  
  function playerChoose(num) {
    let pushNum=num.attr("id");
    // if (pushNum == game.sequence[game.index]) {
    //   playLightBtn(pushNum);
    //   game.index++;
    // }
    addStep();
  }
  
  $(".btn").click(function() {
    playerChoose($(this));
  })
  
  $(".switch-box").click(function() {
    $("#sw-pwr").toggleClass("sw-on");
    if($("#sw-pwr").hasClass("sw-on")==false) {
      game.reset();
      $(".display-char").text("--");
      $(".display-char").addClass("led-off-char");
      $("#pwr-led").removeClass("led-on");
      $(".btn").removeClass("unclickable").addClass("clickable");
    } else {
      $(".display-char").removeClass("led-off-char");
      $("#start").click(gameStart);
      $("#pwr-led").toggleClass("led-on");
      $(".btn").removeClass("unclickable").addClass("clickable");
    }
  });
  
  game.reset();
  
});