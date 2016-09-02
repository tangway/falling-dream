var GAMESTATUS = true;

var hero = {
  name: 'main hero',
  x: 190,
  y: 154,
  w: 34,
  h: 75,
}


var obstacle1 = {
  name: 'obstacle 1',
  x: 13,
  y: 640,
  w: 84,
  h: 34,
}

var obstacle2 = {
  name: 'obstacle 2',
  x: 246,
  y: 609,
  w: 84,
  h: 34,
}


$(document).click(function() {
  console.log('mouse x: ' + event.screenX);
  console.log('mouse y: ' + event.screenY);
})

$(document).keydown(move);
function move(e) {
  if (GAMESTATUS === true) {
    if (e.which === 37) {
        console.log('key left')
        $('#figure').animate({left: "-=15"}, 100)
        // document.getElementById("figure").style('left') = '10'
        // hero.x -= 10
        // DetectCollision()

    } else if (e.which === 39) {
        console.log('key right')
        $('#figure').animate({left: "+=15"}, 100)

        // hero.x += 10
        } else {
          // $('#figure').animate({bottom: "-=0"}, 5000)
          console.log("WRONG KEY! PRESS LEFT / RIGHT ONLY");
    }
    if(detectCollision() === true) {
      GAMESTATUS = false;
    }
  }
}

setInterval(function() {generateObstacle1()}, Math.random()*10000);

function generateObstacle1 () {
  $('#cloud-scroll').append('<div class="obstacle1"></div>')
  $('.obstacle1').animate({bottom: "+=1000"}, Math.random()*10000)

  // obstacle1.x = 120
}

setInterval(function() {generateObstacle2()}, Math.random()*5000);

function generateObstacle2 () {
  $('#cloud-scroll').append('<div class="obstacle2"></div>')
  $('.obstacle2').animate({bottom: "+=1000"}, Math.random()*10000)

}

function detectCollision() {
  var ob1 = $(".obstacle1").position();
  obstacle1 = {x:ob1.left, y:ob1.top, w:ob1.left + 160, h:ob1.top + 34}
  var ob2 = $(".obstacle2").position();
  obstacle2 = {x:ob2.left, y:ob2.top, w:ob2.left + 160, h:ob2.top + 34}
  var blackOne = $("#figure").position();
  hero = {x:blackOne.left, y:blackOne.top, w:blackOne.left + 70, h:blackOne.top - 44}

  if (obstacle1.w >= hero.x && obstacle1.h >= blackOne.y)


  console.log(obstacle1);
  // console.log(obstacle2);
  // console.log(hero);

}


// $('.obstacle').animate({bottom: "+=1000"}, 5000)

setInterval(move_up, 0.05)

function move_up (){
  $('.first').animate({ bottom: "+=10px" })
}
