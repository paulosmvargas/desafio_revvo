<?php
class Database {
    private static $pdo;

    public static function getConnection() {
        if (!isset(self::$pdo)) {
            try {
                $host = "172.10.0.3";
                $dbname = "desafio_revvo";
                $user = "root";
                $pass = "desafio_revvo";

                $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
                self::$pdo = new PDO($dsn, $user, $pass, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]);
            } catch (PDOException $e) {
                die("Erro: " . $e->getMessage());
            }
        }
        return self::$pdo;
    }
}
?>