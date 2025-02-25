<?php
class Database {
    private static $pdo;

    public static function getConnection() {
        if (!isset(self::$pdo)) {
            try {
                $host = "0.0.0.0";
                $dbname = "desafio_revvo";
                $user = "root";
                $pass = "desafio_revvo";
                $port = 6033;

                $dsn = "mysql:host=$host;dbname=$dbname;port=$port;charset=utf8mb4";
                self::$pdo = new PDO($dsn, $user, $pass, $port, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]);
            } catch (PDOException $e) {
                die("Erro na conexão: " . $e->getMessage());
            }
        }
        return self::$pdo;
    }
}
?>
