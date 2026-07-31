CREATE TABLE readings (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    card_name VARCHAR(100) NOT NULL,
    interpretation TEXT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);