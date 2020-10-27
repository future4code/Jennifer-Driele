### EXERCÍCIO 1

a-)ALTER TABLE Actor DROP COLUMN salary;
* ele remove a coluna , mas é possivel reverter.

b-)ALTER TABLE Actor DROP COLUMN salary;
* 

c-)ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
* altera a coluna gender para que aceite outros valores.

d-)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


### EXERCÍCIO 2

a-)UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
b-) 
* UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

* UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

c-)UPDATE Actor
SET 
		name = "Moacyr Franco",
		birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";

d-)UPDATE Actor
SET 
		name = "Maria Franco",
		birth_date = "2020-02-10",
    salary = 600000,
    gender = "female"
WHERE id = "015";
* Ele não deu erro mas todo o seu resultado na tabela voltou null.

### EXERCÍCIO 3

a-)DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b-)DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;

### EXERCÍCIO 4

a-)SELECT MAX(salary) FROM Actor;

b-)SELECT MIN(salary) FROM Actor WHERE gender = "female";

c-)SELECT COUNT(*) FROM Actor WHERE gender = "female";

d-)SELECT SUM(salary) FROM Actor;

### EXERCÍCIO 5

a-)Ele retornou quantos gêneros male e female existem na tabela
b-)SELECT id, name FROM Actor
ORDER BY name DESC;

c-)SELECT * FROM Actor
ORDER BY salary;

d-)SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e-)SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### EXERCÍCIO 6

a-)ALTER TABLE Movie ADD playing_limit_date DATE;

b-)ALTER TABLE Movie CHANGE rating rating FLOAT;

c-)UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

d-)
* DELETE FROM Movie WHERE id = "001";
* UPDATE Movie
SET
	id = "001"
WHERE id = "001";
* Ele atualizou normalmente como se o filme não tivesse sido deletado (o DELETE , não deleta definitivamente).

### EXERCÍCIO 7

a-)SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b-)SELECT AVG(rating) FROM Movie;

c-)SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

d-)SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();

e-)SELECT MAX(rating) FROM Movie;

f-)SELECT MIN(rating) FROM Movie;

### EXERCICIO 8

a-)SELECT * FROM Movie ORDER BY title;

b-)SELECT * FROM Movie ORDER BY title LIMIT 5;

c-)SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

d-)SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;