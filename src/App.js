import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Characters from './components/Characters';


function App() {
  const [characters, setCharacters] = useState([])

  const backgrounds = [
    {
      name: 'Soldado',
      primaryColor: '#57C278',
      secondColor: '#09F7E9',
    },
    {
      name: 'Artista',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Nobre',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Criado nas ruas',
      primaryColor: '#FDE7E8',
      secondColor: '#E06869',
    },
  ]

  const newCharacterAdded = (character) => {
    setCharacters([...characters, character])
  }

  return (
    <div className="App">
      <Banner />
      <Form bgNames={backgrounds.map(bg => bg.name)} newCharacterAdded={character => newCharacterAdded(character)}/>
      {backgrounds.map(background => <Characters 
      key={background.name} 
      name={background.name} 
      primaryColor={background.primaryColor} 
      secondColor={background.secondColor}
      person={characters.filter(ch => ch.background === background.name)}
      ></Characters>)}
      
    </div>
  );
}

export default App;
