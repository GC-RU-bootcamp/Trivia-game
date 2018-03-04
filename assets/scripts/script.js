
var game = {
  time: 10,
  maxTime: 10,
  level: -1,  //values 1-13
  list: data,
  barColor: "bg-primary",
  nextQuestion: function() {
    game.level++;
    if (game.level >= game.list.length) {
      game.level = 0;
    }
    var c = game.list[game.level].choice;
    $("#question").text(game.list[game.level].question);
    var ans, ansBox;
    for (i = 0; i < c.length; i++) {
      ans = $("#c" + (i + 1));
      ansBox = $("#cb" + (i + 1));
      ans.text(game.list[game.level].choice[i]);
      ansBox.removeClass("bg-danger bg-success bg-dark text-white text-dark");
      ansBox.addClass("bg-dark text-white");
    }
    game.setList(game.level+1);
  },
  
  setList: function(level){
    for (let index = 1; index <= 14; index++) {
       
      var li = $("#L"+index)
      li.removeClass();
      if (index < level){
        li.addClass("level-list-done text-center");
      } else if (index === level){
        li.addClass("level-list-selected text-center");
      } else {
        li.addClass("level-list text-center");
      }
    }
  },

  initAnswers: function(){
    var ans;
    for (let index = 1; index <= 4; index++) {
      ans = $("#c"+index)
      ans.removeClass("bg-danger bg-success bg-dark text-white text-dark");
      ans.addClass("bg-dark text-white");
    }
  }
};
//var initTime = 20;

//var time = 20;

$(".answer").click(function() {
  var val = parseInt($(this).attr("value"));
  var ans = game.list[game.level].answer;

  if ( ans !== val) {
    $(this).removeClass("bg-danger bg-success bg-dark text-white text-dark");
    $(this).addClass("bg-danger text-white");
  } else {
    $(this).removeClass("bg-danger bg-success bg-dark text-white text-dark");
    $(this).addClass("bg-success text-white");
  }
  
});

var timer1 = window.setInterval(gameTimer, 1000);
game.nextQuestion();
// game.setList(game.level);

$("#test").on("click", function(e) {
  game.nextQuestion();
});



function gameTimer() {
  var p = Math.round(game.time / game.maxTime * 100);

  var tb = $("#time-bar");
  //   tb.attr("aria-valuenow", p);
  // tb.attr("style", "height: 40px; "+"width: " + p + "%");
  tb.attr("style", "width: " + p + "%");
  tb.html("<h4>" + game.time + "s</h4> ");
  console.log(p);
  //   tb.removeClass("bg-info bg-success bg-warning bg-danger");
  // switch (p) {
  //   case 100:
  //   case 99:
  //   case 98:
  //   case 97:
  //   case 96:
  //   case 95:
  if (p < 15 && game.barColor != "bg-danger") {
    tb.removeClass("bg-info bg-success bg-warning bg-danger bg-primary");
    tb.addClass("bg-danger");
    game.barColor = "bg-danger"
  } else if (p < 38 && p> 15  && game.barColor != "bg-warning") {
    tb.removeClass("bg-info bg-success bg-warning bg-danger bg-primary");
    tb.addClass("bg-warning");
    game.barColor = "bg-warning"
  } else if (p > 38 && game.barColor != "bg-primary") {
    tb.removeClass("bg-info bg-success bg-warning bg-danger bg-primary");
    tb.addClass("bg-primary");
    game.barColor = "bg-primary";
  }
  //     break;
  //   case 29:
  //   case 30:
  //     tb.removeClass("bg-info bg-success bg-warning bg-danger, bg-primary");
  //     tb.addClass("bg-warning ");
  //     break;
  //   case 10:
  //   case 9:
  //     tb.removeClass("bg-info bg-success bg-warning bg-danger, bg-primary");
  //     tb.addClass("bg-danger");
  //     break;
  //   default:
  //     break;
  // }
  game.time--;
  if (game.time === -1) {
    game.time = game.maxTime;
    game.nextQuestion();
    // setList(game.level);

  }

}
