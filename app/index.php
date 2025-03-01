<!DOCTYPE html>
<?php
require_once "config.php";
?>

<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio Revvo</title>
    <link rel="stylesheet" href="src/css/style.min.css">
    <link rel="stylesheet" href="src/css/slideshow.css">
</head>

<body class="wrapper">
    <div class="main-content">
        <?php include 'header.php'; ?>
        <?php include 'slideshow.php'; ?>

        <main>
            <div id="cursos-container" class="grid-container"></div>
        </main>

        <?php include 'modal.php'; ?>
        <?php include 'footer.php'; ?>
    </div>

    <script src="src/js/script.js"></script>
    <script src="src/js/slideshow.js"></script>
</body>

</html>