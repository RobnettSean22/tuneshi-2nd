UPDATE posts
SET comment = $2
WHERE post_id = $1;

