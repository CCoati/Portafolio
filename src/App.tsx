import './App.css'
import Navbar from "./Navbar/Navbar"
import Home from "./Paginas/Home"
import Proyectos from "./Paginas/Proyectos"
import Contacto from "./Paginas/Contacto"
import { Route, Routes} from "react-router-dom"
import MiComponente from './Navbar/Componente/Presentacion'
import Footer from './Navbar/Componente/Footer'
import Cards from './Navbar/Componente/Cards'

function App() {

  return (
  <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/contacto' element={ <Contacto />} />
        <Route path='/proyectos' element={ <Proyectos />} />
      </Routes>
    </div>
    <MiComponente />
    <Cards />
    <Footer />



  </>
)
}

export default App
