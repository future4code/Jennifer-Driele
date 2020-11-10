### EXERCÍCIO 1

a-)quando  você relaciona ou referencia uma tabela com a outra .
* ex:FOREIGN KEY que sempre se referencia a uma PRIMARY KEY da outra tabela.

b-)INSERT INTO Rating (movie_id,name , actor_id,name ,rate, comment,) 
VALUES (
		"001",
    "Jogos Vorazes",
    "004",
    "Jennifer Laurence",
    7,
	"Muito bom!"	
);
c-)
d-)ALTER TABLE Movies DROP COLUMN rate;
e-)

### EXERCÍCIO 2

a-)São duas tabelas difentes com valores diferentes. e se alguma das colunas é lida ou alterada não afeta uma a outra. os resultados são mostrados juntos.

b-)INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);

c-)

d-)DELETE FROM Actor WHERE name = "Jennifer Laurence"
* o nome do ator é apagado mas não definitivamente. 

### EXERCÍCIO 3

a-)retorna os registros relacionados nas duas tabelas

b-)SELECT m.id as movie_id, m.name, a.id as actor_id,a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id 
JOIN Actor a ON a.id = mc.actor_id;

### EXERCÍCIO 4

a-)SELECT m.id as movie_id, m.name, m.rate as rate, m.comment as rating_comment
FROM Movies m
LEFT JOIN Movies m ON m.id = m.movie_id;

b-)SELECT m.id as movie_id, m.name, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

c-)SELECT AVG(m.rate), m.movie_id, m.name FROM Movies m
LEFT JOIN Movies m ON m.movie_id = m.movie_id
GROUP BY (m.movie_id);

### Exercício 5

a-)

b-)SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

c-)SELECT 
		m.id as movie_id, 
    m.name, 
    a.id as actor_id, 
    a.name, 
    m.rate, 
    m.comment 
FROM Movies m
LEFT JOIN Movies on m.movie_id = m.movie_id
LEFT JOIN MovieCast mc ON mc.movie_id = mc.movie_id
JOIN Actor a ON a.actor_id = a.actor_id;


### EXERCÍCIO 6

a-)os elementos de uma  das tabelas relacionam com vários da outra tabela, vários produtos se referem a várias usuários, então apenas uma chave estrangeira não resolve.
b-)
c-)
d-)

