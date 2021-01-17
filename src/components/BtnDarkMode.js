import React from 'react'
const BtnDarkMode = ({ darkMode, handleChangeDarkLight }) => {
  return (
    <div className="container_input_check">
      <input id="darkMode" className="checkcross__input" type="checkbox" checked={darkMode} onChange={handleChangeDarkLight} />
      <label className="toggle-item" htmlFor="darkMode">
        <div className="check"></div>
      </label>
    </div>
  )
}
export default BtnDarkMode