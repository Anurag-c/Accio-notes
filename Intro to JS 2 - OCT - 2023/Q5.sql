CREATE TABLE CAR (
    Serial_no INT PRIMARY KEY,
    Model TEXT,
    Manufacturer TEXT,
    Price REAL
);

CREATE TABLE OPTION (
    Serial_no INT,
    Option_name TEXT,
    Price REAL,
    FOREIGN KEY (Serial_no) REFERENCES CAR(Serial_no)
);

CREATE TABLE SALESPERSON (
    Salesperson_id INT PRIMARY KEY,
    Name TEXT,
    Phone TEXT
);

CREATE TABLE SALE (
    Salesperson_id INT,
    Serial_no INT,
    Date DATE,
    Sale_price REAL,
    FOREIGN KEY (Salesperson_id) REFERENCES SALESPERSON(Salesperson_id),
    FOREIGN KEY (Serial_no) REFERENCES CAR(Serial_no)
);

-- Sample data for CAR
INSERT INTO CAR (Serial_no, Model, Manufacturer, Price) VALUES
    (1, 'Sedan', 'Toyota', 25000.00),
    (2, 'SUV', 'Ford', 30000.00);

-- Sample data for OPTION
INSERT INTO OPTION (Serial_no, Option_name, Price) VALUES
    (1, 'Leather Seats', 1500.00),
    (1, 'Sunroof', 1000.00),
    (2, 'Navigation System', 1200.00);

-- Sample data for SALESPERSON
INSERT INTO SALESPERSON (Salesperson_id, Name, Phone) VALUES 
(101, 'John Doe', '555-1234'),
(102, 'Jane Smith', '555-5678');

-- Sample data for SALE
INSERT INTO SALE (Salesperson_id, Serial_no, Date, Sale_price) VALUES
    (101, 1, '2023-01-15', 26500.00),
    (102, 2, '2023-01-20', 31200.00);


