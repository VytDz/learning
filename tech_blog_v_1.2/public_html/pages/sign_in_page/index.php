<div class='wrapperSignIn'>
    <div class='wrapperSignIn__header'>
        <?php include_once __DIR__."/../../components/header/index.php"; ?>
            <div class='wrapperSignIn__elements__catTab'>
                <?php include_once __DIR__."/../../components/categories_tab/index.php"; ?>
            </div>
    </div>
    <div class='wrapperSignIn__elements'>
        <div class='wrapperSignIn__elements__main'>
            <form name="valForm" action="./action.php" onsubmit="return validation();" method='post'>
            <h2>Username</h2>
            <input required type="text"/>
            <h2>Password</h2>
            <input required type="password"/>
            <button type="submit" value="Submit">Sign In</button>
            </form>
        </div>
    </div>
</div>

<script src="../../libs/js/validation.js"></script>