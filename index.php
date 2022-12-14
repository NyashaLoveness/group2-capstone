<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEAKS APP</title>
    <link rel="stylesheet" type="text/css" href="front-end.css?t=<?=filemtime('front-end.css')?>" />
    <script>
    <?php require_once("functions.js");?>
    </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&display=swap" rel="stylesheet">

</head>

<body>
    <div class='main-cont'>
        <div class='content-cont'>
            <div class='sidebar'>
                <button class='homeBtn' onclick='showHome()'>Home</button>
                <button class='settingsBtn' onclick='settingsShow()'>Settings</button>
                <button class='logoutBtn'>Logout</button>
            </div>

            <div id='topbar'>Welcome back!</div>

            <button id='opsBtn' onclick='opsData()'><img id='analytics' src='icons8-analytics-58.png'>Operational
                Data</button>
            <button id='nodesBtn' onclick='nodesData()'><img id='nodesImg' src='icons8-trend-chart-64.png'>Nodes Trend
                Analysis</button>
            <button id='layoutBtn' onclick='showLayout()'><img id='sys' src='icons8-imac-settings-50.png'>System
                Layout</button>
            <button id='ordersBtn' onclick='ordersPg()'><img id='order' src='icons8-engineer-64.png'>Work
                Orders</button>

            <div id='layout' style="position: relative; height: 75%;">
                <iframe id='iframe' title="Hanoi layout" frameborder="0"
                    style="position: absolute; margin-top: 10; left: 20; width: 80%; height: 100%;"
                    src="https://view.genial.ly/63599eea84f06e00183b2ac3" type="text/html" allowscriptaccess="always"
                    allowfullscreen="false" scrolling="no" allownetworking="all">
                </iframe>

            </div>

            <a id='link' href="#allTbls" onclick='showTbls()'>View tables instead?</a>


            <div id='allTbls'>
                <div id='junctionsBox' class='content table-responsive"'>
                    <table id='tblJ' class="table table table-sm table table-hover tblJ table-bordered">
                        <thead class="thead-light text-center">
                            <tr>
                                <th scope="col" class='text-center'>ID</th>
                                <th scope="col" class='text-center'>Elevation</th>
                                <th scope="col" class='text-center'>Demand</th>
                                <th scope="col" class='text-center'>Pattern</th>
                            </tr>
                        </thead>
                        <tbody id='table_body4' class='text-center'>
                            <?php
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
                                    
                                $servername = 'localhost';
                                $username = 'root';
                                $password = '';
                                $database = 'leaks.db';

                                //create connection
                                $connection = new mysqli($servername, $username, $password, $database);

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
                </div>

                <div id='coordsBox' class='content table-responsive"'>
                    <table id='tblCoord' class="table table table-sm table table-hover tblCoord table-bordered">
                        <thead class="thead-light text-center">
                            <tr>
                                <th scope="col" class='text-center'>Node</th>
                                <th scope="col" class='text-center'>X-coordinate</th>
                                <th scope="col" class='text-center'>Y-coordinate</th>
                            </tr>
                        </thead>
                        <tbody id='table_body4' class='text-center trow'>
                            <?php
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
                                        
                                $servername = 'localhost';
                                $username = 'root';
                                $password = '';
                                $database = 'leaks.db';

                                //create connection
                                $connection = new mysqli($servername, $username, $password, $database);

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
                </div>

                <div id='pipesBox' class='content table-responsive"'>
                    <table id='tbl' class="table table table-sm table table-hover table-bordered">
                        <thead id='tblHead' class="thead-light text-center">
                            <tr>
                                <th scope="col" class='text-center'>ID</th>
                                <th scope="col" class='text-center'>Node 1</th>
                                <th scope="col" class='text-center'>Node 2</th>
                                <th scope="col" class='text-center'>Length</th>
                                <th scope="col" class='text-center'>Diameter</th>
                                <th scope="col" class='text-center'>Roughness</th>
                                <th scope="col" class='text-center'>Minor loss</th>
                                <th scope="col" class='text-center'>Status</th>
                            </tr>
                        </thead>
                        <tbody id='table_body' class='text-center'>
                            <?php
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
                
                        $servername = 'localhost';
                        $username = 'root';
                        $password = '';
                        $database = 'leaks.db';

                        //create connection
                        $connection = new mysqli($servername, $username, $password, $database);

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
                </div>
            </div>

            <div id='settingsPg'>
                <button id='acc'>Account information</button><br>
                <button id='profile'>Profile</button><br>
                <button id='notifs'>Notifications</button><br>
                <button id='support' onclick='opsData()'>Support</button><br>
                <button id='terms' onclick='opsData()'>Terms and privacy</button><br>
            </div>

            <div id='ordersForm'>
                <form id='form' action="orders.php" method="POST">
                    <label for="Job ID">Job ID</label><br>
                    <input type="text" id="jobID" name='Job ID'><br>

                    <label for="operator">Operator</label><br>
                    <input type="text" id="operator" name='operator'><br>

                    <label for="date">Date</label><br>
                    <input type="date" id="date" name='date'><br>

                    <label for="details">Details</label><br>
                    <input type="text" id="details" name='details'><br>

                    <button id='submit' type="submit">Add</button>
                    <button id='cancel' type="cancel">Cancel</button>
                </form>
            </div>

            <div id='CRUD'>
                <table class="ordersTable table table table-sm table table-hover table-bordered">
                    <thead class="thead-light text-center">
                        <tr>
                            <th scope="col" class='text-center'>Job ID</th>
                            <th scope="col" class='text-center'>Operator</th>
                            <th scope="col" class='text-center'>Date</th>
                            <th scope="col" class='text-center'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php 
                            include 'read.php'; 
                        ?>
                    </tbody>
                </table>
            </div>

            <div id='ops'>
                <iframe src="https://mpho-godfrey-nkadimeng.shinyapps.io/capstone/" height='100%' width='100%'
                    style="border:none;">

                </iframe>
            </div>

            <div id='nodes'>
                <iframe src="https://mpho-godfrey-nkadimeng.shinyapps.io/App1/" height='100%' width='100%'
                    style="border:none;">
                </iframe>
            </div>






        </div>


    </div>

    </div>
    </div>

</body>

</html>