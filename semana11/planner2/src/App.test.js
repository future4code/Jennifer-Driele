import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import axios from 'axios';



axios.get = jest.fn().mockResolvedValue({
  data: [{text:'mock tarefa' ,day: 'domingo'}]

  
})
// axios.post = jest.fn().mockResolvedValue({})
// axios.delete = jest.fn().mockResolvedValue()

test('renders data from get Request', async()=>{
  render(<App/>)
  const textData = await screen.findByText('tarefa mock')
  screen.debug()
expect(axios.get).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer")
  
  expect(textData).toBeInTheDocument()
})