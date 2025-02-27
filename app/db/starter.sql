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
('Arquitetura', 'Estudo do design, planejamento e construção de espaços urbanos e edificações.', 'https://picsum.photos/600/400', 'http://localhost:81/arquitetura'),
('Filosofia dos Simpsons', 'Análise de conceitos filosóficos aplicados aos episódios da série Os Simpsons, explorando temas de ética, política e existencialismo.', 'https://picsum.photos/600/400', 'http://localhost:81/filosofia-dos-simpsons'),
('Nanotecnologia Aplicada', 'Exploração de materiais e tecnologias em escala nanométrica para diversas indústrias.', 'https://picsum.photos/600/400', 'http://localhost:81/nanotecnologia-aplicada'),
('Astronomia', 'Investigação de corpos celestes, fenômenos cósmicos e o universo como um todo.', 'https://picsum.photos/600/400', 'http://localhost:81/astronomia'),
('Forense Digital', 'Análise de crimes cibernéticos, recuperação de dados e segurança digital.', 'https://picsum.photos/600/400', 'http://localhost:81/forense-digital'),
('Panificação Profissional', 'Técnicas para produção de pães artesanais e industriais com fermentação natural e química.', 'https://picsum.photos/600/400', 'http://localhost:81/panificacao-profissional'),
('Robótica Educacional', 'Desenvolvimento de projetos com robôs para ensino de programação e engenharia.', 'https://picsum.photos/600/400', 'http://localhost:81/robotica-educacional'),
('Ilustração Digital', 'Criação de arte digital utilizando softwares como Photoshop e Illustrator.', 'https://picsum.photos/600/400', 'http://localhost:81/ilustracao-digital'),
('Mergulho Técnico', 'Técnicas avançadas para mergulhos profundos, exploração subaquática e resgates.', 'https://picsum.photos/600/400', 'http://localhost:81/mergulho-tecnico'),
('Energias Renováveis', 'Estudo de fontes sustentáveis como solar, eólica e biomassa para geração de energia.', 'https://picsum.photos/600/400', 'http://localhost:81/energias-renovaveis'),
('Criptografia Quântica', 'Estudo de técnicas de segurança baseadas em princípios da mecânica quântica, garantindo comunicações ultra seguras contra ataques computacionais.', 'https://picsum.photos/600/400', 'http://localhost:81/criptografia-quantica');
