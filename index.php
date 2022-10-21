<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">
    <script><?php require_once("functions.js");?></script>
    <link rel="stylesheet" type="text/css" href="data.css?t=<?=filemtime('data.css')?>"/>

</head>
<body>
<div class='container'>
        <div id = 'loginPg' class = 'login' style = 'padding-top: 3em'>
            <div class = 'username'>
                <label id = 'lbl1' style = 'padding:1em; color:white; margin-left: 13em'>Username:</label>
                <input id = 'name' type = 'text'>
            </div>
            <div class = 'passwd'>
                <label id = 'lbl2' style = 'padding:1em; color:white; margin-left: 13em'>Password:</label>
                <input id = 'passwd' type = 'password'>
            </div>
            <div class = 'checkbox' style = 'margin-left: 18em'>
                <input type = 'checkbox'>
                <label id = 'lbl3' style = 'padding:1em; color:white'>Keep me signed in</label>
            </div>
            <div><button class = 'loginBtn' onclick="login()">Sign in</button></div>
            <label id = 'lbl4' style = 'padding:1em; color:white'>Don't have an account yet? Register here</label>
        </div>



        <div class='header'>
            <span class='path' id = 'pathDir'>Home > Pipe metadata </span>
        </div>

        <div id = 'menu' class='sidebar'>
            <button class='homebtn'><img class = 'icons1' src = 'home.png'>Home</button>
            <button class='ordersbtn'><img class = 'icons' src = 'font-selection-editor.png'>Work orders</button>
            <button class='settingsbtn' onclick = 'settingsShow()'><img class = 'icons' src = 'cog-wheel-silhouette.png'>Settings</button>
        </div>

        <div id = 'tabs' class='widgets'>
            <div class = 'navBar'>
                <button class='pressureBtn'>Pressure</button>
                <button class='coordBtn' onclick = 'coordsShow()'>Coordinates</button>
                <button class='seriesBtn'>Time series</button>
                <button class='junctionsBtn' onclick = 'tablesShow()'>Junctions</button>
                <button class='metadataBtn' onclick = 'metadataShow()' >Pipe metadata</button>
                <button class='layoutBtn'>Pipe layout</button>
            </div>

        </div>

        <div id = 'box' class='pipe_data'>
            <h1 id = 'heading'>Pipe metadata</h1>
        </div>
        <div id = 'contentBox' class='content table-responsive"' >
        <table id = 'tbl' class="table table table-sm table table-hover">
                <thead id = 'tblHead' class="thead-light text-center">
                    <tr>
                        <th scope="col" class = 'text-center'>ID</th>
                        <th scope="col" class = 'text-center'>Node 1</th>
                        <th scope="col" class = 'text-center'>Node 2</th>
                        <th scope="col" class = 'text-center'>Length</th>
                        <th scope="col" class = 'text-center'>Diameter</th>
                        <th scope="col" class = 'text-center'>Roughness</th>
                        <th scope="col" class = 'text-center'>Minor loss</th>
                        <th scope="col" class = 'text-center'>Status</th>
                    </tr>
                </thead>
                <tbody id ='table_body' class = 'text-center'>
                    <?php
                    //Get Heroku ClearDB connection information
                    $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
                    $cleardb_server = $cleardb_url["host"];
                    $cleardb_username = $cleardb_url["user"];
                    $cleardb_password = $cleardb_url["pass"];
                    $cleardb_db = substr($cleardb_url["path"],1);
                    $active_group = 'default';
                    $query_builder = TRUE;
                    // Connect to DB
                    $connection = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
            
                    // $servername = 'localhost';
                    // $username = 'root';
                    // $password = '';
                    // $database = 'leaks.db';

                    // //create connection
                    // $connection = new mysqli($servername, $username, $password, $database);

                    //check if connection is established correctly
                    if ($connection -> connect_error){
                        die('Connection failed: ' . $connection -> connect_error);
                    }

                    //read all rows from DB table
                    $sql = 'select * from pipes';
                    $result = $connection -> query($sql); //execute query

                    if (!$result) {
                        die('Invalid query: ' . $connection -> error);
                    }

                    //read data of each row
                    while ($row = $result -> fetch_assoc()){
                       echo "<tr>
                        <td>" . $row['ID'] . "</td>
                        <td>" . $row['Node_1'] . "</td>
                        <td>" . $row['Node_2'] . "</td>
                        <td>" . $row['Length'] . "</td>
                        <td>" . $row['Diameter'] . "</td>
                        <td>" . $row['Roughness'] . "</td>
                        <td>" . $row['Minor_Loss'] . "</td>
                        <td>" . $row['Status'] . "</td>
                    </tr>";
                    }
                    ?>
                </tbody>
            </table>

            <table id = 'tblJ' class="table table table-sm table table-hover tblJ">
                <thead class="thead-light text-center">
                    <tr>
                        <th scope="col" class = 'text-center'>ID</th>
                        <th scope="col" class = 'text-center'>Elevation</th>
                        <th scope="col" class = 'text-center'>Demand</th>
                        <th scope="col" class = 'text-center'>Pattern</th>
                    </tr>
                </thead>              
                <tbody id='table_body4' class = 'text-center'>
                <?php
                    //Get Heroku ClearDB connection information
                    $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
                    $cleardb_server = $cleardb_url["host"];
                    $cleardb_username = $cleardb_url["user"];
                    $cleardb_password = $cleardb_url["pass"];
                    $cleardb_db = substr($cleardb_url["path"],1);
                    $active_group = 'default';
                    $query_builder = TRUE;
                    // Connect to DB
                    $connection = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
                    
                    // $servername = 'localhost';
                    // $username = 'root';
                    // $password = '';
                    // $database = 'leaks.db';

                    // //create connection
                    // $connection = new mysqli($servername, $username, $password, $database);

                    //check if connection is established correctly
                    if ($connection -> connect_error){
                        die('Connection failed: ' . $connection -> connect_error);
                    }

                    //read all rows from DB table
                    $sql = 'select * from junctions';
                    $result1 = $connection -> query($sql); //execute query

                    if (!$result1) {
                        die('Invalid query: ' . $connection -> error);
                    }

                    //read data of each row
                    while ($row1 = $result1 -> fetch_assoc()){
                       echo "<tr>
                        <td>" . $row1['ID'] . "</td>
                        <td>" . $row1['Elevation'] . "</td>
                        <td>" . $row1['Demand'] . "</td>
                        <td>" . $row1['Pattern'] . "</td>
                        </tr>";
                    }
                    ?>
                </tbody>
            </table>

            <table id = 'tblCoord' class="table table table-sm table table-hover tblCoord">
                <thead class="thead-light text-center">
                    <tr>
                        <th scope="col" class = 'text-center'>Node</th>
                        <th scope="col" class = 'text-center'>X-coordinate</th>
                        <th scope="col" class = 'text-center'>Y-coordinate</th>
                    </tr>
                </thead>
                <tbody id='table_body4' class = 'text-center trow'>
                <?php
                    //Get Heroku ClearDB connection information
                    $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
                    $cleardb_server = $cleardb_url["host"];
                    $cleardb_username = $cleardb_url["user"];
                    $cleardb_password = $cleardb_url["pass"];
                    $cleardb_db = substr($cleardb_url["path"],1);
                    $active_group = 'default';
                    $query_builder = TRUE;
                    // Connect to DB
                    $connection = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
                    
                    // $servername = 'localhost';
                    // $username = 'root';
                    // $password = '';
                    // $database = 'leaks.db';

                    // //create connection
                    // $connection = new mysqli($servername, $username, $password, $database);

                    //check if connection is established correctly
                    if ($connection -> connect_error){
                        die('Connection failed: ' . $connection -> connect_error);
                    }

                    //read all rows from DB table
                    $sql = 'select * from coordinates';
                    $result2 = $connection -> query($sql); //execute query

                    if (!$result2) {
                        die('Invalid query: ' . $connection -> error);
                    }

                    //read data of each row
                    while ($row2 = $result2 -> fetch_assoc()){
                       echo "<tr>
                        <td>" . $row2['Node'] . "</td>
                        <td>" . $row2['Xcoord'] . "</td>
                        <td>" . $row2['Ycoord'] . "</td>
                    </tr>";
                    }
                    ?>
                </tbody>
            </table>
        
        <div id = 'settingsPg' class = 'settingsBox'>
            <span class = 'settingsHead'>Account information</span>
                <div class = 'subSettings'><button class = 'settingsBtn'>Profile</button></div>
                <div class = 'subSettings'><button class = 'settingsBtn'>Notifications</button></div>
            <span class = 'settingsHead'>Support</span>
                <div class = 'subSettings'><button class = 'settingsBtn'>Get help</button></div>
                <div class = 'subSettings'><button class = 'settingsBtn'>Terms and privacy</button></div>
            <span class = 'settingsHead'><button class = 'logoutBtn'>Logout</button></span>
        </div>

        </div>
    </div>
            
    
</body>
</html>