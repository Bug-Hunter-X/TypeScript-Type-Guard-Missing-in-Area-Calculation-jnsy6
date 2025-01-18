function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius; // Error: Property 'radius' does not exist on type 'Shape'.
  } else if (shape.kind === "rectangle") {
    return shape.width * shape.height; // Error: Property 'width' and 'height' does not exist on type 'Shape'.
  } else {
    return 0; //Should not reach here
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

const circle: Circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 10, height: 5 };
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));