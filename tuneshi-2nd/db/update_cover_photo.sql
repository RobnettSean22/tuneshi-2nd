UPDATE users 
SET cover_photo = $2
WHERE user_id = $1;