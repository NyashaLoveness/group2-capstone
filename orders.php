<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'leaks.db';

    //create connection
    $connection = new mysqli($servername, $username, $password, $database);

    //Get Heroku ClearDB connection information
    // $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
    // $cleardb_server = $cleardb_url["host"];
    // $cleardb_username = $cleardb_url["user"];
    // $cleardb_password = $cleardb_url["pass"];
    // $cleardb_db = substr($cleardb_url["path"],1);
    // $active_group = 'default';
    // $query_builder = TRUE;
    // // Connect to DB
    // $connection = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);

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