let getRandom = function(size){
    return Math.floor(Math.random()) * size; 
};

let getDistance = function(event, target){
        let diffX = event.offsetX - target.x;
        let diffY = event.offsetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY * diffY))
    };
    
let getHint = function(distance){
    if (distance < 10){
        return 'Boiling hot!';
    } else if (distance < 20){
        return 'Really hot!';
    } else if (distance < 40){
        return 'Hot!';
    } else if (distance < 80){
        return 'Warm!'; 
    } else if (distance < 160){
        return 'Cold!';
    } else if (distance < 320){
        return 'Really Cold!';
    }  else {
        return 'Freezing!';
    }
};   

let width = 800;
let height = 800;
let clicks = 0;
let target = {
    x: getRandom(width),
    y: getRandom(length)
};
  
  $("#map").click(function (event) {
    clicks++;

    
    let distance = getDistance(event, target);
  
    let distanceHint = getHint(distance);

    $("#distance").text(distanceHint);

    
    if (distance < 8) {
      alert("Found the treasure in " + clicks + " clicks!");
    }
  });