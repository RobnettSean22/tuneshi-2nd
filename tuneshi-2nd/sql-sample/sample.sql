CREATE TABLE users(
user_id SERIAL PRIMARY KEY NOT NULL,
email VARCHAR(255) NOT NULL,
username VARCHAR(30) NOT NULL,
user_password VARCHAR(255) NOT NULL,
first_name VARCHAR(250) NOT NULL,
last_name VARCHAR(250) NOT NULL,
birth_date VARCHAR(250) NOT NULL,
music_abilites VARCHAR(300)
);

INSERT INTO users(email, username, user_password, first_name, last_name, birth_date, music_abilites)
VALUES
('souleater@smokevile', 'souleater', 'beastnation', 'Rick', 'Sanchez', 'Novermber 21 2009', 'lyricist' ),
('bossbabe@smokevile', 'ceo', 'runthis', 'Scarlet', 'Lawrenece', 'October 31 2005', 'bass player' );
SELECT * FROM users