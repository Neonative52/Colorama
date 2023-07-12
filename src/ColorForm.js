import React from 'react'

const ColorForm = ({color,setColor,isDarkText,setIsDarkText}) => {
  return (
    <form className='colorForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='colorInput'>Add Color Name:</label>
        <input 
            autoFocus
            type='text'
            placeholder='Enter Color'
            required
            value = {color}
            onChange={(e)=>setColor(e.target.value.toUpperCase())}
        />
        <button
          type='button'
          onClick={()=>setIsDarkText(!isDarkText)}
        >
          Toggle Text Color
        </button>
    </form>
  )
}

export default ColorForm
