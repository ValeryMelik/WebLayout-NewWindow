<?php
// Импортируем класс PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Подключаем autoload.php от PHPMailer
require 'PHPMailer/PHPMailerAutoload.php';

if (isset($_POST["time_on_site"])) {

    $name = trim($_POST["name"]);
    $phone = trim($_POST["number"]);
    $time_on_site = $_POST["time_on_site"];

    // Создаем новый экземпляр PHPMailer
    $mail = new PHPMailer(true);

    // Настройки PHPMailer
    $mail->CharSet = 'UTF-8';
    $mail->setFrom('info@media-group.biz', 'Новое Окно'); // От кого письмо
    $mail->addAddress('negrusti98@gmail.com'); // Кому отправляем письмо
    $mail->AddCustomHeader('Precedence: bulk;'); // Устанавливаем заголовок для массовой рассылки

    // Тема письма
    $mail->Subject = 'Заявка с сайта Новое Окно';
    $mail->isHTML(true);

    // Формируем тело письма
    $message = "<table>";

    if (isset($phone)) {
        $message .= '<tr><td>Телефон:</td><td>' . htmlspecialchars($phone) . '</td></tr>';
    }
    if (isset($name)) {
        $message .= '<tr><td>Имя:</td><td>' . htmlspecialchars($name) . '</td></tr>';
    }
    if (isset($time_on_site)) {
        $message .= '<tr><td>Время на сайте:</td><td>' . htmlspecialchars($time_on_site) . '</td></tr>';
    }

    $message .= "</table>";
    $mail->Body = $message;

    // Проверяем время на сайте и отправляем почту
    if ($time_on_site > 7) {
        $mail->send();
        echo "mailsend";
    }
}
?>