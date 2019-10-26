SELECT * FROM users
INNER JOIN posts
ON user.user_id = post.user_id;