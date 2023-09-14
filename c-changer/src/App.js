import './index.css';
import Square from './Square';
import Input from './Input';
import { useState } from 'react';
function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Square 
      hexValue = {hexValue}
      colorValue={colorValue}
      isDarkText={isDarkText}/>
      <Input
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
      setHexValue={setHexValue}
      colorValue={colorValue}
      setColorValue={setColorValue}
      />
      
    </div>
  );
}

export default App;
