import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainTodo from './LIveAppTodo/Pages/MainTodo'
import TodoButton from './LIveAppTodo/components/TodoButton'
import TodoInput from './LIveAppTodo/components/TodoInput'
import DataFetch from './DataFetching/DataFetch'
import { SearchBar } from './DataFetching/components/SearchBar'
import { UserCard } from './useCard'
import { useDebounce } from './DataFetching/hooks/useDebounce'

export default function App() {
  const [query, setQuery] = useState('')
  const debounced = useDebounce(query, 500)
  // query   = istifadəçi hər hərf yazanda dəyişir
  // debounced = 500ms dayandıqdan sonra dəyişir → API çağrılır

  return (
    <div className="min-h-screen bg-gray-800 text-white p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">GitHub Axtarış</h1>
      <SearchBar value={query} onChange={setQuery} />
      <UserCard username={debounced} />
    </div>
  )
}