DROP DATABASE IF EXISTS zoo;

CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE location(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    location VARCHAR(50) NOT NULL
);

CREATE TABLE specie(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    specie VARCHAR(50) NOT NULL
);

CREATE TABLE manager(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE caretaker(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
	manager_id INT NOT NULL,
    
    FOREIGN KEY (manager_id) REFERENCES manager (id)
);

CREATE TABLE animal(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    specie_id INT NOT NULL,
    genre VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    location_id INT NOT NULL,
    
    FOREIGN KEY (specie_id) REFERENCES specie (id),
    FOREIGN KEY (location_id) REFERENCES location (id)
);

CREATE TABLE animal_caretaker(
	animal_id INT NOT NULL,
    caretaker_id INT NOT NULL,
    
    CONSTRAINT PRIMARY KEY (animal_id, caretaker_id),
    FOREIGN KEY (animal_id) REFERENCES animal (id),
    FOREIGN KEY (caretaker_id) REFERENCES caretaker (id)
);
