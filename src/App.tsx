import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState<string>("");
  const [names, setNames] = useState<string[]>([]);
  const [showMenuButtons, setShowMenuButtons] = useState<boolean>(false);

  const handleOnChange = (event: any) => {
    setValue(event?.target.value);
  }

  const handleOnKeyUp = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(value);
      const namesList = [...names, value];
      setNames(namesList);
      console.log(names);
      event.currentTarget.value = "";
    }
  }

  useEffect(() => {
    if (names.length > 0) {
      setShowMenuButtons(true);
    }
  }, [names]);

  const renderNameList = (names: string[]) => {
    return names?.map((name: string, index) => <div key={index}>{name}</div>)
  }

  return (
    <>
      <div>{renderNameList(names)}</div>
      {showMenuButtons &&
        <>
          <div><button>Start Game</button></div>
          <div><button>Reset</button></div>
        </>}
      <h1>Enter Participants</h1>
      <input autoFocus type="text" onKeyUp={handleOnKeyUp} onChange={handleOnChange} placeholder='Press Enter to Save the name'></input>
    </>
  )
}

export default App
