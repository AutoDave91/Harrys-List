INSERT INTO posts (title, description, image_URL, user_id)
VALUES ($1, $2, $3, $4)
RETURNING *