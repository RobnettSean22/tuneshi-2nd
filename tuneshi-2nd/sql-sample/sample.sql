CREATE TABLE users(
user_id SERIAL PRIMARY KEY NOT NULL,
username VARCHAR(30) NOT NULL,
password VARCHAR(30) NOT NULL,
first_name VARCHAR(250) NOT NULL,
last_name VARCHAR(250) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
email VARCHAR(30) NOT NULL,
birth_date VARCHAR(50),
date_created DATE DEFAULT Now(),
about VARCHAR(2000),
profile_photo VARCHAR(300),
cover_photo VARCHAR(300)
);

INSERT INTO users(username, password, first_name, last_name, phone_number, email, birth_date, about)
VALUES
('souleater', 'beastnation', 'Sean', 'Robnett', '720-331-5251', 'souleater@gmail.com', 'Apr/1/04', 'I am Sean!!'),
('amazbals', 'trackanimal', 'Shant', 'Comuppings', '820-661-6261', 'trackanimal@gmail.com', 'Apr/1/04', 'I am Shant!!');
SELECT * FROM users;

CREATE TABLE posts(
    post_id SERIAL NOT NULL,
    user_id INT NOT NULL,
    comment VARCHAR(2000),
    date_created DATE DEFAULT Now(),
    date_updated DATE NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)    
);

INSERT INTO posts(comment, user_id, date_created)
VALUES
('hello world do you hear ya boy', 1, '2019-10-22'),
('hello world do you hear ya girl', 1, '2019-10-22');
SELECT * FROM posts;