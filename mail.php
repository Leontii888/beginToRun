<?php 




$recepient = "admin@pipermoney.ru";
$sitename = "btr.ru";

$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);
$mail = trim($_POST ["user_mail"]);

$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");