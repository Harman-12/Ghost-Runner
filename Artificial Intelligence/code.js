var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["16112ef4-68a5-4857-bb7f-8bc264938355","f21027c5-a89e-4eb8-9e77-10005d4e8f5b","987c00c7-0f00-44bf-ad5d-b2d572605f17","64dccbd7-1f5f-4dd3-98b1-a5a97c847927","10c71840-bc27-4974-a392-53479c86b2db","5f5d40a1-e2a8-4302-aaa8-0d76dedf2faf","40ba5269-3c35-4623-8623-f920d36609bd","a84a1e3c-1848-4758-a306-7e2847edae1b","9b5ecb09-d2ad-486a-bb42-5ecc664dac11","7d6fd7ed-e88e-4349-8920-5ab76e13e907","62f4fbbc-e475-41bf-9f1d-83b3d24c139e"],"propsByKey":{"16112ef4-68a5-4857-bb7f-8bc264938355":{"name":"ground","sourceUrl":"assets/api/v1/animation-library/GyaNufHvKnwVy7HYbhkJhP9xXn2IGwfF/category_environment/ground_stone_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"GyaNufHvKnwVy7HYbhkJhP9xXn2IGwfF","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/GyaNufHvKnwVy7HYbhkJhP9xXn2IGwfF/category_environment/ground_stone_broken.png"},"f21027c5-a89e-4eb8-9e77-10005d4e8f5b":{"name":"sci_fi_1","sourceUrl":"assets/api/v1/animation-library/AkZ46QubAbBWZCmJO7D7hW3xCENr_80h/category_backgrounds/background_scifi.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"AkZ46QubAbBWZCmJO7D7hW3xCENr_80h","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/AkZ46QubAbBWZCmJO7D7hW3xCENr_80h/category_backgrounds/background_scifi.png"},"987c00c7-0f00-44bf-ad5d-b2d572605f17":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/04L4sdTODkNZF1OHf4qO_I.Al3QP43wA/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"04L4sdTODkNZF1OHf4qO_I.Al3QP43wA","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/04L4sdTODkNZF1OHf4qO_I.Al3QP43wA/category_backgrounds/city.png"},"64dccbd7-1f5f-4dd3-98b1-a5a97c847927":{"name":"winter_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":4,"looping":true,"frameDelay":45,"version":"AR_f25IT8DNLe3rpwTUdXeHwyp1ZkMSO","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/64dccbd7-1f5f-4dd3-98b1-a5a97c847927.png"},"10c71840-bc27-4974-a392-53479c86b2db":{"name":"continuous_grass_1","sourceUrl":"assets/api/v1/animation-library/UieRK0NBKD3xVHtSJxcUTAuhzLM1D_Hq/category_backgrounds/continuous_grass.png","frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"UieRK0NBKD3xVHtSJxcUTAuhzLM1D_Hq","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/api/v1/animation-library/UieRK0NBKD3xVHtSJxcUTAuhzLM1D_Hq/category_backgrounds/continuous_grass.png"},"5f5d40a1-e2a8-4302-aaa8-0d76dedf2faf":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/xQipuvePUXSq06jZsTlobJR8.Q7ZvgTC/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"xQipuvePUXSq06jZsTlobJR8.Q7ZvgTC","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/xQipuvePUXSq06jZsTlobJR8.Q7ZvgTC/category_backgrounds/background_cave.png"},"40ba5269-3c35-4623-8623-f920d36609bd":{"name":"underwater_1","sourceUrl":"assets/api/v1/animation-library/Uc3U0ENCf9gcYmAADOJ9wD9KMfxXbbic/category_backgrounds/background_underwater.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Uc3U0ENCf9gcYmAADOJ9wD9KMfxXbbic","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/Uc3U0ENCf9gcYmAADOJ9wD9KMfxXbbic/category_backgrounds/background_underwater.png"},"a84a1e3c-1848-4758-a306-7e2847edae1b":{"name":"alienGreen_walk_1","sourceUrl":"assets/api/v1/animation-library/2QmbIHREjj_kMAn76wyxzKNXZT9dTHUw/category_characters/alienGreen_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"2QmbIHREjj_kMAn76wyxzKNXZT9dTHUw","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/2QmbIHREjj_kMAn76wyxzKNXZT9dTHUw/category_characters/alienGreen_walk.png"},"9b5ecb09-d2ad-486a-bb42-5ecc664dac11":{"name":"alienGreen_badge_1","sourceUrl":"assets/api/v1/animation-library/qS.WwmxGU.eNgUN0CjuAI1vIsxalTi9x/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"qS.WwmxGU.eNgUN0CjuAI1vIsxalTi9x","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/qS.WwmxGU.eNgUN0CjuAI1vIsxalTi9x/category_characters/alienGreen_badge.png"},"7d6fd7ed-e88e-4349-8920-5ab76e13e907":{"name":"ghost_standing_1","sourceUrl":"assets/api/v1/animation-library/Uv9ISNABQXLedEK4yvmqYohWphqG.0e5/category_characters/ghost_standing.png","frameSize":{"x":72,"y":158},"frameCount":7,"looping":true,"frameDelay":2,"version":"Uv9ISNABQXLedEK4yvmqYohWphqG.0e5","loadedFromSource":true,"saved":true,"sourceSize":{"x":504,"y":158},"rootRelativePath":"assets/api/v1/animation-library/Uv9ISNABQXLedEK4yvmqYohWphqG.0e5/category_characters/ghost_standing.png"},"62f4fbbc-e475-41bf-9f1d-83b3d24c139e":{"name":"textGameOver_1","sourceUrl":null,"frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y8_uJ8zOMLsDHPxwngt83Fj466gGidP3","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/62f4fbbc-e475-41bf-9f1d-83b3d24c139e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var play = 1;
var end = 0;
var gameState = play;

playSound("assets/category_loops/pulsating_discovery_loop1.mp3",false);

var back = createSprite(200,200,400,400);
back.setAnimation("sci_fi_1");

var ground=createSprite(200,400,400,10);
ground.setAnimation("ground");
ground.scale=2.0;
ground.x=ground.width/2;

var player = createSprite(50, 280,20,50);
player.setAnimation("alienGreen_walk_1");
player.scale=0.5;
player.setCollider("circle",0,0,40);

var powerGroup=createGroup();
var obstacleGroup=createGroup();

var count=0;

function draw() {
  background("white");
  
  player.collide(ground);
   
    if(gameState === play){
      ground.velocityX=-7;
      count = Math.round(World.frameCount/20);
       if(ground.x<35){
      ground.x = ground.width/2;
    } 
    player.velocityY=player.velocityY+0.8;
    
    if(keyDown("space")){
        player.velocityY =-10;
       }
       
   if(player.isTouching(powerGroup)){
     powerGroup.destroyEach();
     playSound("assets/category_collect/retro_game_health_pickup_1.mp3");
     count = count+5;
     }
     if(player.isTouching(obstacleGroup)){
       gameState = end;
       
     }
   powerup();
   obstacle();
    }
     else if(gameState === end){
       fill("Blue");
       var over =createSprite(200,200,50,20);
       over.setAnimation("textGameOver_1");
       stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
       player.destroy();
      ground.velocityX=0;
      powerGroup.setVisibleEach(0);
     }
     
    createEdgeSprites();
    player.bounceOff(topEdge);
    player.bounceOff(rightEdge);
    player.bounceOff(leftEdge);
    player.bounceOff(bottomEdge);
      
  drawSprites();
  
  fill("Blue");
  textSize(20);
  text("SCORE-"+count,290,35);
}

function powerup(){ 
  if(World.frameCount%50 === 0){
   var power1=createSprite(202,300,40,10);
    power1.setCollider("circle");
    power1.scale=0.5;
    power1.velocityX=-3;
    power1.setAnimation("alienGreen_badge_1");
    power1.y=randomNumber(100,200);
    power1.lifetime=134;
    powerGroup.add(power1);
     }
}

function obstacle(){
    if(World.frameCount%120===0){
    var obstacle1 =createSprite(400,280,10,10);
    obstacle1.setAnimation("ghost_standing_1");
    obstacle1.scale=0.5;
    obstacle1.collide(ground);
    obstacle1.velocityX=-6;
    obstacleGroup.add(obstacle1);
    obstacle1.lifetime=70;
    }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
