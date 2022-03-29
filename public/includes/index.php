<?php
    require("connect.php");
    require("functions.php");

    $id = isset($_GET["id"]) ? $_GET["id"] : null;
    $result = getData($pdo, $id);

   echo json_encode($result);