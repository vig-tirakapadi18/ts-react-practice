// PRIMITIVE TYPES
let myName: string = "Vig";
let age: number = 23;
let isUser: boolean = true;

//UNION TYPES
let id: number | string = "user123";

// OBJECT TYPES
const myDetails: { name: string; age: number; isUser: boolean } = {
  name: "Vig",
  age: 23,
  isUser: true,
};

// ARRAY TYPES: string[], boolean[], number[]
const favTechs: string[] = ["ReactJs", "JavaScript", "TypeScript"];

// FUNCTIONS
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const add2 = (num1: number, num2: number): void => {
  console.log(num1 + num2); // Does not returns anything
};

const add3 = (
  num1: number,
  num2: number,
  add: (num1: number, num2: number) => number
) => {
  add(num1, num2);
};

add3(2, 3, add);
