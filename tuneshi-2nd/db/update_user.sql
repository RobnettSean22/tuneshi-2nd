UPDATE users
SET username = $2, password = $3, first_name = $4, last_name = $5, phone_number = $6, email = $7, birth_date = $8, about = $9
WHERE user_id = $1;

