import './App.scss'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Hello } from './components/Hello/Hello'
import { Projects } from './components/Projects/Projects'

export const App = () => {

  return (
    <main className="app-container">
      <Hello />
      <AboutMe />
      <Projects />
    </main>
  )
}

export default App
