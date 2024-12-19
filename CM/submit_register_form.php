<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate and sanitize input (you can add more validation)
    if (!empty($username) && !empty($email) && !empty($password)) {
        // Here, you can insert into the database or process the data as required
        echo "Registration successful!";
    } else {
        echo "Please fill in all the fields.";
    }
}
?>
