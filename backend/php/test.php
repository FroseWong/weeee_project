<?php
$array = ["type1", "type2"];
$result = "(";

for($i = 0; $i < count($array); $i++){
    if(strlen($result) != 1){
        $result = $result . ",";
    }
    $result = $result . "'$array[$i]'";
}

$result = $result.")";

echo $result; // ('type1', 'type2')

?>
