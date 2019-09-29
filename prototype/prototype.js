const person = new Object({
    age: 25,
    name: "Dima",
    greet: function () {
        console.log("Greet");
    }
});
// создаем прототип у Object и теперь этот метод доступен для person
Object.prototype.sayHello = function () {
    console.log("Hello");
};
person.sayHello();

// создаем прототип person для объекта lena через обращение к глобальному классу Object
// теперь свойства и методы person доступны для lena
const lena = Object.create(person);
lena.name = "Elena";

// строка - это тоже объект и через доступ к глобальному объекту она имеет функцию sayHello
const str = new String("I am string");
str.sayHello();


// __proto__
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal; // (*)
// теперь мы можем найти оба свойства в rabbit:
console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true
