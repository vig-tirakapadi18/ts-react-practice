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

// TYPE ALIASES
type AddFn = (num1: number, num2: number) => number;
type strOrNum = string | number;

// TYPES WITH INTERFACES
interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials = {
  password: "abc",
  email: "abc@example.com",
};

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
  age: number;
}

// MERGING TYPES
type Admin = {
  permission: string[];
};

type User = {
  userName: string;
};

type AppAdminUnion = Admin | User; // Type Unions
type AppAdminMerge = Admin & User; //  Type Merging

// MERGING INTERFACES
interface AdminInt {
  permission: string[];
}

interface UserInt {
  userName: string;
}

interface TeacherInt {
  teacherName: string;
}

interface SchoolApp extends AdminInt, UserInt, TeacherInt {}

// TYPE LITERALS
let role: "admin" | "user" | "editor";

role = "admin";
role = "editor";
role = "user";
// role = "abc"; // NOT allowed
