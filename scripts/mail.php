<?php
$mail = "egor.feraf@gmail.com"; //to
$headers = "From:fga-as@mail.ru";
if(isset($_POST["submit"])) {
        $message = "Новая заявка с сайта\nИмя: " . $_POST['name'] . "\nТелефон: " . $_POST['phone'];
        mail($mail, 'Новая заявка с сайта', $message, $headers);
}
header('location: /');

// if(isset($_POST["submit"])) {
//     $recipient = "egor.feraf@gmail.com"; //my email
//     echo $subject = 'New Appeal';
//     echo $name = $_POST ["name"];
//     echo $phone = $_POST["phone"];
    
//      $mailBody="Name: $name\nphone: $phone\n\n"; 
    
//      mail($recipient, $subject, $mailBody, "From: $name <$email>");
    
    // echo "<p>Thank you! We will be in contact with you shortly.</p>";
    
    // }
?>