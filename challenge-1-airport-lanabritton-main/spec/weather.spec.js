import Weather from '..src/Weather.js'
import Plane from '..src/Plane.js'

// EVERYTHING HERE IS AI GENERATED, cannot get to work 

// Test 1 - Planes cannot land when the weather is stormy
test('Test 1 - Planes cannot land when the weather is stormy', () => {
  const weather = new Weather();
  weather.setStormy(); // Set weather to stormy
  const plane = new Plane();
  expect(() => {
    plane.land(weather);
  }).toThrow('Cannot land in stormy weather');
});

// Test 2 - Planes cannot take off when the weather is stormy
test('Test 2 - Planes cannot take off when the weather is stormy', () => {
  const weather = new Weather();
  weather.setStormy(); // Set weather to stormy
  const plane = new Plane();
  plane.land(weather); // Plane needs to be on the ground to take off.
  expect(() => {
    plane.takeOff(weather);
  }).toThrow('Cannot take off in stormy weather');
});

// Test 3 - Planes can land and take off in clear weather
test('Test 3 - Planes can land and take off in clear weather', () => {
  const weather = new Weather();
  const plane = new Plane();
  plane.land(weather.clearStormy()); // Ensure clear weather
  plane.takeOff(weather.clearStormy()); // Ensure clear weather
  expect(plane.isFlyingStatus()).toBe(true);
});
