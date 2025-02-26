<?php
require_once "Database.php";

class Curso {
    private $pdo;

    public function __construct() {
        $this->pdo = Database::getConnection();
    }

    public function list() {
        $stmt = $this->pdo->query("SELECT * FROM cursos");
        return $stmt->fetchAll();
    }

    public function insert($titulo, $descricao, $imagem, $slideshow) {
        $stmt = $this->pdo->prepare("INSERT INTO cursos (titulo, descricao, imagem, slideshow) VALUES (?, ?, ?, ?)");
        return $stmt->execute([$titulo, $descricao, $imagem, $slideshow]);
    }

    public function update($id, $titulo, $descricao, $imagem, $slideshow) {
        $stmt = $this->pdo->prepare("UPDATE cursos SET titulo=?, descricao=?, imagem=?, slideshow=? WHERE id=?");
        return $stmt->execute([$titulo, $descricao, $imagem, $slideshow, $id]);
    }

    public function delete($id) {
        $stmt = $this->pdo->prepare("DELETE FROM cursos WHERE id=?");
        return $stmt->execute([$id]);
    }
}
?>
