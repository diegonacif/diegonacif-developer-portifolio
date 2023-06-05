import './App.scss'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Hello } from './components/Hello/Hello'

export const App = () => {

  return (
    <main className="app-container">
      <Hello />
      <AboutMe />
    </main>
  )
}

export default App
