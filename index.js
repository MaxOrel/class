// __proto__ указывает на прототип
// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true,
// };

// rabbit.__proto__ = animal;
// console.dir(animal);
// console.dir(rabbit);

// console.log(rabbit.eats);


// Object.create создает пустой объект
// const animal = {
//   eats: true
// };

// const rabbit = Object.create(animal);
// rabbit.jumps = true;

// // // console.log(animal);
// console.log(rabbit);

//Прототип используется только для чтения свойств

// const animal = {
//   eats: true,
//   walk() {
//     console.log("Внутри прототипа");
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.walk = function() {
//   console.log("Внутри объекта");
// };

// rabbit.walk();
// console.log(rabbit);

//setter и getter
// let user = {
//   name: "John",
//   surname: "Smith",
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// console.log(admin.fullName);
// console.log(admin);
// // срабатывает сеттер!
// admin.fullName = "Alice Cooper";
// console.log(admin.fullName);
// console.log(admin);

//перебор методов

// let animal = {
//     eats: true
//   };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
// // console.log(Object.keys(rabbit));

// for(let prop in rabbit) console.log(prop);

// rabbit.hasOwnProperty(prop);


// let animal = {
//     jumps: null
//   };
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };

// //   console.log( rabbit.jumps );

//   delete rabbit.jumps;

// //   console.log( rabbit.jumps );

//   delete animal.jumps;

//   console.log( rabbit.jumps );



// function User(name, surname){
//     this.name = name;
//     this.surname = surname;
// }

// const max = new User('Максим', 'Иванов');
// console.log(max);


// const ivan = new max.constructor('Иван', 'Петров');
// console.log(ivan);

// User.prototype.middle = 'Олегович';

// const petya = new User('Петя', 'Кузнецов');

// console.log(petya);
// console.log(petya.middle);


// function Person(firstname, lastName, born) {
//     //this = {}
//     //this.__proto__ = Person.prototype

//     this.firstname = firstname;
//     this.lastName = lastName;
//     this.born = born;

//     // return this
// }

// Person.prototype.age = function(){
//     const now = new Date();
//     return now.getFullYear() - this.born; 
// }

// const im = new Person('Максим', 'Иванов', 1991);
// console.log(im);
// console.log(im.age());

// class User{
//     static template = `123123123`;
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//         this.clear = function(){
//             this.name = "";
//             this.surname = "";
//         }

//         this.rename();
//     }

//     rename(){
//         this.name = 'Новое имя';
//         this.surname = 'Новая фамилия';
//     }
// }
//     const max = new User('Максим', 'Иванов');
//     console.log(max);

//     const ivan = new max.constructor('Иван', 'Петров');
//     console.log(ivan);

//     console.log(max.propertyIsEnumerable('clear'));


// class Person {
//     constructor(firstname, lastName, born){
//         //this = {}
//         //this.__proto__ = Person.prototype

//         this.firstname = firstname;
//         this.lastName = lastName;
//         this.born = born;
//         // return this 
//     }
  
//     age() {
//         const now = new Date();
//         return now.getFullYear() - this.born; 
//     } 
// }

// const im = new Person('Максим', 'Иванов', 1991);
// console.log(im);
// console.log(im.age());

// В отличие от обычных функций, конструктор класса не может быть вызван без new
// Методы класса являются неперечислимыми. Определение класса устанавливает флаг enumerable вfalse для всех методов в "prototype"
