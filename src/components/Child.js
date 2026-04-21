import React from 'react'



const Child = ({optionNo,handleOption}:props) => {
  return (
    <div>
        <h1>Child Component {optionNo}</h1>
        <button onClick={()=>handleOption(optionNo)}>option {optionNo}</button>
    </div>
  )
}

export default Child
