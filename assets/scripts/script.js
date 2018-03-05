var x = "";
var xArray = [];
// document.getElementById("playAudio");
function playAudio(a) {
  a.play();
  // $("#playAudio").play();
}

function pauseAudio() {
  while (xArray.length > 0) {
    var a = xArray.pop();
    a.pause();
    // x.stop();  this does not work
    a.currentTime = 0;
  }
  // $("#playAudio").pause();
}

function setAudio(fileName) {
  // $("#srcAudio").attr("src", "./media/" + fileName);
  x = document.getElementById(fileName);
  xArray.push(x);
  return x;
}

function startAudio(fileName) {
  var a = setAudio(fileName);
  playAudio(a);
}

// Constructor function for nextState objects
function NextState(nextState, delay) {
  (this.nextState = nextState), (this.delay = delay);
}

var game = {
  time: 20,
  maxTime: 20,
  beets: 2,
  level: -1, //values 1-13
  playerName: "",
  friendName: "",
  state: "wait", // what am doing now
  nextStateQ: [], // what am doing next via next state objects
  bank: "0",
  list: data,
  userPick: 1,
  barColor: "bg-primary",
  initGame: function() {
    game.time = game.maxTime;
    game.initAnswers();
    game.playerName = game.friendName = "";
    game.level = -1;
    game.barColor = "";
    game.state = "wait";
    game.addState("showName", 4);
    // set random game here
    // list= data;
  },
  addState: function(state, delay) {
    var ns = new NextState(state, delay);
    game.nextStateQ.push(ns);
    console.log("ADD current  state: ", game.state);
    console.log(game.nextStateQ);
  },
  nextQuestion: function() {
    // pauseAudio();
    // playAudio();
    game.time = game.maxTime;
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
    game.setList(game.level + 1);
    $("#jumbo-banner").text(game.playerName + "'s bank ( " + game.bank + " )");
  },

  setList: function(level) {
    for (let index = 1; index <= 14; index++) {
      var li = $("#L" + index);
      li.removeClass();
      if (index < level) {
        li.addClass("level-list-done text-center");
      } else if (index === level) {
        li.addClass("level-list-selected text-center");
      } else {
        li.addClass("level-list text-center");
      }
      if (level <= 1) {
        game.bank = 0;
      } else if (index === level - 1) {
        game.bank = li.text();
      }
    }
  },
  initAnswers: function() {
    var ans;
    for (let index = 1; index <= 4; index++) {
      ans = $("#c" + index);
      txt = "";
      switch (index) {
        case 1:
          txt = "A";
          break;
        case 2:
          txt = "B";
          break;
        case 3:
          txt = "C";
          break;
        case 4:
          txt = "D";
          break;
      }
      ans.removeClass(
        "bg-danger bg-warning bg-success bg-dark text-white text-dark"
      );
      ans.addClass("bg-dark text-white");
      ans.text("");
    }
    $("#question").text("");
  }
};
//var initTime = 20;

//var time = 20;

$(".answer").click(function() {
  // var val = parseInt($(this).attr("value"));
  var ans = game.list[game.level].answer;
  $(this).removeClass(
    "bg-danger bg-warning bg-success bg-dark text-white text-dark"
  );
  $(this).addClass("bg-warning text-dark");
  game.userPick = parseInt($(this).attr("value"));
  game.addState("showFinalDialog", 1);

  // if (ans !== val) {
  //   $(this).removeClass("bg-danger bg-success bg-dark text-white text-dark");
  //   $(this).addClass("bg-danger text-white");
  // } else {
  //   $(this).removeClass("bg-danger bg-success bg-dark text-white text-dark");
  //   $(this).addClass("bg-success text-white");
  // }
  // return ans !== val
});

function showChoice() {
  var ans = game.list[game.level].answer;
  var pick = $("#cb" + game.userPick);
  var retval = false;
  if (ans === game.userPick) {
    pick.removeClass(
      "bg-danger  bg-warning bg-success bg-dark text-white text-dark"
    );
    pick.addClass("bg-success text-white");
    $("#jumbo-banner").text(game.playerName + "'s bank ( " + game.bank + " )");
    retval = true;
  } else {
    pick.removeClass(
      "bg-danger bg-warning bg-success bg-dark text-white text-dark"
    );
    pick.addClass("bg-danger text-white");
    retval = false;
  }
  return retval; //did pick correct answer?
}

function clearChoice() {
  var pick = $("#cb" + game.userPick);
  var retval = true;

  pick.removeClass(
    "bg-danger bg-warning bg-success bg-dark text-white text-dark"
  );
  pick.addClass("bg-dark text-white");

  return retval; //did pick correct answer?
}

var timer1 = window.setInterval(stateMachine, 500);
game.initGame();
//game.nextQuestion();
// game.setList(game.level);

$("#test").on("click", function(e) {
  game.nextQuestion();
});

$("#L14").on("click", function(e) {
  game.nextQuestion();
});

function stateMachine() {
  console.log(
    "begin stateMachine - state: " + game.state + "  game.level: " + game.level
  );
  if (game.nextStateQ.length > 0) {
    console.log(
      "begin stateMachine - NEXT state: " +
        game.nextStateQ[0].nextState +
        " Delay: " +
        game.nextStateQ[0].delay
    );
    console.log(game.nextStateQ);
  } else {
    console.log("empty queue");
  }

  if (game.nextStateQ.length > 0) {
    if (game.nextStateQ[0].delay > 0) {
      game.nextStateQ[0].delay--;
    } else {
      game.state = game.nextStateQ[0].nextState;
      game.nextStateQ.shift();
    }
  }
  var val = -1;
  switch (game.state) {
    case "showName":
      showNameDialog();
      game.state = "wait";
      break;
    case "1000000-music.mp3":
    case "100-1000-music.mp3":
    case "125000-250000-music.mp3":
    case "2000-32000-music.mp3":
    case "5000000-music.mp3":
    case "64000-music.mp3":
    case "commerical-break.mp3":
    case "correct-answer.mp3":
    case "fastest-finger.mp3":
    case "final-answer.mp3":
    case "lets-play.mp3":
    case "Main_Theme3.mp3":
    case "main-theme.mp3":
    case "Main-Theme2.mp3":
    case "Main-Theme4-fast.mp3":
    case "Main-Theme5-think.mp3":
    case "Main-Theme6-horns.mp3":
    case "phone-a-friend.mp3":
    case "wrong-answer.mp3":
      startAudio(game.state);
      break;
    case "pause-audio":
      pauseAudio();
      break;
    case "new-question":
      game.nextQuestion();
      break;
    case "play":
      val = gameTimer();
      if (val < 0) {
        game.addState("pause-audio", 0);
        game.addState("wrong-answer.mp3", 0);
        // game.addState("pause-audio", 6);
        game.addState("times-up", 2);
        //game.addState("pause-audio", 6);
        // alert("game over");
      }
      break;
    case "times-up":
      showGameOverDialog("Your game is over", "Time is up");
      game.state = "wait";
      //pauseAudio();
      break;
    case "wrong-answer":
      showGameOverDialog("Your game is over", "That is the 'Wrong Answer'");

      game.state = "wait";
      //pauseAudio();
      break;
    case "winner":
      showGameOverDialog("Congratulations", "You are the big WINNER'");
      game.state = "wait";
      //pauseAudio();
      break;
    case "showFinalDialog":
      showFinalDialog();
      game.state = "wait";
      break;
    case "showChoice":
      var res = showChoice();
      if (res === true) {
        game.addState("pause-audio", 0);
        game.addState("correct-answer.mp3", 0);
        if (game.level >= 12) {
          game.addState("1000000-music.mp3", 4);
        } else if (game.level < 12) {
          game.addState("100-1000-music.mp3", 4);
        }
        if (game.level <= 12) {
          game.addState("new-question", 0);
          game.addState("play", 0);
        } else {
          game.addState("Main-Theme6-horns.mp3", 0);
          game.addState("winner", 0);
        }
      } else {
        game.addState("wrong-answer.mp3", 0);
        game.addState("wrong-answer", 2);
        game.addState("clearQ", 0);
       // game.addState("pause-audio", 6);
      }
      break;
    case "clearChoice":
      clearChoice();
      game.addState("100-1000-music.mp3", 0);
      game.addState("play", 0);
    case "wait":
      break;
    default:
      break;
  }
  console.log("END stateMachine - state: " + game.state);
  if (game.nextStateQ.length > 0) {
    console.log(
      "begin stateMachine - NEXT state: " +
        game.nextStateQ[0].nextState +
        " Delay: " +
        game.nextStateQ[0].delay
    );
    console.log(game.nextStateQ);
  }
}

function gameTimer() {
  var p = Math.round(game.time / game.maxTime * 100);

  var tb = $("#time-bar");
  //   tb.attr("aria-valuenow", p);
  // tb.attr("style", "height: 40px; "+"width: " + p + "%");
  tb.attr("style", "width: " + p + "%");
  tb.html("<h4>" + Math.round(game.time / game.beets) + "</h4> ");
  console.log(p);

  if (p < 15 && game.barColor != "bg-danger") {
    tb.removeClass("bg-info bg-success bg-warning bg-danger bg-primary");
    tb.addClass("bg-danger");
    game.barColor = "bg-danger";
  } else if (p < 38 && p > 15 && game.barColor != "bg-warning") {
    tb.removeClass("bg-info bg-success bg-warning bg-danger bg-primary");
    tb.addClass("bg-warning");
    game.barColor = "bg-warning";
  } else if (p > 38 && game.barColor != "bg-primary") {
    tb.removeClass("bg-info bg-success bg-warning bg-danger bg-primary");
    tb.addClass("bg-primary");
    game.barColor = "bg-primary";
  }

  game.time--;
  // if (game.time === -1) {
  //   game.time = game.maxTime;
  //   game.nextQuestion();
  // setList(game.level);

  // }
  return game.time;
}

function showDialog(titleMsg, bodyMsg) {
  $("#modal-title").text(titleMsg);
  $("#modal-body").text(bodyMsg);

  $("#myModal").modal({
    backdrop: "static",
    keyboard: false
    // to prevent closing with Esc button (if you want this too)
  });

  this.dialogOpen = true;
  // $("#myModal").on("shown.bs.modal", function() {
  // $("#myInput").focus();
  // });
} //showDialog

function showNameDialog() {
  $("#nameModal").modal({
    backdrop: "static",
    keyboard: false
    // to prevent closing with Esc button (if you want this too)
  });

  this.dialogOpen = true;
} //showDialog

$("#intro-dialog").click(function() {
  showNameDialog();
});

$("#modal-name-btn").click(function() {
  game.playerName = $("#name-input").val();
  game.friendName = $("#friend-input").val();
  $("#name-input").val("");
  $("#friend-input").val("");
  $("#jumbo-banner").text(game.playerName + "'s bank ( " + game.bank + " )");
  game.addState("pause-audio", 0);
  game.addState("lets-play.mp3", 0);
  // game.addState("pause-audio", 8);
  game.addState("100-1000-music.mp3", 0);
  game.addState("new-question", 0);
  game.addState("play", 0);
});

function showFinalDialog() {
  $("#finalModal").modal({
    backdrop: "static",
    keyboard: false
    // to prevent closing with Esc button (if you want this too)
  });

  this.dialogOpen = true;
} //showDialog

$(".final-btn-yes").click(function() {
  game.addState("showChoice", 10);
});

$(".final-btn-no").click(function() {
  game.addState("clearChoice", 4);
});

function showGameOverDialog(title, body) {
  $("#game-over-title").text(title);
  $("#game-over-body").text(body);
  $("#game-over-modal").modal({
    backdrop: "static",
    keyboard: false
    // to prevent closing with Esc button (if you want this too)
  });

  this.dialogOpen = true;
} //showDialog

$("#next-game-btn").click(function() {
  game.initGame();
});
