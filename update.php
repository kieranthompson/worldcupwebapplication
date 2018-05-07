<?php
    $conn = mysqli_connect('localhost', 'root', '');

    mysqli_select_db($conn, 'worldcup2018');

$update_sql = "UPDATE matches SET Team1Win='$_POST[team1win]', Draw='$_POST[draw]', Team2Win='$_POST[team2win]' WHERE MatchID='$_POST[id]'"; 


    if(mysqli_query($conn, $update_sql)) 
            header("refresh:1; url=MatchOddsUpdate.php");
        else
            echo "Not Updated";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Updating Database</title>
</head>
<body>
    Loading please wait....
</body>
</html>