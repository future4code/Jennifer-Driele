import React , {useState,useEffect} from 'react';
import '../App.css';
import axios from "axios"
function Post () {

     
const [task, setTask] = useState([])

const getTasks = () => {
   axios.get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer")

     .then((response) => {
       setTask(response.data)
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

 const taskDays =(day) =>{
     const renderDays = task.map((task)=>{
         if(task.day === day) {
             return(
                 <div>
                     <p>
                         {task.text} {''}
                         <button onClick ={() =>deleteTask(task.id)}>x</button>
                     </p>
                 </div>
             )
         }
     })
     return renderDays
 }
//  const tasksDay = task.filter ((item) =>{
//      return item.day === "Domingo";
//  })

//  return( 
//     <div>
//         <h2>Domingo</h2>
//         <h3>Total de Atividade:{tasksDay.length}</h3>
//         {tasksDay.map((element,index) =>{
//             return( 
//             <p key={element.id}>
//                 {index +1}: {element.text || "sem atividade"}
//                 <button onClick ={() =>deleteTask(element.id)}>x</button>
//             </p>
//             )
//         })}
//     </div>
 
 return(
    <div>

<section className="secao">
         {/* {task.map((element,index) =>{
            return( 
             <p key={element.id}>{index +1}: {element.text || "sem atividade"}
                </section><button onClick ={() =>deleteTask(element.id)}>x</button>
            </p>
            )
        })} */}

<div className="semana">
      <h3>Domingo</h3>
      <div id="domingo"></div>
  </div>

  <div className="semana">
      <h3>Segunda-feira</h3>
      <div id="segunda"></div>
  </div>

  <div className="semana">
      <h3>Terça-feira</h3>
      <div id="terca"></div>
  </div>

  <div className="semana">
      <h3>Quarta-feira</h3>
      <div id="quarta"></div>
  </div>

  <div className="semana">
      <h3>Quinta-feira</h3>
      <div id="quinta"></div>
  </div>

  <div className="semana">                    
      <h3>Sexta-feira</h3>               
      <div id="sexta"></div>
  </div>

  <div className="semana">
      <h3>Sábado</h3>
      <div id="sabado"></div>
  </div>
  

</section>

  </div>
)
}

export default Post