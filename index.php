<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John's Burguer</title>
    <link href="https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&family=Poppins&family=Roboto&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="./src/assets/favicon.ico" type="image/x-icon">

    <!-- CSS Files -->
    <link rel="stylesheet" href="src/css/global.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/header.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/header-mobile.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/home.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/home-mobile.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/about.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/about-mobile.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/contact.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/contact-mobile.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/food-menu.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/footer.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/footer-mobile.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/modal.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="src/css/modal-mobile.css?v=<?php echo time(); ?>">

    <!-- JS Files -->
    <script defer src="src/js/buttonMobile.js?v=<?php echo time(); ?>"></script>
    <script defer src="src/js/navigation.js?v=<?php echo time(); ?>"></script>
    <script defer type=module src="src/js/food-menu.js?v=<?php echo time(); ?>"></script>
    <script defer type=module src="src/js/food-data.js?v=<?php echo time(); ?>"></script>
    <script defer type=module src="src/js/modal.js?v=<?php echo time(); ?>"></script>
    <script defer src="https://kit.fontawesome.com/583fd2bd34.js" crossorigin="anonymous"></script>
</head>

<body>
    <?php

    include_once('src/includes/header.html');

    include_once('src/includes/home.html');

    include_once('src/includes/about.html');

    include_once('src/includes/food-menu/food-menu.php');

    include_once('src/includes/contact.html');

    include_once('src/includes/footer.html');

    include_once('src/includes/modal.html');

    ?>

    <button class="button-to-up"><i class="fa-solid fa-arrow-up"></i></button>

</body>

</html>