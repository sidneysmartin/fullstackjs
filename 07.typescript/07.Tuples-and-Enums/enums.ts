enum CardinalDirection {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
}

enum Seasons {
  Winter = "Winter",
  Spring = "Spring",
  Summer = "Summer",
  Fall = "Fall",
}

const currentCardinalDirection = CardinalDirection.North;
console.log(`The current cardinal direction is ${currentCardinalDirection}`);
// currentCardinalDirection = "Summer";// Error

const currentSeason = Seasons.Summer;
console.log(`My favorite season is ${currentSeason}`);

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
