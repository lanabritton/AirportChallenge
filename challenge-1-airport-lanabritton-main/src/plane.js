class Plane {
  constructor(planeId) {
    this.planeId = planeId;
    this.isFlying = false;
  }

  canLand() {
    return !this.isFlying;
  }

  getPlaneId() {
    return this.planeId;
  }
}

export default Plane;
