import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
import Ejercicio2 from './components/Ejercicio2/Ejercicio2'
import Footer from './components/Footer'
import Header from './components/Header'
import TituloPrincipal from './components/TituloPrincipal'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TituloPrincipal />
        <Ejercicio1 />
        <Ejercicio2 />
      </main>
      <Footer />
    </>
  )
}
