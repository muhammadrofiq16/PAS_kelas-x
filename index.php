<?php

require 'function.php';

$select = new select();

if (isset($_SESSION['id'])) {
    $user = $select->selectUserByid($_SESSION['id']);
} 
else {
    header("Location: index.html");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>