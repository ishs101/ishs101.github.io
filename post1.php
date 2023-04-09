<?php
header('Content-Type: text/html; charset=utf-8');
define('DB_SERVER', 'zolbangdae.cpbzudviqiwu.ap-southeast-2.rds.amazonaws.com');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', 'ishs12345!');
define('DB_DATABASE', 'zolbangdae');
$name = $_POST['name'];
$pw = $_POST['pw'];

$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die('Unable to connect: '. mysqli_connect_error());
$query = "insert into zolbangdae (name, zolnum, class) values ('".$name."','".$pw."')";

?>