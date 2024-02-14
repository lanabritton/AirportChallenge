import { assertEquals } from "../src/index.js"; 
import Airport from "../src/airport.js";
import Plane from "../src/plane.js"; 
import Weather from "../src/weather.js";

let testName = ``;
let input = ``;
let expectedOutput;
let actualOutput;
let result;

//TO TEST - node spec/airport.spec.js

/* Test1 - Airport has a max capacity of 10 planes.

User Story - As an air traffic controller, I want 
to prevent airplanes from landing when my airport is full.*/

testName = `Test 1 - Airport has a max capacity of 10 planes`;

// arrange
const maxCapacity1 = 10;
const airport1 = new Airport(maxCapacity1);
airport1.currentCapacity = maxCapacity1 - 1;

// act
const actualOutput1 = airport1.canLand();

// assert
result = assertEquals(actualOutput1, true);

console.log(testName);
console.log("========");
console.log(`Test passes: ${result}`);
console.log(`Able to land plane: ${actualOutput1}`);
console.log("========");

/* Test 2 - Ability of Airport to Allow Planes to Land

User Story - As an air traffic controller, I would like the ability to 
override the maximum capacity for the number of planes at the airport as needed. */

testName = "Test 2 - Allow planes to land";

// arrange - max cap, current cap
const maxCapacity2 = 12;
const airport2 = new Airport(maxCapacity2);
airport2.currentCapacity = 10;

//act - Use canLand 
const actualOutput2 = airport2.canLand();

// assert - this should be true
const expectedOutput2 = true;

// assert - compare the actual and expected outputs
result = assertEquals(actualOutput2, expectedOutput2);

// result 
console.log(testName);
console.log("========");
console.log(`Test passes: ${result}`);
console.log(`Airport allows plane to land: ${actualOutput2}`);
console.log("========");


/* Test 3 - Provide the current number of planes at the airport

User Story - // User Story 3 - As an Air Traffic Controller, 
I want to be able to get the current number of planes at the airport.*/

testName = `Test 3 - Get current number of planes at the airport`;

const maxCapacity3 = 12;
// new airport with 12
const airport3 = new Airport(maxCapacity3);
// set current capacity to 5
const currentCapacity3 = 5;
airport3.currentCapacity = currentCapacity3;

//get current capacity
const actualOutput3 = airport3.currentCapacity;
// assert - this should be 5
const expectedOutput3 = currentCapacity3;

// check if the current capacity matches

const result3 = assertEquals(actualOutput3, expectedOutput3);

console.log(testName);
console.log("========");
console.log(`Test passes: ${result3}`);
console.log(`Current number of planes at the airport: ${actualOutput3}`); 
console.log("========");


/* Test 4 - current number of planes at airport, after a plane has landed.

User Story - As an Air Traffic Controller, I want to be able to get the current 
number of planes at the airport and also know which planes have landed. */ 

let airport4 = new Airport(); 

let testName4 = `Test 4 - Get current number of planes at the airport and which plane has landed`;
const planeId = 123;

// arrange - set current capacity 
airport4.currentCapacity = 5;

// act - instruct plane to land 
airport4.instructPlaneToLand(planeId); 

// assert - this should add 1 to current 
const actualOutput4 = airport4.currentCapacity + 1;
const expectedOutput4 = 6; 

//result

const result4 = actualOutput4 === expectedOutput4; 
console.log(testName4);
console.log("========");
console.log(`Test passes: ${result4}`);
console.log(`Current number of planes at the airport: ${actualOutput4}`);
console.log(`Plane with ID ${planeId} has landed.`);
console.log("========");


/*Test 5 - Provide the current number of planes and their IDs at the airport.

User Story - As an Air Traffic Controller, I want to have visibility into the current 
planes at the airport and their respective IDs.*/


let testName5 = `Test 5 - Get current planes and their IDs at the airport`;

// arrange - set max capacity and create an new
const maxCapacity5 = 12;
const airport5 = new Airport(maxCapacity5);
const planeIds5 = [123, 456, 789]; // adding plane IDs

// act - instructing planes to land 
for (const planeId of planeIds5) {
  airport5.instructPlaneToLand(new Plane(planeId));
}
// assert -  current planes and their IDs
const actualOutput5 = airport5.getCurrentPlanes(); 
const expectedOutput5 = planeIds5;

const result5 = assertEquals(actualOutput5, expectedOutput5);

console.log(testName5);
console.log("========");
console.log(`Test passes: ${result5}`);
console.log(`Current planes and their IDs at the airport: ${actualOutput5}`);
console.log("========");

/* Test 6 - Ability to override the maximum capacity

As an Air Traffic Controller, I want to override the maximum capacity 
for the number of planes at the airport.*/

testName = `Test 6 - Ability to override the maximum capacity`;

// arrange - current capacity 10 and override  max to 12
const airport6 = new Airport(10);
airport6.maxCapacity = 12;

//  expect 12
const expectedOutput6 = 12;

// assert 
result = assertEquals(airport6.maxCapacity, expectedOutput6);

console.log(testName);
console.log("========");
console.log(`Test passes: ${result}`);
console.log(`New max capacity: ${airport6.maxCapacity}`);
console.log("========");

// Test 7 - Plane should not land if weather is stormy - this was AI Generated

testName = `Test 7 - Planes Cannot Land in Stormy Weather`;

const stormyWeather = new Weather();
stormyWeather.setStormy();

const actualOutput7 = stormyWeather.isStormyWeather();
const expectedOutput7 = true;

result = assertEquals(actualOutput7, expectedOutput7);

console.log("AI Generated tests");
console.log(testName);
console.log("========");
console.log(`Test passes: ${result}`);
if (actualOutput7) {
  console.log("Weather is stormy. Plane cannot land.");
} else {
  console.log("Weather is not stormy. Plane can land.");
}
console.log("========");



// Test 8 - remove  plane from the Airport

let testName8 = `Test 8 - Remove a Plane from the Airport`;

// arrange - create an airport with some planes
const maxCapacity8 = 12;
const airport8 = new Airport(maxCapacity8);
const planeIds8 = [222, 333, 444];

for (const planeId of planeIds8) {
  airport8.instructPlaneToLand(new Plane(planeId));
}

const planeToRemoveId = 333;

// act -
airport8.instructPlaneToDepart(planeToRemoveId);

// assert - check if plane is no longer in list
const currentPlanes = airport8.getCurrentPlanes();
const result8 = !currentPlanes.includes(planeToRemoveId);

console.log(testName8);
console.log("========");
console.log(`Test passes: ${result8}`);
console.log(`Total planes at the airport: ${currentPlanes.length}`);
console.log(`Current planes and their IDs at the airport: ${currentPlanes}`);
console.log("========");

// Test 9 - Plane Already at Airport Cannot Land Again

let testName9 = `Test 9 - Plane Already at Airport Cannot Land Again`;

// arrange - create an airport with a plane already landed
const maxCapacity9 = 12;
const airport9 = new Airport(maxCapacity9);
const planeId9 = 666;
//airport9.instructPlaneToLand(new Plane(planeId9)); - to make false 

// act - try to land the same plane again
const result9 = airport9.instructPlaneToLand/
//const expectedErrorMessage = `Plane ${planeId9} already at the airport. Cannot land again.`;

// ^^ take off the comments to make false 

console.log(testName9);
console.log("========");

// if the result is false (plane cannot land again)
if (!result9) {
  console.log(`Test passes: true`);
  // if true then = error 
} else {
  console.log(`Test passes: false`);
  console.log(`Error message: ${expectedErrorMessage}`);
}
console.log("========");

// Test 10 - plane to take off that is not at the airport 

let testName10 = `Test 10 - Instruct a Plane to Take Off That Is Not at the Airport`;

// arrange - create an airport with some planes
const maxCapacity10 = 12;
const airport10 = new Airport(maxCapacity10);
const planeIds10 = [111, 222, 333];

for (const planeId of planeIds10) {
  airport10.instructPlaneToLand(new Plane(planeId));
}
// if that isn't at the airport
const planeToTakeOffId = 444; 

// act - attempt to tell a plane to take off 
const result10 = airport10.instructPlaneToDepart(planeToTakeOffId); 

// assert - check if plane is not 
const currentPlanes10 = airport10.getCurrentPlanes();
const resultMessage10 = currentPlanes10.includes(planeToTakeOffId)
  ? `Plane ${planeToTakeOffId} is still at the airport.`
  : `Plane ${planeToTakeOffId} is not at the airport.`;

console.log(testName10);
console.log("========");
console.log(`Test passes: ${!result10}`);
console.log(resultMessage10);
console.log("========");

//test 11 - what happens when airport is full?? 

let testName11 = `Test 11 - Attempt to Land Plane When Airport Is Full`;

// arrange - airport with max Cap
const maxCapacity11 = 2;
const airport11 = new Airport(maxCapacity11);
const planeIds11 = [111, 222];
// instruct planes to land
for (const planeId of planeIds11) {
  airport11.instructPlaneToLand(new Plane(planeId));
}
// attempt to land different plane
const planeToLandId11 = 333; 

// act - tell plane 333 to land
const result11 = airport11.instructPlaneToLand(new Plane(planeToLandId11));

// assert - check if plane landed
const resultMessage11 = result11
  ? `Plane ${planeToLandId11} attempted to land but the airport was full.`
  : `Plane ${planeToLandId11} couldn't land due to the airport being full, as expected.`;

console.log(testName11);
console.log("========");
console.log(`Test passes: ${!result11}`);
console.log(resultMessage11);
console.log("========");



/*AI GENERATED TESTS - chat GPT wrote them in a way I did not understand and they did not
 work so I had to put a copy of all of mine in and ask them to follow suit..
 
 I found this harder work than coding as so many errors were coming up, so copied in what I did 
 and asked it to copy 
 
 Also, to get these I added in to CHATGPT my airport, plane src so it could be 
 tailored to what I already did to make it consistent -- it would not let
 me add anymore screenshots. */

console.log("========");
console.log("AI Generated tests");
console.log("========");

// AI GENERATED TEST 12 

let testName12 = `Test 12 - Plane Cannot Land in Stormy Weather`;

// arrange - airport and plane
const airport12 = new Airport(10);
const plane12 = new Plane();
const weather12 = new Weather();
weather12.isStormyWeather();

// act - try to land the plane in stormy weather
const result12 = airport12.instructPlaneToLand(plane12, weather12);

// assert - check if the plane couldn't land due to stormy weather
const expectedOutput12 = false;
console.log(testName12);
console.log("========");
console.log(`Test passes: ${result12 === expectedOutput12}`);
console.log(`Result Message: ${result12 ? `Plane attempted to land but couldn't due to stormy weather.` : `Plane couldn't land due to stormy weather, as expected.`}`);
console.log("========");

//test 13 

let testName13 = `Test 13 - Plane Cannot Take Off in Stormy Weather`;

// arrange - airport with a landed plane and stormy weather
const airport13 = new Airport(10);
const plane13 = new Plane();
airport13.instructPlaneToLand(plane13);
const weather13 = new Weather();
weather13.setStormy();

// act - try to take off the plane in stormy weather
const result13 = airport13.instructPlaneToDepart(plane13, weather13);

// assert - check if the plane couldn't take off due to stormy weather
const expectedOutput13 = false;
console.log(testName13);
console.log("========");
console.log(`Test passes: ${result13 === expectedOutput13}`);
console.log(`Result Message: ${result13 ? `Plane attempted to take off but couldn't due to stormy weather.` : `Plane couldn't take off due to stormy weather, as expected.`}`);
console.log("========");



/* NOTES: 

I did not code this without the help of Ed's videos and the help of the internet, all of which has been referenced
below.

New Keyword: 
The new keyword in JavaScript is used to create an instance of an object by calling the constructor method.
The new keyword makes it easier to avoid repetitive code and makes it easier to debug our code as well. 
It is also foundational in learning object-oriented programming in JavaScript.
from https://www.educative.io/answers/what-is-the-new-keyword-in-javascript */  


/* References
New Keyword help - https://www.educative.io/answers/what-is-the-new-keyword-in-javascript */
