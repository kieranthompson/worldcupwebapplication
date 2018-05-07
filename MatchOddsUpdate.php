<?php

    $conn = mysqli_connect('localhost', 'root', '');

    mysqli_select_db($conn, 'worldcup2018');

    $select_sql = "SELECT * FROM matches";
    $records = mysqli_query($conn, $select_sql);


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Match Odds Update</title>
</head>
<nav>
    <a href="TeamsAjax.html"> Teams  </a> |
    <a href="Groups.html"> Groups </a> |
    <a href="FilterMatches.html"> Filter Matches </a> |
    <a href="MatchesInPlay.html"> Matches In Play </a> |
    <a href="MatchOddsUpdate.php"> Match Odds Update </a> | 
    <a href="GroupOfDeath.html"> Group Of Death Visual</a> | 
    <a href="MatchOddsVisual.html"> Match Odds Visual </a>
</nav>
<body>
    <hr>
    <h1>Match Odds Update [PHP]</h1>
    <table border=1>
        <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Stage</th>
            <th></th>
            <th>Team1</th>
            <th>1</th>
            <th></th>
            <th>X</th>
            <th></th>
            <th>2</th>
            <th></th>
            <th>Team2</th>
            <th></th>
            <th>Prediction</th>
        </tr>

        <?php
            while($row = mysqli_fetch_array($records)) {
                echo "<tr><form action=update.php method=post>";
                echo "<td>". $row['Date']."</td>";
                echo "<td>". $row['Time']."</td>";
                echo "<td>". $row['Stage']."</td>";
                echo "<td><img style='height: 20px; width: 40px' src='img/". strtolower(substr($row['Team1'],0,3)).".jpg'></td>";
                echo "<td>". $row['Team1']."</td>";
                echo "<td><input type=text name=team1win value='". $row['Team1Win']."'></td>";
                echo "<td><input type=submit value='update'></td>";
                echo "<td><input type=text name=draw value='". $row['Draw']."'></td>";
                echo "<td><input type=submit value='update'></td>";
                echo "<td><input type=text name=team2win value='". $row['Team2Win']."'></td>";
                echo "<td><input type=submit value='update'></td>";
                echo "<td>". $row['Team2']."</td>";
                echo "<td><img style='height: 20px; width: 40px' src='img/". strtolower(substr($row['Team2'],0,3)).".jpg'></td>";
                echo "<td>". $row['Prediction']."</td>";
                echo "<input type=hidden name=id value='".$row['MatchID']."'>";
                echo "</form></tr>";
            }
        
        ?>
    </table>
    
</body>
<hr>
<footer style="text-align: center">&copy;L00118651</footer>
</html>