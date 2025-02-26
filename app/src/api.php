<?php
header("Content-Type: application/json");
require_once "Database.php";

$pdo = Database::getConnection();
$method = $_SERVER['REQUEST_METHOD'];

$id = $_GET['id'] ?? null;
$input = json_decode(file_get_contents("php://input"), true);

if ($method == "GET") {
    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM cursos WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode($stmt->fetch());
    } else {
        $stmt = $pdo->query("SELECT * FROM cursos");
        echo json_encode($stmt->fetchAll());
    }
}

if ($method == "POST") {
    $stmt = $pdo->prepare("INSERT INTO cursos (titulo, descricao, imagem, slideshow) VALUES (?, ?, ?, ?)");
    $stmt->execute([$input['titulo'], $input['descricao'], $input['imagem'], $input['slideshow']]);
    echo json_encode(["message" => "Curso criado", "id" => $pdo->lastInsertId()]);
}

if ($method == "PUT" && $id) {
    $stmt = $pdo->prepare("UPDATE cursos SET titulo=?, descricao=?, imagem=?, slideshow=? WHERE id=?");
    $stmt->execute([$input['titulo'], $input['descricao'], $input['imagem'], $input['slideshow'], $id]);
    echo json_encode(["message" => "Curso atualizado"]);
}

if ($method == "DELETE" && $id) {
    $stmt = $pdo->prepare("DELETE FROM cursos WHERE id=?");
    $stmt->execute([$id]);
    echo json_encode(["message" => "Curso deletado"]);
}
?>
