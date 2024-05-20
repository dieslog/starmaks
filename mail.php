<?php

$who = $_POST['email'];
$message = $_POST['message'];

$to      = 'dieslog@gmail.com';
$subject = 'NEW MASSAGE. MB NEW WORK!';
$message = "From: {$who} \n\r" .
    "Message: {$message}";
$headers = 'From: admin@starmaks.com.ua' . "\r\n" .
    "Reply-To: {$who} \r\n";

$send = mail($to, $subject, $message, $headers);

if ($send) {
    http_response_code(200);
} else {
    http_response_code(500);
}
