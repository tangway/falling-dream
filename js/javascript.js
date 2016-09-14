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
  x: 0,
  y: 600,
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
  // if (GAMESTATUS === true) {
    if (e.which === 37 && hero.x1 > 40) {
        console.log('key left')
        $('#figure').animate({left: "-=125"}, 10)
        console.log(hero.x1);
        // document.getElementById("figure").style('left') = '10'
        // hero.x -= 10
        // DetectCollision()

    } else if (e.which === 39 && hero.x1 < 283) {
        console.log('key right')
        $('#figure').animate({left: "+=125"}, 10)
        // console.log(hero.x1);
        // hero.x += 10
        } else {
          // $('#figure').animate({bottom: "-=0"}, 5000)
          console.log("WRONG KEY! PRESS LEFT / RIGHT ONLY");
    }
    // if(detectCollision() === true) {
    //   GAMESTATUS = false;
    // }
    // hero.x = $('#figure')[0].offsetLeft
    // hero.y = $('#figure')[0].offsetTop
    //
    // console.log(hero.x1, hero.y1, 'hero coordinates');
  }


function trackThings() {
  // console.log('x: ' + hero.x + '. y: ' + hero.y)
  var ob1 = $(".obstacle1").position();
  obstacle1 = {x1:ob1.left, y1:ob1.top}
  var ob2 = $(".obstacle2").position();
  obstacle2 = {x1:ob2.left, y1:ob2.top}
  var ob3 = $(".obstacle3").position();
  var obstacle3 = {x1:ob3.left, y1:ob3.top}
  // console.log('x1: ' + obstacle1.x1 + ' y1: ' + obstacle1.y1);
  var heroo = $("#figure").position();
  hero = {x1:heroo.left, y1:heroo.top};
  // console.log(hero);
}


var score = 50
var life = 3

function simpleCollisionDetection() {
  if (hero.x1 === obstacle1.x1 && hero.y1 > obstacle1.y1) {
    score -= 1
    console.log('score: ' + score);
  }
}


setInterval(trackThings, 100)
setInterval(simpleCollisionDetection, 100)

// var colliders_selector = "#figure";
// var obstacles_selector = ".obstacle1";
// var hits = $(colliders_selector).collision(obstacles_selector)
// console.log(hits);


// function generator() {
//   // check if .obstacle1 & 2 or 2 & 3 or 1& 3 is around
//   // if so, dont generate
//   // if not, generate 1
//   // if 0 found, generate 2
//   if  ($('div.').length >



setInterval(function() {generateObstacle1()}, 6000);
function generateObstacle1 () {
  $('.obstacle1').remove()
  $('#cloud-scroll').append('<div class="obstacle1"></div>')
  $('.obstacle1').animate({bottom: "+=600"}, Math.random()*10000)

}


setInterval(function() {generateObstacle2()}, 4000);
function generateObstacle2 () {
  $('#cloud-scroll').append('<div class="obstacle2"></div>')
  $('.obstacle2').animate({bottom: "+=600"}, Math.random()*10000)

}

setInterval(function() {generateObstacle3()}, 4000);
function generateObstacle3 () {
  $('#cloud-scroll').append('<div class="obstacle3"></div>')
  $('.obstacle3').animate({bottom: "+=600"}, Math.random()*10000)

}


// setInterval(function() {
//   $('#figure').animate({bottom: "+=60"}, 100)
//   // console.log("success");
// })

// $('.obstacle1').remove()


// function detectCollision() {

  // var ob2 = $(".obstacle2").position();


  // obstacle2 = {x1:ob2.left, y1:ob2.top, x2:ob2.left + 160, y2:ob2.top, x3:ob2.left, y3:ob2.top + 34, x4:ob2.left + 160, y4: ob2.top + 34}




  // console.log('ob1: ', obstacle1, 'ob2: ', obstacle2);

  // if (obstacle1.w >= hero.x && obstacle1.h >= blackOne.y);

// }
//
// setInterval(detectCollision, 100)


// $('.obstacle').animate({bottom: "+=1000"}, 5000)
//
// setInterval(move_up, 0.05)
//
// function move_up() {
//   $('.first').animate({ bottom: "+=10px" })
// }
