<?php
    $conn = mysqli_connect('localhost', 'root', '');

    mysqli_select_db($conn, 'worldcup2018');

    $update_sql = "UPDATE matches SET Team1Win='$_POST[team1win]' WHERE MatchID='$_POST[id]'"; 

    if(mysqli_query($conn, $update_sql)) 
            header("refresh:1; url=MatchOddsUpdate.php");
        else
            echo "Not Updated";

?>