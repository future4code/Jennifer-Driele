//Exercício 3

const userTask = process.argv[2];
const taskList = ["Arrumar a Cama","Lavar-Roupa", "Arrumar a Cozinha"];

const showTask =(task) =>{
    taskList.push(task);
  console.table("Tarefa adicionada com sucesso:"+taskList)

};

showTask(userTask);