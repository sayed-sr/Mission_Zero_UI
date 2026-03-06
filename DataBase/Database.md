<!-- ====================================================== DataBase_01 ====================================================== -->
CREATE DATABASE minuszero_db;
USE minuszero_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, password)
VALUES ('minuszero@gmail.com', 'dbms');

select * from users



<!-- ====================================================== DataBase_02 ====================================================== -->
CREATE TABLE raw_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    form_id VARCHAR(100),
    user_name VARCHAR(100),
    email VARCHAR(150),
    file_type VARCHAR(50),
    file_size INT,
    submission_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO raw_data 
(form_id, user_name, email, file_type, file_size)
VALUES
('FORM001','Rahim','rahim@gmail.com','CSV',120),
('FORM001','Karim','karim@gmail.com','Audio',85),
('FORM001','Jamal','jamal@gmail.com','Image',45),
('FORM001','Hasan','hasan@gmail.com','JSON',30);

select * from raw_data


<!-- ====================================================== DataBase_03 ====================================================== -->
CREATE TABLE processed_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    raw_data_id INT,
    cleaned_name VARCHAR(100),
    cleaned_email VARCHAR(150),
    detected_file_type VARCHAR(50),
    processing_status VARCHAR(50),
    ml_accuracy DECIMAL(5,2),
    processed_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (raw_data_id) REFERENCES raw_data(id)
);

INSERT INTO processed_data
(raw_data_id, cleaned_name, cleaned_email, detected_file_type, processing_status, ml_accuracy)
VALUES
(1,'Rahim','rahim@gmail.com','CSV','Processed',92.5),
(2,'Karim','karim@gmail.com','Audio','Processed',90.2);

select * from raw_data