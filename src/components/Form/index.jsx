import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css'
import { useState } from "react";

const Form = ({newCharacterAdded, bgNames}) => {

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [image, setImage] = useState('');
  const [background, setBackground] = useState('')

  const onSave = (event) => {
    event.preventDefault()
    
    newCharacterAdded({
      name,
      job,
      image,
      background
    })

    setName("")
    setJob("")
    setImage("")
    setBackground("")
  }

  return (
    
    
    <section className='form'>
      <form action="" onSubmit={onSave}>
        <h2>Preencha os dados para criar o card de personagem</h2>
        <TextField mandatory={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={name}
          onChangeFieldLetter={valor => setName(valor)}
        ></TextField>

         <TextField mandatory={true}
          label="Classe"
          placeholder="Digite sua classe"
          valor={job}
          onChangeFieldLetter={valor => setJob(valor)}
        ></TextField>

         <TextField mandatory={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={image}
          onChangeFieldLetter={valor => setImage(valor)}
        ></TextField>
        <DropdownList valor={background} onChangeFieldLetter={valor => setBackground(valor)} label="Background" items={bgNames}/>
        <Button text="Cadastrar card">Criar card</Button>
      </form>
    </section>
  )
}

export default Form;