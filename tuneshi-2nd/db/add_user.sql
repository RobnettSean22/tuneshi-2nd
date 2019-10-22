INSERT INTO users(email, username, user_password, first_name, last_name, birth_date, music_abilities)
VALUES
($1, $2, $3, $4, $5, $6, $7);
SELECT * FROM users;