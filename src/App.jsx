import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Input, Button, ListItems, Trash, Check, Void } from './styles';



function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  function inputChange(e) {
    setTask(e.target.value)
  }

  function clickButton() {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    }
  }

  function finishedTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }

  function deletedTask(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputChange} placeholder='O que tenho para fazer...' />
        <Button onClick={clickButton}>Adicionar</Button>

        <ul>
          {list.length > 0 ?
            list.map(item => (
              // eslint-disable-next-line react/jsx-key
              <ListItems isFinished={item.finished} key={item.id}>
                <Check onClick={() => finishedTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletedTask(item.id)} />
              </ListItems>
            )) : (
              <Void>Não há itens na Lista.</Void>
            )}
        </ul>
      </ToDoList>

    </Container>
  )
}

export default App
