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


  $sql = "select * from work_orders";
  $result = $connection->query($sql);
  while($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $row['Job_ID'] . "</td>";
    echo "<td>" . $row['Operator'] . "</td>";
    echo "<td>" . $row['Date'] . "</td>";
    echo "<td>" . $row['Details'] . "</td>";
        
    "</tr>"; 
  }
  $connection->close();
?>
