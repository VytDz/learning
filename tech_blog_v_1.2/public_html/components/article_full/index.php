<?php session_start() ?>
<article class='articleFull'>
    <img src="<?php echo $_SESSION["img"]; ?>" alt="thumbnail of a picture"/>
    <div class='articleFull__text'>
        <h2><?php echo $_SESSION["heading"]; ?></h2>
        <p>
            <?php echo $_SESSION["text"]; ?>
        </p>
    </div>
</article>

<?php session_destroy(); ?>