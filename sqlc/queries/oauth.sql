-- name: GetUserByID :one
SELECT * FROM users
WHERE id = $1 LIMIT 1;

-- name: ListUsers :many
SELECT * FROM users
ORDER BY id;

-- name: CreateUser :one
INSERT INTO users (
    username,
    email,
    password,
    role_id
) VALUES (
    $1,
    $2,
    $3,
    $4
)
RETURNING *;

-- name: UpdateUser :exec
UPDATE users SET
    username = $2,
    email = $3,
    password = $4,
    role_id = $5,
    updated_at = CURRENT_TIMESTAMP
WHERE id = $1
RETURNING *;

-- name: DeleteUser :exec
DELETE FROM users
WHERE id = $1;

-- name: GetRoleByID :one
SELECT * FROM roles
WHERE id = $1 LIMIT 1;

-- name: ListRoles :many
SELECT * FROM roles
ORDER BY id;

-- name: CreateRole :one
INSERT INTO roles (
    name,
    description
) VALUES (
    $1,
    $2
)
RETURNING *;

-- name: UpdateRole :exec
UPDATE roles SET
    name = $2,
    description = $3,
    updated_at = CURRENT_TIMESTAMP
WHERE id = $1
RETURNING *;

-- name: DeleteRole :exec
DELETE FROM roles
WHERE id = $1;
