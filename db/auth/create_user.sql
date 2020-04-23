INSERT INTO users (name, address, email, password)
VALUES ($1, $2, $3, $4);

SELECT * FROM users
WHERE email = $3;