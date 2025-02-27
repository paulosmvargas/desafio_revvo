CREATE DATABASE IF NOT EXISTS desafio_revvo;
USE desafio_revvo;

CREATE TABLE IF NOT EXISTS cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    imagem VARCHAR(255),
    slideshow VARCHAR(255)
);

INSERT INTO cursos (titulo, descricao, imagem, slideshow) VALUES
('Arquitetura', 'Estudo do design, planejamento e construcao de espacos urbanos e edificacoes.', 'https://picsum.photos/600/400?random=1', 'http://localhost:81/arquitetura'),
('Filosofia dos Simpsons', 'Analise de conceitos filosoficos aplicados aos episodios da serie Os Simpsons, explorando temas de etica, politica e existencialismo.', 'https://picsum.photos/600/400?random=2', 'http://localhost:81/filosofia-dos-simpsons'),
('Nanotecnologia Aplicada', 'Exploracao de materiais e tecnologias em escala nanometrica para diversas industrias.', 'https://picsum.photos/600/400?random=3', 'http://localhost:81/nanotecnologia-aplicada'),
('Astronomia', 'Investigacao de corpos celestes, fenomenos cosmicos e o universo como um todo.', 'https://picsum.photos/600/400?random=4', 'http://localhost:81/astronomia'),
('Forense Digital', 'Analise de crimes ciberneticos, recuperacao de dados e seguranca digital.', 'https://picsum.photos/600/400?random=5', 'http://localhost:81/forense-digital'),
('Panificacao Profissional', 'Tecnicas para producao de paes artesanais e industriais com fermentacao natural e quimica.', 'https://picsum.photos/600/400?random=6', 'http://localhost:81/panificacao-profissional'),
('Robotica Educacional', 'Desenvolvimento de projetos com robos para ensino de programacao e engenharia.', 'https://picsum.photos/600/400?random=7', 'http://localhost:81/robotica-educacional'),
('Ilustracao Digital', 'Criacao de arte digital utilizando softwares como Photoshop e Illustrator.', 'https://picsum.photos/600/400?random=8', 'http://localhost:81/ilustracao-digital'),
('Mergulho Tecnico', 'Tecnicas avancadas para mergulhos profundos, exploracao subaquatica e resgates.', 'https://picsum.photos/600/400?random=9', 'http://localhost:81/mergulho-tecnico'),
('Energias Renovaveis', 'Estudo de fontes sustentaveis como solar, eolica e biomassa para geracao de energia.', 'https://picsum.photos/600/400?random=10', 'http://localhost:81/energias-renovaveis'),
('Criptografia Quantica', 'Estudo de tecnicas de seguranca baseadas em principios da mecanica quantica, garantindo comunicacoes ultra seguras contra ataques computacionais.', 'https://picsum.photos/600/400?random=11', 'http://localhost:81/criptografia-quantica');