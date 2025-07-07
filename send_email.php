<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // If installed via Composer
// require 'path/to/PHPMailer/src/PHPMailer.php'; // If manually installed
// require 'path/to/PHPMailer/src/SMTP.php';
// require 'path/to/PHPMailer/src/Exception.php';

$mail = new PHPMailer(true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        $name = htmlspecialchars($_POST["name"]);
        $email = htmlspecialchars($_POST["email"]);
        $message = htmlspecialchars($_POST["message"]);

        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'trent.sivola26@gmail.com'; // Replace with your Gmail
        $mail->Password = 'Trent0426!'; // Replace with App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email Settings
        $mail->setFrom($email, $name);
        $mail->addAddress('trent.sivola26@gmail.com'); // Replace with your email
        $mail->Subject = "New Contact Form Submission from $name";
        $mail->Body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        // Send Email
        if ($mail->send()) {
            echo "Message sent successfully!";
        } else {
            echo "Error sending message.";
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>

