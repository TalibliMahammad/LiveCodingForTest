import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainTodo from './LIveAppTodo/Pages/MainTodo'
import TodoButton from './LIveAppTodo/components/TodoButton'
import TodoInput from './LIveAppTodo/components/TodoInput'
import DataFetch from './DataFetching/DataFetch'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  {/* <MainTodo/> */}
  <DataFetch/>

  </>
  )
}

export default App