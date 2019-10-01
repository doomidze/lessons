const btnAccess = document.querySelector('#btnAccess');
const inputName = document.querySelector('#loginAccess');
const inputPass = document.querySelector('#passwordAccess');
const data = {
    name: inputName,
    password: inputPass
};

const url = 'http://www.cbr-xml-daily.ru/daily_json.js';
const method = 'GET';
const isAsync = false;

main();

function main() {
    const request = new XMLHttpRequest();
    request.open(method, url, isAsync);
    request.send();

    const data = JSON.parse(request.response);
    //console.log(data);
}


btnAccess.onclick = (event) => {
    event.preventDefault();

};