<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'leaks.db';

    //create connection
    $connection = new mysqli($servername, $username, $password, $database);

    $Job_ID = $_POST["Job_ID"];
    $operator = $_POST["operator"];
    $date = $_POST["date"];
    $details = $_POST["details"];
    $sql = "insert into work_orders (Job_ID, operator, date, details) values ('$Job_ID', '$operator', '$date', '$details')";
    $connection->query($sql);
    $connection->close();
    header("location: index.php");

    function function_alert($message) {
      
        // Display the alert box 
        echo "<script>alert('$message');</script>";
    }
      
      
    // Function call
    function_alert("Work order added!");
?>
