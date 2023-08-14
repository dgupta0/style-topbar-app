import { useState } from 'react'
import Preview from "./Components/Preview";
import Editor from './Components/Editor';
import InputsContext from './Context/InputsContext'


function App() {
  const inputsState = {
    bgColor: "#cdc9cd",
    font: "#0d2936",
    text: "100% SALE"
  }
  const [inputs, setInputs] = useState(inputsState)
  return (
    <main>
      <InputsContext.Provider value={{ inputs, setInputs }}>
        <Editor />
        <Preview />
      </InputsContext.Provider>
    </main>
  )

}

export default App
