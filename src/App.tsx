import { useState } from "react"

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggler = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggler}>{theme}</button>
    </div>
  )
}

export default App
