// https://codepen.io/danwilson/pen/wWZWKW
function loadGame() {

    var button = document.getElementsByTagName("button")[0];

    button.textContent = "Start Game";
    button.addEventListener("click", function beginGame(e) {
    main.textContent = ""; // remove the start button
    playGame();
  });
}

polyfillKey();

function playGame(replay) {
  var LETTERS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var animations = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: []
  };
  var gameOn = true;
  var timeOffset = 2000; //interval between letters starting, will be faster over time
  var main = document.getElementById("main");
  var scoreElement = document.getElementById("score");
  var lifeElement = document.getElementById("misses");
  var lives = 5;
  var score = 0;
  var rate = 1;
  var RATE_INTERVAL = 0.05; //playbackRate will increase by .05 for each letter... so after 20 letters, the rate of falling will be 2x what it was at the start

  function create() {
    var idx = Math.floor(Math.random() * LETTERS.length); // retrive a random index from the word array
    var x = Math.random() * 80 + "vw"; // value that expands from the entire width of the screen with a vw value 
    var container = document.createElement("div");
    var letter = document.createElement("span");
    var letterText = document.createElement("p");
    letterText.textContent = LETTERS[idx];
    letter.appendChild(letterText);
    container.appendChild(letter);
    main.appendChild(container);


    var animation = container.animate( //div animation now has an animate interface
      [                   
        { transform: "translate3d(" + x + ",-2.5vh , 0)" }, //x y and z 
        { transform: "translate3d(" + x + ",82.5vh, 0)" } // points at which it is going to stop
      ],
      {
        duration: 2000,
        easing: "linear",
        fill: "both"
      }
    );

    animations[LETTERS[idx]].splice(0, 0, {
      animation: animation,
      element: container
    });


    //If an animation finishes, we will consider that as a miss, so we will remove it from the active animations array and increment our miss count
    animation.onfinish = function (e) {
      var target = container;
      var char = target.textContent;

      animations[char].pop();
      handleMisses();
    };
  }



  //When a miss is registered, check if we have reached the max number of misses
  function handleMisses() {
    lives--;
    lifeElement.textContent = "Lives " + lives;

    if (lives == 0){
      gameOver();
    }

  }


  //End game and show screen
  function gameOver() {
    gameOn = false;
 
    document.getElementById("game-over").classList.add("endScreen");
  }


  //On key press, see if it matches an active animating (falling) letter. If so, pop it from active array, pause it (to keep it from triggering "finish" logic), and add an animation on inner element with random 3d rotations that look like the letter is being kicked away to the distance. Also update score.
  function onPress(e) {
    var char = e.key;
    if (char.length === 1) {
      char = char.toLowerCase();
      if (animations[char] && animations[char].length) {
        var popped = animations[char].pop();
        popped.animation.pause();
        var target = popped.element.querySelector("p");
        target.animate(
          [
            {
              opacity: 1
            },
            {
              opacity: 0
            }
          ],
          {
            easing: "ease-out",
            fill: "both"
          }
        );
        addScore();
      }
    }
  }

  function addScore() {
    score++;
    scoreElement.textContent = "Score "+ score;
  }

  document.body.addEventListener("keypress", onPress);

  //start the letters falling... create the element+animation, and setup timeout for next letter to start
  function setupNextLetter() {
    if (gameOn) {
      create();
      setTimeout(function () {
        setupNextLetter();
      }, timeOffset);
    }
  }
  setupNextLetter();
}


