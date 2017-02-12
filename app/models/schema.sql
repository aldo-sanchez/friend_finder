CREATE DATABASE testHW;
USE testHW;
CREATE TABLE users(
	user_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
    image VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE answers(
	answers_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
	ans1 INT NOT NULL,
    ans2 INT NOT NULL,
    ans3 INT NOT NULL,
    ans4 INT NOT NULL,
    ans5 INT NOT NULL,
    ans6 INT NOT NULL,
    ans7 INT NOT NULL,
    ans8 INT NOT NULL,
    ans9 INT NOT NULL,
    ans10 INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id)    
);


