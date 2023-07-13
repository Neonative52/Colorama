import React from 'react'

const ColorBox = ({color,isDarkText,setIsDarkText}) => {
  return (
    <section 
      className='colorBox' 
      style={{
          backgroundColor : color,
          color : isDarkText ? "#000" : "#FFF"
        }}>
      <p>{color?color:"WHITE"}</p>
    </section>
  )
}

ColorBox.defaultProps = {
  color: "Empty Color Value"
}

export default ColorBox
