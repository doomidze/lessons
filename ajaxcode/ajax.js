$(document).ready(function () {
	$("#btn").on("click", ajaxF);

	$("#arrayPhpFileBtn").on("click", ajaxPets);

	$("#jsonFileBtn").on("click", ajaxPetsFile);

	$("#loadHtml").on("click", ajaxLoad);
});


// ------- jQuery ---------

//get response from server
function ajaxF() {
	console.log("click");
	let digit = $('#digit');
	$.ajax({
		url: "ajaxcode/ajax.php",
		type: "GET",
		data: {
			"a": +digit.val(),
		},
		success: function (data) {
			console.log(data);
		}
	})
}


//get data from php array
function ajaxPets() {
	console.log("click");
	var arrayPhpFileInput = document.getElementById("arrayPhpFileInput").value;
	$.get (
		//куда
		"ajaxcode/goods.php",
		//что посылаем
		{
			"art" : +arrayPhpFileInput,
		},
		//функция, которая обрабатывает ответ
		function (data) {
			//получаем строку из php-файла, т.к. массив нельзя переслать
			console.log(data);
			//преобразуем обратно в массив
			data = JSON.parse(data);
			console.log(data);
		}
	)
}

//get dat from json file
function ajaxPetsFile() {
	console.log("click");
	$.getJSON ( "ajaxcode/json.json", function (data) {
		console.log(data);
		let out = "";
		for (let key in data){
			out+="<div class='person'>";
			out+="<p class='name'>" + data[key].name + "</p>";
			out+="<img src='" + data[key].photo + "' alt=''>";
			out+="<p class='age'>" + data[key].age + "</p>";
			out+="</div>";
		}
		$(".out").html(out);
	})
}


//get block from html file
function ajaxLoad() {
	console.log("click");
	$(".blocks").load("ajaxcode/block1.html")
	// let blocks = document.querySelector(".blocks");
	// let newDiv = document.createElement("div");
	// newDiv.className = "block";
	// blocks.appendChild(newDiv);
}




const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
const method = 'GET';
const isAsync = false;

main5();

function main2() {
	const params = (method, url);
	$.ajax(params)
		.done(data => {
			data = JSON.parse(data);
			console.log(data);
		});
}

// асинхронная функция(код будет выполнятся построчно)
async function main3() {
	const params = (method, url);

	//асинхронный запрос(ждем пока выполнится функция)
	const request = await $.ajax(params);

	const data = JSON.parse(request);
	console.log(data);
}

// ------- javascript ---------

function main() {
	const request = new XMLHttpRequest();
	request.open(method,url, isAsync);
	request.send();

	const data = JSON.parse(request.response);
	console.log(data);
}

function main4() {
	// метод по-умолчанию get
	const request = fetch(url);

	const jsonStream = request.then(responce => {
		return responce.json();
	}).catch(err => {
		console.log(err)
	});

	jsonStream.then(data => {
		console.log(data);
	}).catch(err => {
		console.log(err)
	});
}

// тоже самое только сокращенно
function main5() {
	// создаем канал(поток)
	// Поток - это цепочка функция, которые вызываются последовательно друг за другом и аргумент каждой следующей функции является результатом предыдущей
	fetch(url)
		// нам возвращается promise
		// что делать с данными
		// получить данные и конвертировать их в json
	// если без фигурных скобок, то это понимается как return
		.then(responce => responce.json() )
		// вывести их в консоли
		.then(data => console.log(data) )
		.catch(err => {
		console.log(err)
	});
}