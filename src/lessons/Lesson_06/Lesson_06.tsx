import "./styles.css";

function Lesson_06() {
  let userFullName: string = "John Johnson";

  let hello: string = `Hello, ${userFullName}`;
  console.log(hello);

  let name = "Tom";

  let result: number = 100;
  console.log(result);

  (result = 45), 5;
  console.log(result);

  result = -10;
  console.log(result);

  result = NaN;
  result = Infinity;

  let isAdmin: boolean = true;

  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  console.log(animals);

  const userArray: [string, string, string, number] = [
    "name",
    "Bob",
    "age",
    30,
  ];

  const sayHi = (personalName: string): void => {
    console.log(`Hello, ${personalName}`);
  };

  //   const sayHi: (personalName: string) => void = (personalName) => {
  //     console.log(`Hello, ${personalName}`);
  //   };

  const add = (a: number, b: number): number => {
    return a + b;
  };
  console.log(add(1, 2));

  let anyVariable: any = "hello";

  //   8. null и undefined
  let count: null = null;
  //   count = 1; // будет ошибка!
  let year: undefined = undefined;
  //   year = 3; // будет ошибка!

  let userAge: undefined | number = undefined;

  interface User {
    firstName: string;
    age: number;
  }

  const userData: User = {
    firstName: "Mary",
    age: 30,
  };

  interface Admin extends User {
    isAdmin: boolean;
  }

  const adminData: Admin = {
    isAdmin: true,
    firstName: "Bob",
    age: 30,
  };



  return <div className="lesson_06_page_wrapper">Lesson_06</div>;
}

export default Lesson_06;
