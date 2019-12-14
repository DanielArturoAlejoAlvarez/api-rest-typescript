CREATE DATABASE api_rest_typescript;

CREATE TABLE posts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(128) NOT NULL, 
    description VARCHAR(256) NOT NULL,
    body TEXT NOT NULL,
    picture VARCHAR(512),
    state BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DESCRIBE post;