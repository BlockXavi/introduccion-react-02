// Importamos Routes y Route de react-router-dom
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {

  return (

    // Definimos las Rutas con el componente padre Routes
    <Routes>

      {/*-- Definimos cada ruta de nuestra App con el componente Route. */}
      
      {/*-- Home: En este caso decimos que es index y no hace falta poner ninguna ruta. */}
      <Route index element={<Home />} />

      {/*-- About/Contact: Definimos la ruta que corresponde en "path" y */}
      {/*-- en element ponemos el componente página que tiene que ser renderizado. */}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

      {/*-- NotFound: Usar path="*" significa "coincidir con cualquier cosa", por lo que esta ruta */}
      {/*-- actúa como una captura de todas las URL para las cuales no tenemos rutas explícitas definidas. */}
      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}
