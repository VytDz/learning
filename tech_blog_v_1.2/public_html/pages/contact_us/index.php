<?php

include_once __DIR__."/../../components/header/index.php";
include_once __DIR__."/../../components/categories_tab/index.php";

?>

<form action="./CreateUser.php?action=send" method='post'>
    <input name="usernname" type="text" required placeholder="Username">
    <input name="email" type="email" required placeholder="Your email">
    <input name="message" type="text" required placeholder="Your message">
    <button type="submit" value="Submit">Send Message</button>
</form>
