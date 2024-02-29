import { useState } from 'react'
import './App.css'
import { Game } from './components/Game';

function App() {
  const [value, setValue] = useState<string>("");
  const [names, setNames] = useState<string[]>([]);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  const handleOnChange = (event: any) => {
    setValue(event?.target.value);
  }

  const handleOnKeyUp = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const namesList = [...names, value];
      setNames(namesList);
      event.currentTarget.value = "";
    }
  }

  const renderNameList = (names: string[]) => {
    return names?.map((name: string, index) => <div key={index}>{name}</div>)
  }

  const handleStartGame = () => {
    setIsGameStarted(true);
  }

  const handleReset = () => {
    setNames([]);
  }

  return (
    <div>
      {isGameStarted ? (<Game names={names} setIsGameStarted={setIsGameStarted} />) :
        (
          <>
            <div>{renderNameList(names)}</div>
            {names.length > 0 &&
              <>
                <div><button onClick={handleStartGame}>Start Game</button></div>
                <div><button onClick={handleReset}>Reset</button></div>
              </>}
            <h1>Enter Participants</h1>
            <input autoFocus type="text" onKeyUp={handleOnKeyUp} onChange={handleOnChange} placeholder='Press enter to save the name'></input>
          </>
        )
      }
    </div>
  )
}

export default App
