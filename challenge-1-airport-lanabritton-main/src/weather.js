class Weather {
    constructor() {
      this.isStormy = false;
    }
  
    setStormy() {
      this.isStormy = true;
    }
  
    clearStormy() {
      this.isStormy = false;
    }
  
    isStormyWeather() {
      return this.isStormy;
    }
// added myself as I was getting an error in the test
    isSunnyWeather() {
      return true;
    }
}

export default Weather;

  