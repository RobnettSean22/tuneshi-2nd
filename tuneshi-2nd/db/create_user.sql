INSERT INTO users(username, password, first_name, last_name, phone_number, email, birth_date, about)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8);
SELECT * FROM users