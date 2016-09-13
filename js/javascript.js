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
  if (GAMESTATUS === true) {
    if (e.which === 37) {
        console.log('key left')
        $('#figure').animate({left: "-=125"}, 10)
        // document.getElementById("figure").style('left') = '10'
        // hero.x -= 10
        // DetectCollision()

    } else if (e.which === 39) {
        console.log('key right')
        $('#figure').animate({left: "+=125"}, 10)

        // hero.x += 10
        } else {
          // $('#figure').animate({bottom: "-=0"}, 5000)
          console.log("WRONG KEY! PRESS LEFT / RIGHT ONLY");
    }
    if(detectCollision() === true) {
      GAMESTATUS = false;
    }
    hero.x = $('#figure')[0].offsetLeft
    hero.y = $('#figure')[0].offsetTop

    console.log(hero.x, hero.y, 'hero coordinates');
  }
}

// var colliders_selector = "#figure";
// var obstacles_selector = ".obstacle1";
// var hits = $(colliders_selector).collision(obstacles_selector)
// console.log(hits);





setInterval(function() {generateObstacle1()}, 4000);
function generateObstacle1 () {
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


function detectCollision() {
  var ob1 = $(".obstacle1").position();
  var ob2 = $(".obstacle2").position();
  obstacle1 = {x1:ob1.left, y1:ob1.top, x2:ob1.left + 160, y2:ob1.top, x3:ob1.left, y3:ob1.top + 34, x4:ob1.left + 160, y4: ob1.top + 34}
  obstacle2 = {x1:ob2.left, y1:ob2.top, x2:ob2.left + 160, y2:ob2.top, x3:ob2.left, y3:ob2.top + 34, x4:ob2.left + 160, y4: ob2.top + 34}
  var blackOne = $("#figure").position();
  hero = {x:blackOne.left, y:blackOne.top, w:blackOne.left + 70, h:blackOne.top - 44}



  // console.log(obstacle1, obstacle2);

  // if (obstacle1.w >= hero.x && obstacle1.h >= blackOne.y);

}

setInterval(detectCollision, 100)


// $('.obstacle').animate({bottom: "+=1000"}, 5000)
//
// setInterval(move_up, 0.05)
//
// function move_up() {
//   $('.first').animate({ bottom: "+=10px" })
// }
