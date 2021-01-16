import { useEffect, useState } from 'react'

const useDrakLightMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return Number(localStorage.getItem('darkMode')) ? 1 : 0
  });
  console.log(localStorage.getItem('darkMode'));

  const changeMode = (booleanValue) => {
    if (Number(booleanValue)) {
      document.getElementById('element-body').classList.add('dark-mode')
      localStorage.setItem('darkMode', 1)
      setDarkMode(booleanValue)
    } else {
      localStorage.setItem('darkMode', 0)
      document.getElementById('element-body').classList.remove('dark-mode')
      setDarkMode(booleanValue)
    }
  }
  const handleChangeDarkLight = (_) => {
    !darkMode ? changeMode(1) : changeMode(0)
  }
  useEffect(() => {
    changeMode(darkMode)
  }, [])
  return { darkMode, handleChangeDarkLight }
}
export default useDrakLightMode