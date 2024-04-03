import '../src/index.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Router from "./Router"

function App() {
  return (
    <>
    {/* Componente Header */}
    <Header/>
    
    <Router/>

    {/* Componente Footer */}
    <Footer/>
    </>
  )

}

export default App
