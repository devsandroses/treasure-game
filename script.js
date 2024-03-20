    let getRandomNumber = function (size) {
        return Math.floor(Math.random() * size);
      };
  
    let getDistance = function (event, target) {
        var diffX = event.offsetX - target.x;
        var diffY = event.offsetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
      };
  
    let getDistanceHint = function (distance) {
        if (distance < 10) {
          return "Boiling hot!";
        } else if (distance < 20) {
          return "Really hot";
        } else if (distance < 40) {
          return "Hot";
        } else if (distance < 80) {
          return "Warm";
        } else if (distance < 160) {
          return "Cold";
        } else if (distance < 320) {
          return "Really cold";
        } else if (distance < 640) {
          return "Really REALLY cold - BRRRRRR";
        } else {
          return "Freezing!";
        }
      };
  
    let width = 800;
    let height = 800;
    let clicks = 0;
    let clickLimit = 20;
  
    let target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height)
      };
  
    $("#map").click(function (event) {
        clicks++;
  
        if (clicks > clickLimit) {
          alert("GAME OVER");
          return;
        }
  
        
    let distance = getDistance(event, target);
        
    let distanceHint = getDistanceHint(distance);
  
        
    $("#distance").text(distanceHint);
  
    $("#clicks-remaining").text(clickLimit - clicks);
  
    if (distance < 8) {
          alert("Found the treasure in " + clicks + " clicks!");
        }
      });