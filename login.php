<?php
require 'function.php';


$register = new Register();

if (isset($_POST['submit'])) {
    $result = $register->registration($_POST['name'], $_POST['username'], $_POST['email'], $_POST['password'], $_POST['confirmpassword']);
    if ($result == 1) {
        echo "<script>alert('Registration successful!');</script>";
        header("Location: login.html");
    } elseif ($result == 10) {
        echo "<script>alert('Username or Email Has Already Taken');</script>";
        header("Location: registration.html");
    } elseif ($result == 100) {
        echo "<script>alert('Password Does Not Match');</script>";
        header("Location: registration.html");
    }
}

$login = new Login();

if(isset($_POST['submit'])) {
    $result = $login->login($_POST['usernameemail'], $_POST['password']);

    if ($result == 1) {
        $_SESSION['login'] = true;
        $_SESSION['id'] = $login->iduser();
        header("Location: home.html");
    } elseif ($result == 10) {
        echo "<script>alert('Password Salah');</script>";
    } elseif ($result == 100) {
        echo "<script>alert('Username atau Email Tidak Ditemukan');</script>";
    }
}
?>

