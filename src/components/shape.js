// declare class

// export class using module.exports

class Shape {
  constructor() {
    this.color = "blue";
  }
  drawShape() {
    console.log("shape");
  }
  calculateArea() {
    console.log("area");
  }
}
module.exports = Shape;
