### Exercício 1

a-) Utilizamos o VARCHAR ,para declarar o  name e o gender , porque está é uma forma de representar umas string
* PRIMARY KEY : é um indetificador unico que todo item deve ter ex:(id)
* DATE: representa uma data.
* NOT NULL: que não pode ser nulo.

b-) SHOW DATABASES: apareceu as informações do meu banco de dados
* SHOW TABLES: apreceu a tabela Actor.

c-)  DESCRIBE Actor: Mostra todos os tipos dos intems da tabela

### Exercício 2

a-)INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES(
  "002", 
  "Gloria Pires",
  120000,
  "1963-08-23", 
  "female"
);
b-)Retornou o (Código de erro: 1062. Duplicado entrada '002' para a chave 'PRIMÁRIA' )
* porque cada item deve possuir um identificador único.

c-) quando acrecentamos algum item a tabela volta o erro(Código de erro: 1136. A contagem de colunas não contagem do valor de correspondência na linha 1 ). 
* porque não foi adicionada no INSERT.
* após os items terem sidos adcionados retornou o icone verde(1 linha (s) afetada (s)).

d-)não me retorna nada - Só após adicionais os item que retorna okay e aparece os dados.

e-)

### EXERCÍCIO 3

a-)SELECT id, name,salary, birth_date from Actor WHERE gender = "female"; 

b-)SELECT salary from Actor WHERE name = "Tony Ramos";

c-)Não apareceu nenhum erro mas no array (todos os items ficaram null)

d-)SELECT id, name, salary from Actor WHERE salary < 500000;

e-) O erro foi(Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos')
* porque (nome está escrito erro pós é name)

*Corrigido
*SELECT id, name from Actor WHERE id = "002"

### EXERCÍCIO 4

a-) è usado para comparar strings (funciona como um filter).

b-)SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c-)SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d-)SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

### EXERCÍCIO 5
