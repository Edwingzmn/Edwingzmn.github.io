<?php
$nombre = $_POST['nombre'];
$motivo = $_POST['motivo'];
$mail = $_POST['correo'];
$tel = $_POST['celular'];
$empresa = $_POST['comentarios'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Motivo: " . $_POST['motivo'] . " \r\n";
$mensaje .= "Número celular: " . $_POST['celular'] . " \r\n";
$mensaje .= "Comentarios: " . $_POST['comentarios'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'basiliohernandez@inextubasy.com.mx';
$asunto = 'Información sobre Inextubasy';

mail($para, $asunto, utf8_decode($mensaje), $header);

sleep(2);
header("Location:index.html");
?>