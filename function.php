<?php

if(isset($_SESSION['id'])) {
    header("Location: home.php");
}

class connection{
    public $host = "localhost";
    public $user = "root";
    public $password = "";
    public $db_name = "oop_relog";
    public $conn ;

    public function __construct() {
        $this->conn = mysqli_connect($this->host, $this->user, $this->password, $this->db_name);
        }
    }

    class Register extends connection {
        public function registration($name, $username, $email, $password, $confirmpassword) {
            $duplicate = mysqli_query($this->conn, "SELECT * FROM tb_user WHERE username = '$username' OR email = '$email'");

            if (mysqli_num_rows($duplicate) > 0) {
               return 10; // Username or Email Has Already Taken

            } 
            else {
                if($password == $confirmpassword) {
                    $query = "INSERT INTO tb_user VALUES ('','$name', '$username', '$email', '$password')";
                    mysqli_query($this->conn, $query);
                    return 1; // Registration successful
                } else {
                    return 100; // Password Does Not Match
                }
            } 
        }
    }

class Login extends connection {
    public $id;
    public function login($usernameemail, $password) {
        $result = mysqli_query($this->conn, "SELECT * FROM tb_user WHERE username = '$usernameemail' OR email = '$usernameemail'");
        $row = mysqli_fetch_assoc($result);

        if(mysqli_num_rows($result) > 0) {
            if($password == $row['password']) {
                $this->id = $row['id'];
                return 1; // Login successful
            }
            else {
                return 10;
            }
        }
        else {
            return 100;
        }
        
    }
    public function idUser() {
        return $this->id;
    }
}

class select extends connection {
    public function selectUserByid($id) {
        $result = mysqli_query($this->conn, "SELECT * FROM tb_user WHERE id = '$id'");
        return mysqli_fetch_assoc($result);
    }
}