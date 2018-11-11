<?php
session_start();
session_unset();

include_once __DIR__ . "/../../libs/php/db_connection.php";

function getRandomArticles()
{
    $db = new DBConnection();
    $conn = $db->getConnection();


    $articles = $conn->query("SELECT `heading`,`article`,`img` FROM `articles` WHERE `category` = 'coding' ORDER BY `articles`.`date` ASC ;");

    $articlesArr = $articles->fetch_all();

    $conn->close();

    $randomId = rand(1, (count($articlesArr) - 1));

    $randomArticle = $articlesArr[$randomId];

    $_SESSION["text"] = $randomArticle[1];
    $_SESSION["heading"] = $randomArticle[0];
    $_SESSION["img"] = $randomArticle[2];

}


?>

<?php include_once __DIR__ . "/../../components/header/index.php"; ?>
<?php include_once __DIR__ . "/../../components/categories_tab/index.php"; ?>
<div id="coding" class="thumb-block">
    <div><?php include __DIR__ . "/../../components/article_thumb/index.php"; ?></div>
    <div><?php include __DIR__ . "/../../components/article_thumb/index.php"; ?></div>
    <div><?php include __DIR__ . "/../../components/article_thumb/index.php"; ?></div>
    <div><?php include __DIR__ . "/../../components/article_thumb/index.php"; ?></div>
    <div><?php include __DIR__ . "/../../components/article_thumb/index.php"; ?></div>
    <div><?php include __DIR__ . "/../../components/article_thumb/index.php"; ?></div>
</div>
