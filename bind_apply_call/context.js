function hello() {
    console.log("Hello", this);
}

const person = {
    name: "Dima",
    age: 34,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone){
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
};

const lena = {
    name: "Elena",
    age: 25,
};

//const fnLenaInfoLog = person.logInfo.bind(lena);
//fnLenaInfoLog("Frontend", "0-800-555-33-22");
// то же самое что
//person.logInfo.bind(lena, "Frontend", "0-800-555-33-22")();
//person.logInfo.call(lena, "Frontend", "0-800-555-33-22");
//person.logInfo.apply(lena, ["Frontend", "0-800-555-33-22"]);
// и
const fnLenaInfoLog = person.logInfo.bind(lena, "Frontend", "0-800-555-33-22");
fnLenaInfoLog();

// ===============
// комбинация контекста и прототипа
// надо перемножить элементы массива на некоторое число
const array = [1,2,3,4,5];
Array.prototype.multBy = function(n) {
  //console.log("multBy", this);
    // обращаемся к this.map т.к указывает на объект слева от точки, чем является array
    return this.map(function (i) {
        return i * n;
    })
};
console.log(array.multBy(2));
