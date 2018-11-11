<?php
session_start();
include_once __DIR__."/../../libs/php/randomArticleHandler.php"
?>

<div class='wrapperHome'>
    <div class='wrapperHome__header'>
        <?php
            include_once __DIR__."/../../components/header/index.php";
        ?>
    </div>
    <div class='wrapperHome__elements'>
        <div class='wrapperHome__elements__main'>
            <?php
                include_once __DIR__."/../../components/categories_tab/index.php";
                include __DIR__ . "/../../components/article_thumb/index.php";
                include __DIR__ . "/../../components/article_thumb/index.php";
                include __DIR__ . "/../../components/article_thumb/index.php";
                include __DIR__ . "/../../components/article_thumb/index.php";

            ?>
        </div>
        <div class='wrapperHome__elements__aside'>
            <?php
                include_once __DIR__."/../../components/twitter_feed/index.php";
            ?>
        </div>
    </div>
    <?php include_once __DIR__."/../../components/footer/index.php"; ?>
</div>
