<?php
$g1 = array(
	"name" => "Ira",
	"sex" =>  "woman",
	"pet" =>  true
);
$g2 = array(
	"name" => "Dima",
	"sex" =>  "man",
	"pet" =>  false
);

if ( isset($_GET["art"]) && ($_GET["art"])!="" ) {
	$art = $_GET["art"];
}

if ($art == 1) echo json_encode($g1);
if ($art == 2) echo json_encode($g2);