import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Hello World!</h1>
    <Navbar/>
    </div>
  )
}

export default App
