-- 1
SHOW COLUMNS FROM locations;

ALTER TABLE locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40);

SELECT * FROM locations;

-- 2
SHOW COLUMNS FROM regions;

ALTER TABLE regions CHANGE REGION_NAME REGION VARCHAR(25);

SELECT * FROM regions;

-- 3
SHOW COLUMNS FROM countries;

ALTER TABLE countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40);

SELECT * FROM countries;