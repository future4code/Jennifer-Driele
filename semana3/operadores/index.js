/*Exercício 1

a- false 
b-false
( porque só retorna true se todos os boleanos forem true)
c- true ( o resultado é falsemas quando tem o operador (!) retorna o booleano opsto (true), então true && true =true || true =true)
e- Bolean ( todos as const são Bolean)
*/

/*Exercícios 2

a- undefined 
(quando não tem o valor da variavel)
b- null
(Quando não se tem uma variavel)
c-11
(representa a quantidade de elemntos na array)
d-(representa a posição do elemento [i])
e- (que o seguinte numero é o 19 que fica na posição[1])
f-( posição [6] representa o 9)

*/

//Exercício 1//

let idade1 =  prompt("Qual a sua idade?")
let idade2 = prompt("Qual a idade do seu melhor amigo")

const idade =true
const minhaMensagem =("Sua idade é maior do que a do(a) seu(a) melhor amigo(a)?" + idade)
console.log (minhaMensagem)


const minhaIdade ="32"
const idadeAmigo ="30"
const diferenca = Number(minhaIdade)-Number(idadeAmigo)
console.log (diferenca)

//Exercício 2//


 let usuario2=prompt("Insira um número par?")

 const valorA ="30"
 let resultado = "2"
 let restoDaDivisao =Number(valorA) %Number(resultado)
 console.log (restoDaDivisao)

 /*( Quando o número é par e é dividi por 2 que também e par não tem resto sempre vai ser 0)
   () Quando o inseri um numero impar sempre tem resto na divisão)
*/



 //Exercício 3//

  
let listaDeTarefas =["lavar-roupa", "Cozinhar", "Limpar o chão"]

let usuario=prompt("Quais são sua 3 tarefas que você precisa relizar hoje?")

console.log(listaDeTarefas)

let usuario1=prompt("Qual tarefa você já fez?")


let listaDeTarefas1=["lavar-roupa", "Cozinhar", "Limpar o chão"]
listaDeTarefas1 .splice (0,1)

console.log(listaDeTarefas1)

//Exercício 4//

const Usuarrio2=prompt("Qual o seu e-mail?")
const emailDoUsuario = "jenni@gmail.com"
const nomeDoUsuario = "Jennifer"
const minhaMensagem1 ="O e-mail " + emailDoUsuario + " foi cadastrado com sucesso . Seja bem-vinda," + nomeDoUsuario 
console.log (minhaMensagem1)







