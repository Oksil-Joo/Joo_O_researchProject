<?php
    // store the processed results in a variable
    $result = array();

    function getProfData($conn, $prof) {
        if (is_null($prof)) {
            $query = "SELECT * FROM profs";
        } else {
            $query = "SELECT * FROM profs WHERE id='".$prof."'";
        }

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }