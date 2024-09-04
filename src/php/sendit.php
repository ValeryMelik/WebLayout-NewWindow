<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "Скрипт начат<br>";

if (isset($_POST["time_on_site"])) {

    echo "Переменные получены<br>";

    $name = trim($_POST["name"]);
    $phone = trim($_POST["number"]);
    $time_on_site = $_POST["time_on_site"];

    $mail = new PHPMailer(true);

    try {

        $mail->SMTPDebug = 2;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = '';  // Введите логин отправителя
        $mail->Password = '';  // Введите пароль отправителя
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; 

        echo "Настройки SMTP установлены<br>";

        $mail->CharSet = 'UTF-8';
        $mail->setFrom('', 'Новое Окно'); // Введите логин отправителя
        $mail->addAddress(''); // Введите логин получателя
        $mail->AddCustomHeader('Precedence: bulk;'); 

        $mail->Subject = 'Заявка с сайта Новое Окно';
        $mail->isHTML(true);

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

        echo "Тело письма сформировано<br>";

        if ($time_on_site > 7) {
            $mail->send();
            echo "Письмо успешно отправлено<br>";
        }
    } catch (Exception $e) {
        echo "Ошибка при отправке: {$mail->ErrorInfo}<br>";
    }
}
?>
