function calculateArea(shape: Shape): number {
  if (isCircle(shape)) {
    return Math.PI * shape.radius * shape.radius;
  } else if (isRectangle(shape)) {
    return shape.width * shape.height;
  } else {
    return 0; 
  }
}

interface Shape {
  kind: string;
}

interface Circle extends Shape {
  kind: "circle";
  radius: number;
}

interface Rectangle extends Shape {
  kind: "rectangle";
  width: number;
  height: number;
}

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

function isRectangle(shape: Shape): shape is Rectangle {
  return shape.kind === "rectangle";
}

const circle: Circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 10, height: 5 };
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));