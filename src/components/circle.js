// import using require

// declare class

// export class using module.exports

import Shape from "./shape";
// declare class
class Circle extends Shape {
  constructor() {
    super();
    this.color = "red";
  }
  calculateArea() {}
}
export default Circle;
