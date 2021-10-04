-- 1
DROP VIEW IF EXISTS film_with_categories;
CREATE VIEW film_with_categories AS
    SELECT 
        f.title, c.category_id, c.name
    FROM
        film AS f
            JOIN
        film_category AS fc ON f.film_id = fc.film_id
            JOIN
        category AS c ON c.category_id = fc.category_id
	ORDER BY f.title;
    
SELECT * FROM film_with_categories;

-- 2
DROP VIEW IF EXISTS film_info;
CREATE VIEW film_info AS
	SELECT
		a.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS actor,
        f.title
	FROM
		film AS f
			JOIN
		film_actor AS fa ON f.film_id = fa.film_id
			JOIN
		actor AS a ON a.actor_id = fa.actor_id
	ORDER BY actor;

SELECT *  FROM film_info;

-- 3
DROP VIEW IF EXISTS address_info;
CREATE VIEW address_info AS
	SELECT
		a.address_id,
        a.address,
        a.district,
        c.city_id,
        c.city
	FROM
		address AS a
			JOIN
		city AS c ON a.city_id = c.city_id
	ORDER BY c.city;
    
SELECT *  FROM address_info;

-- 4
DROP VIEW IF EXISTS movie_languages;
CREATE VIEW movie_languages AS
	SELECT
        f.title,
		l.language_id,
        l.name AS language
	FROM
		language AS l
			JOIN
		film AS f ON l.language_id = f.language_id
	ORDER BY f.title;

SELECT * FROM movie_languages;