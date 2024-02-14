class Airport {
  constructor(maxCapacity) {
    this._currentCapacity = 0;       
    this._maxCapacity = maxCapacity; 
    this._landedPlanes = {};         
  }

  // get for maxCapacity
  get maxCapacity() {
    return this._maxCapacity;
  }

  // set for maxCapacity
  set maxCapacity(newMaxCapacity) {
    this._maxCapacity = newMaxCapacity;
  }

  // get for current
  get currentCapacity() {
    return this._currentCapacity;
  }

  // set for current
  set currentCapacity(newCurrentCapacity) {
    this._currentCapacity = newCurrentCapacity;
  }

  // method - check if a plane can land
  canLand() {
    return this._currentCapacity < this._maxCapacity;
  }

  // method - instruct a plane to land
  instructPlaneToLand(plane) {
    if (this.canLand()) {
      //add one to current capacity when a plane lands 
      this._currentCapacity++;          
      //add to list of landed 
      this._landedPlanes[plane.getPlaneId()] = true; 
      // return tru if plane has landed 
      return true; 
    }
    // if plane cannot land 
        return false; 
  }

  // override the maximum capacity
  overrideMaximumCapacity(newMaxCapacity) {
    this._maxCapacity = newMaxCapacity;
  }

  // method to get current planes and their ids 
  getCurrentPlanes() {
    // get plane ids from object
    const planeIds = Object.keys(this._landedPlanes); 
    // convert ids to ints and return as an array
    return planeIds.map(planeId => parseInt(planeId)); // convert plane ids to int and return as array
  }
  instructPlaneToDepart(planeId) {
    if (this._landedPlanes[planeId]) {
      delete this._landedPlanes[planeId];
      this._currentCapacity--;
      return true;
    }
    return false;
  }
}

  
export default Airport;
