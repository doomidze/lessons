let person, personName, personGender, personAge;

function init() {
    initPerson();
    initName();
    initGender();
    initDevice();
}

let initPerson = () => {
    person = prompt("Кто ты? Робот или человек?");
    console.log(person);
    //if (person == null || false) initPerson();
    if (person) person = person.toLowerCase();
    initPersonFunction();
};
//initPerson();

function initPersonFunction() {
    switch (person) {
        case "робот": alert("Ой не пизди..");
            initPerson();
            break;
        case "человек":
            // personName = prompt("Как тебя зовут?");
            // personName = personName[0].toUpperCase() + personName.substr(1);
            break;
        case "":
            alert("Надо представиться");
            initPerson();
            break;
        case "null":
            alert("Ты куда? Давай знакомиться");
            initPerson();
            break;
        case null:
            alert("Ты куда? Давай знакомиться");
            initPerson();
            break;
        default: alert("Чиво блять?..");
            initPerson();
            break;
    }
}


let initName = () => {
    personName = prompt("Как тебя зовут?");
    personName = personName[0].toUpperCase() + personName.substr(1);
    initNameFunction();
};
//initName();

function initNameFunction() {
    switch (personName) {
        case ("ира" || "Ирина"):
            alert("Превед, пыпырка :*)");
            break;
        case ("тема" || "тёма"):
            alert("Превед, Ортём");
            break;
        default:
            break;
    }
}


let initGender = () => {
    personGender = prompt("Ты девочка или мальчик?)");
    personGender = personGender.toLowerCase();
    initGenderFunction();
};
//initGender();

function initGenderFunction() {
    switch (personGender) {
        case "девочка":
            alert(`Значит ты ${person} + с вульвой`);
            break;
        case "мальчик":
            alert(`Значит ты ${person} + с хером`);
            break;
        default:
            alert("Оно и видно");
            initGender();
            break;
    }
}

let initDevice = () => {
  personDevice = prompt("С телефона сидишь?");
  personDevice = personDevice.toLowerCase();
  initCheckDeviceFunction();
};
//initDevice();

function initCheckDeviceFunction() {
// Checking device
    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if ( isMobile.Android() ) alert("Хорошо, что ты на Андроиде, я тебе уже скрипт в телефон залил. Не переживай, много денег не возьму");
    if ( isMobile.iOS() ) alert("Если у человека Айфон, то у него или маленький член, или большая вагина");
    if ( isMobile.Opera() ) alert("Что за допотопный телефон у тебя");
    if ( isMobile.Windows() ) alert("Виндовсфон? Лол");
}



console.log("итого:");
console.log(person);
console.log(personName);
console.log(personGender);


//init();






