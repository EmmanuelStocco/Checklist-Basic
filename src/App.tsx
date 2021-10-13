import * as C from './App.styles' //Container, Area, Header, tudo
import { useState } from 'react'
import { Item } from './types/Item'
import { ListItem} from './components/ListItem' //busca o index - padron
import { AddArea} from './components/AddArea'

const App = () => {
  //"banco" simulado
  //o typescript verifica
  //dentro dessa state temos um array de Item => no array tem de ser no formato de Item
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o pão na padaria', done: false},
    {id: 2, name: 'Comprar o bolo na padaria', done: false}
  ])

  const handleAddTask = (taskName: string) => {
    //clonando lista original e atualizando com novos texto
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList) //atualizando lista a partir do clone
  }

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (

     <C.Container> 
      <C.Area>
       
         <C.Header>  Lista de Tarefas </C.Header>

         {/** Area de adicionar nova tarefa */} 
          <AddArea onEnter={handleAddTask} />

         {/** Area de exibição da lista atual */}
         {list.map((item, index)=>(
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
            />
          ))}
      </C.Area>
    </C.Container>
  )
}

export default App;