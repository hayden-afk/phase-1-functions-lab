
function distanceFromHqInBlocks(start) {
    if (start > 42) {
        let distanceInBlocks = start - 42;
        return distanceInBlocks;
    }
    else if (start < 42) {
        let distanceInBlocks = 42 - start;
        return distanceInBlocks;
    }

}

function distanceFromHqInFeet(blocks) {
    let feet = distanceFromHqInBlocks(blocks)
    return feet * 264;


  }

  function distanceTravelledInFeet(pointA, pointB) {
      if (pointA < pointB)
      return (pointB - pointA) * 264
      else
      return (pointA - pointB) * 264;

  }

  function calculatesFarePrice(start, destination) {
      let dist = distanceTravelledInFeet(start, destination);
      switch(true) {
          case dist > 2500:
              return "cannot travel that far";
          case dist > 2000:
              return 25;
              case dist > 400:
                  return (dist - 400) * 0.02;
                  default:
                      return 0;
      }

  }
