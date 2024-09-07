<?php
// Включаем вывод всех ошибок и предупреждений
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Подключаем автозагрузку Composer и проверяем пути
echo "Скрипт начат<br>";

// Проверяем текущую директорию и наличие файла autoload.php
$currentDir = __DIR__;
echo "Текущая директория: $currentDir<br>";

$autoloadPath = $currentDir . '/vendor/autoload.php';
if (file_exists($autoloadPath)) {
    require $autoloadPath;
    echo "Файл autoload.php загружен успешно<br>";
} else {
    echo "Файл autoload.php не найден по пути: $autoloadPath<br>";
}

// Проверяем наличие и доступ к файлам PHPMailer
$phpmailerPath = $currentDir . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
$smtpPath = $currentDir . '/vendor/phpmailer/phpmailer/src/SMTP.php';
$exceptionPath = $currentDir . '/vendor/phpmailer/phpmailer/src/Exception.php';

if (file_exists($phpmailerPath)) {
    require $phpmailerPath;
    echo "Файл PHPMailer.php загружен успешно<br>";
} else {
    echo "Файл PHPMailer.php не найден по пути: $phpmailerPath<br>";
}

if (file_exists($smtpPath)) {
    require $smtpPath;
    echo "Файл SMTP.php загружен успешно<br>";
} else {
    echo "Файл SMTP.php не найден по пути: $smtpPath<br>";
}

if (file_exists($exceptionPath)) {
    require $exceptionPath;
    echo "Файл Exception.php загружен успешно<br>";
} else {
    echo "Файл Exception.php не найден по пути: $exceptionPath<br>";
}

// Проверяем, была ли отправлена форма
echo "<pre>";
print_r($_POST); // Выводит все данные, переданные в скрипт
echo "</pre>";

if (!empty($_POST["time_on_site"])) {
    echo "Переменные формы получены<br>";

    // Получаем данные из формы и выводим их для проверки
    $phone = isset($_POST["number"]) ? trim($_POST["number"]) : '';
    $forma = isset($_POST["forma"]) ? trim($_POST["forma"]) : '';
    $time_on_site = isset($_POST["time_on_site"]) ? $_POST["time_on_site"] : '';
    
    echo "Полученные данные:<br>";
    echo "Телефон: $phone<br>";
    echo "Форма: $forma<br>";
    echo "Время на сайте: $time_on_site<br>";

    // Создаем экземпляр PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    try {
        echo "Создан экземпляр PHPMailer<br>";

        // Настройки PHPMailer
        $mail->CharSet = 'UTF-8';
        $mail->setFrom('info@media-group.biz', 'Новое Окно');
        echo "Отправитель установлен<br>";

        $mail->addAddress('negrusti98@gmail.com');
        echo "Адресат добавлен: negrusti98@gmail.com<br>";

        $mail->AddCustomHeader('Precedence: bulk;');
        echo "Заголовок письма установлен<br>";

        $mail->Subject = 'Заявка с сайта Новое Окно (' . $forma . ')';
        $mail->isHTML(true);
        echo "Тема письма и формат HTML установлены<br>";

        // Формируем тело письма
        $message = "<table>";

        if (!empty($phone)) {
            $message .= '<tr><td>Телефон:</td><td>' . htmlspecialchars($phone) . '</td></tr>';
        }
        if (!empty($_POST['name'])) {
            $message .= '<tr><td>Имя:</td><td>' . htmlspecialchars(trim($_POST['name'])) . '</td></tr>';
        }
        if (!empty($forma)) {
            $message .= '<tr><td>Форма:</td><td>' . htmlspecialchars($forma) . '</td></tr>';
        }
        if (!empty($time_on_site)) {
            $message .= '<tr><td>Время на сайте:</td><td>' . htmlspecialchars($time_on_site) . '</td></tr>';
        }

        $message .= "<tr><td colspan='2'>UTM метки</td></tr>";

        // Проверка UTM меток
        $utm_fields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_placement', 'utm_creative', 'utm_content'];
        foreach ($utm_fields as $field) {
            if (isset($_POST[$field]) && trim($_POST[$field]) !== '') {
                $message .= '<tr><td>' . htmlspecialchars($field) . ':</td><td>' . htmlspecialchars(trim($_POST[$field])) . '</td></tr>';
                echo "UTM поле добавлено: $field = " . htmlspecialchars(trim($_POST[$field])) . "<br>";
            }
        }

        if (isset($_POST['mobile']) && $_POST['mobile'] == "true") {
            $message .= '<tr><td>Мобильный телефон:</td><td>Да</td></tr>';
            echo "Мобильный телефон: Да<br>";
        } else {
            $message .= '<tr><td>Мобильный телефон:</td><td>Нет</td></tr>';
            echo "Мобильный телефон: Нет<br>";
        }

        $message .= "</table>";
        $mail->Body = $message;
        echo "Тело письма сформировано<br>";

        // Отправка письма
        if ($time_on_site > 7) {
            $mail->send();
            echo "Письмо успешно отправлено<br>";
        } else {
            echo "Время на сайте меньше 7 секунд, письмо не отправлено<br>";
        }
    } catch (Exception $e) {
        echo "Ошибка при отправке: {$mail->ErrorInfo}<br>";
    }
} else {
    echo "Данные формы не были отправлены.<br>";
}
?>
