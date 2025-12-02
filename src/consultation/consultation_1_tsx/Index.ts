console.log("hello");

let y: number = 10;  //обьявили переменную, типизировали и положили данные
let p: string;
p = "hello";

type Age = number;   // Типы всегда называются с большой буквы
let myAge: Age = 29;

let k: number | string = 10;
k = "hello";
k = 30;

let qwerty: any

// Пример Union type
type Pet = "cat" | "dog";
let petOfAlex: Pet = "cat";
petOfAlex: Pet = "dog";

// Расширяем тип
type ExtendedPet = Pet | "birt";
let petOfAlex2: ExtendedPet = "birt";
petOfAlex2 = "dog";

type Gender = "male" | "female";
type ExtendedGender = Gender | "non binary person";

// Как типизировать массив стринговых значений
let fruits: string[] = ['aple', 'orange', 'mango'];
// особенно важно указывать тип присоздании пустого массива
let vegetables: string[] = [];

// Как типизировать обьекты?
type User = {
    firstName: string,
    isAdmin: boolean;
};

const user1: User = {
    firstName: "Vlad",
    isAdmin: false
};

// Как типизировать с помощью интерфейсов?
interface Monster{
    name:string,
    height:number,
    isAlive:boolean,
    isEvil: boolean
};

// Создали объект указанного типа
const frankenstain: Monster = {
    name: "Frankenstain",
    height: 195,
    isAlive: true,
    isEvil: false
};

interface ExtendedMonstr extends Monster{
    isFlying: boolean
};
const dracula: ExtendedMonstr = {
    isFlying: true,
    name: "Drakula",
    height: 185,
    isAlive: true,
    isEvil: true
};

// Как типизировать массив обьектов?
interface User3 {
    id: number,
    name: string,
    isAdmin: boolean
};

const user: User3[] = [
    {id: 0, name: "", isAdmin: false},
    {id: 0, name: "", isAdmin: false},
    {id: 0, name: "", isAdmin: false}
];

// Опциональные поля
interface Food {
    title: string,
    isSweet?: boolean    // Знак ? говорит, что это пое не обязательное
};
const pancake: Food = {
    title: "Pancakes",
    isSweet: true
};
const carrot: Food = {
    title: "Carrot"
};

// Создать интерфейс город City
//  со следующими свойствами:
//  name
//  population
// riversName - опциональное поле названия реки
// isCapital - опциональное поле является ли город столицей
// isTouristic - опциональное поле является ли город туристическим

// Создайте  объктов для этого интерфейса

// Дополнительно сделайте интерфейс расширяющий город
//  со следующими свойствами: добавить дату основания

interface City {
    name: string,
    population: number,
    riversName?: string,
    isCapital?: boolean,
    isTouristic?: boolean
}
const Kiev: City = {
    name: "Kiev",
    population: 2000000,
    riversName: "Dnepro",
    isCapital: true,
    isTouristic: true
}
interface ExtendedCity extends City{
    dateOfAoundation: number
};

