import React , {useState,useEffect} from 'react';
import './App.css';
import axios from "axios";
import TaskForm from './components/TaskForm';


function App() {
  const [tasks, setTasks] = useState([])

const getTasks = () => {
   axios.get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer")

     .then((response) => {
       setTasks(response.data)
     })
     .catch((err) =>{
       console.log(err)
     })
 }

 useEffect(() => {
   getTasks()
 }, [])

 const deleteTask =(id)=> {
     axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer/${id}`)
     .then((response)=>{
        getTasks() 
     })
     .catch((err) =>{
         console.log(err)
     })
 }

 const filterTasksByDay = (day) =>{
   return tasks.filter((task) => {
     return task.day === day
   })
 }

 return(
    <div>
      <TaskForm updateTasks={getTasks}/>
      <section className="secao">
    <div className="semana"
    tasks={ filterTasksByDay('domingo')}> 
      <h3>Domingo</h3>
    <div>
      {tasks.map((task) => {
        return <p key={task.id} >
          {task.text}
          <button onClick ={ () => deleteTask (task.id) }>x</button>
          </p>
        })}
    </div>
    </div>
    <div className="semana"
      tasks={ filterTasksByDay('segunda')}> 
      <h3>Segunda-feira</h3>
    <div>
      {tasks.map((task) => {
        return <p key={task.id} >
          {task.text}
          <button onClick ={ () => deleteTask (task.id) }>x</button>
          </p>
        })}
    </div>
    </div>
    <div className="semana"
      tasks={ filterTasksByDay('terça')}> 
      <h3>Terça-feira</h3>
    <div>
      {tasks.map((task) => {
        return <p key={task.id} >
          {task.text}
          <button onClick ={ () => deleteTask (task.id) }>x</button>
          </p>
        })}
    </div>
    </div>
    <div className="semana"
      tasks={ filterTasksByDay('quarta')}> 
      <h3>Quarta-feira</h3>
    <div>
      {tasks.map((task) => {
        return <p key={task.id}  > 
          {task.text}
          <button onClick ={ () => deleteTask (task.id) }>x</button>
          </p>
        })}
    </div>
    </div>
    <div className="semana"
      tasks={ filterTasksByDay('quinta')}> 
      <h3>Quinta-feira</h3>
    <div>
      {tasks.map((task) => {
        return <p key={task.id} >
          {task.text}
          <button onClick ={ () => deleteTask (task.id) }>x</button>
          </p>
        })}
    </div>
    </div>
    <div className="semana"
      tasks={ filterTasksByDay('sexta')}> 
      <h3>Sexta-feira</h3>
    <div>
      {tasks.map((task) => {
        return <p key={task.id} >
          {task.text}
          <button onClick ={ () => deleteTask (task.id) }>x</button>
          </p>
        })}
    </div>
    </div>
    <div className="semana"
      tasks={ filterTasksByDay('sabado')}> 
      <h3>Sabado</h3>
    <div>
      {tasks.map((task) => {
        return <p key={task.id} >
          {task.text}
          <button onClick ={ () => deleteTask (task.id) }>X</button>
          </p>
        })}
    </div>
    </div>

  </section>
  </div>
  )
}
export default App