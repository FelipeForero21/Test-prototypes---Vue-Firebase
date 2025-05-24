-- DDL
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  state ENUM('pendiente', 'completada') NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- DML:

INSERT INTO users (name, email) VALUES 
('Felipe Forero', 'elipeforero21@gmail.com'),
('Emilse Paez', 'emily1243@gmail.com'),
('Marta Forero', 'martafore32@gmail.com');

INSERT INTO task (title, state, user_id) VALUES
('Tarea 1', 'pendiente', 1),
('Tarea 2', 'pendiente', 1),
('Tarea 3', 'completada', 2),
('Tarea 4', 'pendiente', 3),
('Tarea 5', 'pendiente', 2);

-- DML
SELECT u.name, COUNT(t.id) AS task_pending
FROM users u
LEFT JOIN task t ON u.id = t.user_id AND t.state = 'pendiente'
GROUP BY u.id, u.name;

UPDATE task
SET state = 'completada'
WHERE user_id = 2;
