USE statement_db;

INSERT INTO users (email, password, username, first_name, last_name)
VALUES ("kiara@example.com", "babysnakes3", "kneve327", "kiara", "perez");

INSERT INTO posts (post_header, post_body, giphy_URL, UserId)
VALUES ("Introduction", "Greetings to all!", "https://media.giphy.com/media/1108D2tVaUN3eo/giphy.gif", 1);


INSERT INTO comments (comment_body, PostID)
VALUES ("check", 1);