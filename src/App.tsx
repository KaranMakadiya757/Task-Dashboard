import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes'
import './App.css'

const App = () => {

  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
