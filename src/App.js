import { useState } from 'react';
import ColorBox from './ColorBox';
import ColorForm from './ColorForm';
function App() {
  const [color,setColor] = useState('');
  const [isDarkText,setIsDarkText] = useState(true);
  const handleChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor)
  }
  return (
    <div className="App">
      <header className='title'>COLORAMA</header>
      <ColorBox 
        color = {color}
        isDarkText = {isDarkText}
      />
      <ColorForm 
        color={color}
        setColor={setColor}
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}
      />
    </div>
  );
}

export default App;
