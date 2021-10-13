import * as C from './styles';
import {useState, KeyboardEvent} from 'react'

type Props = {
    onEnter: (taskName: string) => void // função q n retorna nada
}

export const AddArea = ({ onEnter}: Props) => {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => { //verifica se foi o enter
        if (e.code === 'Enter' && inputText !== '') {
           onEnter(inputText) 
           setInputText('')
        }
    }   

    return (
        <C.Container>
             <div className="image">+</div>
             <input 
                type="text"
                placeholder=" Adicione uma tarefa"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp} //ao clicar
            />
        </C.Container>
    );
}