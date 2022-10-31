<?php
  $servername = 'localhost';
  $username = 'root';
  $password = '';
  $database = 'leaks.db';

  //create connection
  $connection = new mysqli($servername, $username, $password, $database);

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
