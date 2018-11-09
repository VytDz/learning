<?php
//
//include_once __DIR__ . "/../../libs/php/db_connection.php";
//
//function insertArticle() {
//    $db = new DBConnection();
//    $conn = $db->getConnection();
//
//
//    $stmt = $conn->prepare("INSERT INTO `projektas`.`articles` (id, category, heading, article, date) VALUES (?, ?, ?, ?, ?)");
//
//    if (isset($_REQUEST["action"]) && $_REQUEST["action"] == "add") {
//        $id = NULL;
//        $category = $_REQUEST["category"];
//        $heading = $_REQUEST["heading"];
//        $article = $_REQUEST["article"];
//        $date = NULL;
//    }
//
//    $stmt->bind_param("sss", $id,$category, $heading, $article,$date);
//    $stmt->execute();
//    $stmt->close();
//    $conn->close();
//}
//
//insertArticle();
//
//?>
<!---->
<!--<script> window.onload = function () {window.location.href = "../../index.php";};</script>-->
