UPDATE users 
SET profile_photo = $2
WHERE user_id = $1;