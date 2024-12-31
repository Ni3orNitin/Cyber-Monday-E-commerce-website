<?php
// Database credentials
$servername = "localhost"; // Change to your server address if not local
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "registration_db"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from POST request
$postData = file_get_contents("php://input");
$data = json_decode($postData, true);

// Validate input
if (isset($data['username'], $data['email'], $data['password'])) {
    $username = $conn->real_escape_string($data['username']);
    $email = $conn->real_escape_string($data['email']);
    $password = password_hash($data['password'], PASSWORD_BCRYPT); // Hash the password for security

    // Insert data into database
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Registration successful!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}

// Close the connection
$conn->close();
?>
