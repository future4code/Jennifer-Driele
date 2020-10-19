import React from 'react';
import { render ,wait, fireEvent, screen} from '@testing-library/react';
import App from './App';
import axios from 'axios';
import userEvent from '@testing-library/user-event';


axios.get = jest.fn().mockResolvedValue({
  data:[]
})

axios.post = jest.fn().mockResolvedValue({})
axios.delete = jest.fn().mockResolvedValue()

describe("Create new tasks",() => {

  const createTask = async (taskText) => {

 const input = screen.getByPlaceholderText("Nova tarefa");

    await userEvent.type(input , taskText);

    expect(input).toHaveValue(taskText);

    const button = screen.getByText("Criar tarefa");

    fireEvent.click(button);
};

const createTaskText = async () => {
  const utils = render(<App/>);

  await createTask('test');

  return utils;
};

 test("tasks renderizadas",async () => {

    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          day: "domingo",
          id:"123",
          text:"test"
          
        }
      ]
    })
    const {findByText} = render(<App/>)
  
    const task = await findByText('test')
  
    expect(task).toBeInTheDocument()
  
    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })

  })

  test("criar tarefas", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })
    axios.post = jest.fn().mockResolvedValue()

    await createTaskText();
  
    expect(axios.post).toHaveBeenCalledWith(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer`,{
      text:"test", day:""
    })
  
    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })

 
   test("delete task", async () => {
      axios.get = jest.fn().mockResolvedValue({
        data: [
          {
            day:"domingo",
            id: "123",
            text:"test"
            
          }
        ]
      })
      axios.delete = jest.fn().mockResolvedValue()
      render(<App />)
  
    const deleteButton = await screen.findByText("X")
  
      fireEvent.click(deleteButton)
  
      expect(axios.delete).toHaveBeenCalledWith(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer/${id}`)
  
      await wait(() => {
        expect(axios.get).toHaveBeenCalledTimes(2)
      })
    })
  })
})
