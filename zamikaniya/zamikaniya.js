function createCalcFunction(n) {
    return function () {
        console.log(1000 * n);
    }
}
// не сработает createCalcFunction(42), потому что число (n) не может пробиться в другую функцию и число n в console.log - замкнуто внутри другой функции
createCalcFunction(42);
// поэтому значение n записывается в calc и мы вызываем его как след функцию
const calc = createCalcFunction(42);
calc();


function createIncrementor(n) {
    return function (num) {
        return n + num;
    }
}
// т.е замыкаем значение в функции и присваеваем ее другой функции
const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10));
console.log(addOne(40));

console.log(addTen(10));
console.log(addTen(40));


// ф-ция, в которую передаем ссылку и домен
function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}
const comUrl = urlGenerator("com");
const ruUrl = urlGenerator("ru");

console.log(comUrl("google"));
console.log(comUrl("netflix"));
console.log(ruUrl("yandex"));


// написать свою функцию bind
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const person1 = {name: "Михаил", age: 22, job: "Fronend"};
const person2 = {name: "Елена", age: 19, job: "SMM"};

bind(person1, logPerson);
//bind(person2, logPerson)();

function bind(context, fn) {
    return fn(context)
}
/*function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}*/