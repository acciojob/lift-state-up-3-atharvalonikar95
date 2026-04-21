
import React from "react";
import './../styles/App.css';
import Child from './comp/Child'
const App = () => {
    const [selectedOption,setSelectedOption]=React.useState()
    const handleOption=(optionNo)=>{
       setSelectedOption(optionNo)
        
    }

  return (
    <div>
        <Child optionNo={1} handleOption={handleOption} />
        <Child optionNo={2} handleOption={handleOption} />
        <p>selected : option {selectedOption}</p>
    </div>
  )
}

export default App
