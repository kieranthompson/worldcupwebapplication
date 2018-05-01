<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"worldcup2018");

$result = mysqli_query($connection,"SELECT * FROM tables ORDER BY Pts DESC");

$rs = array();
$i=0;
while($rs[] = mysqli_fetch_assoc($result)) {
// do nothing ;-)
}

$result2 = mysqli_query($connection,"SELECT * FROM teams ORDER BY Stage, Name DESC");

$rs2 = array();
$j=0;
while($rs2[] = mysqli_fetch_assoc($result2)) {
// do nothing ;-)
}
mysqli_close($connection);

unset($rs[count($rs)-1]);
unset($rs2[count($rs)-1]); //removes a null value

print("{ \"tables\":" . json_encode($rs) . " , \"teams\":" . json_encode($rs2) . "}");
?>

