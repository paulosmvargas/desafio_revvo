<?php
header("Content-Type: application/json");
require_once "Database.php";

$pdo = Database::getConnection();
$method = $_SERVER['REQUEST_METHOD'];

$id = $_REQUEST['id'] ?? null;
$input = json_decode(file_get_contents("php://input"), true);

if ($method == "GET") {
    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM cursos WHERE id = ? ORDER BY titulo ASC");
        $stmt->execute([$id]);
        echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
    } else {
        $stmt = $pdo->query("SELECT * FROM cursos ORDER BY titulo ASC");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
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