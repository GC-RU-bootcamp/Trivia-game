
var game = {
  time: 20,
  maxTime: 20,
  level: 0,
  list: data,
  barColor: "bg-primary",
  nextQuestion: function() {
    var c = game.list[game.level].choice;
    $("#question").text(game.list[game.level].question);
    
    for (i = 0; i < c.length; i++) {
      $("#c" + (i + 1)).text(game.list[game.level].choice[i]);
    }
    game.level++;
    if (game.level >= game.list.length) {
      game.level = 0;
    }
  }
};
//var initTime = 20;

//var time = 20;

var timer1 = window.setInterval(gameTimer, 1000);
game.nextQuestion();


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
  }

}
