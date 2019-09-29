$(document).ready(function () {
	$("#btn").on("click", ajaxF);

	$("#arrayPhpFileBtn").on("click", ajaxPets);

	$("#jsonFileBtn").on("click", ajaxPetsFile);

	$("#loadHtml").on("click", ajaxLoad);
});


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


