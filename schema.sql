CREATE TABLE Family2 (
    ID SMALLINT UNSIGNED,
    Name VARCHAR(60),
    Salary DECIMAL (7,2),
    PRIMARY KEY (ID)
);

INSERT INTO Family (ID, Name, Salary)
VALUES
(5, 'Jane Smith', 63000.45),
(6, 'Bob Johnson', 50000.13),
(7, 'Michael Brown',75000.36);

