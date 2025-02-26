<?php
require_once "Curso.php";

$curso = new Curso();

$curso->insert("php test1", "desc test1", "test1.jpg", "http://test1.com");

print_r($curso->list());

$curso->update(21, "php test2", "desc test2", "test2.jpg", "http://test2.com");

print_r($curso->list());

$curso->delete(22);

?>