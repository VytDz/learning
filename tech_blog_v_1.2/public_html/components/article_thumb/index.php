<?php
    getRandomArticles();


?>
    <a href="../../pages/article_page/index.php" class='articleHome'>
        <img src="<?php echo $_SESSION["img"]; ?>" alt="thumbnail of a picture"/>
        <div class='articleHome__text'>
            <h2><?php echo $_SESSION["heading"]; ?></h2>
            <p><?php echo $_SESSION["text"]; ?></p>
        </div>
    </a>
