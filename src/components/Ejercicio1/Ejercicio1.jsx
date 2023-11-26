import { useState } from 'react' // Importo es estado de react
import TituloEjercicio from '../TituloEjercicio'

// Defino el componente Hijo
function ChildComponent(props) {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>Mensaje del padre: {props.message}</p>
    </div>
  )
}

// Defino el componente Padre
function ParentComponent () {
  const [message, setMessage] = useState('Hola desde el Padre');

  const handleButtonClick = () => {
    setMessage('Mensaje propagado desde el Padre al pulsar el botón')
  }

  return (
    <div>
      <h2>Componente Padre</h2>
      <p>Mensaje: {message}</p>
      <button onClick={handleButtonClick}>Actualizar mensaje</button>
      <ChildComponent message={message} />
    </div>
  )  
}

export default function Ejercicio1() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
      <ParentComponent />
    </section>
  )
}
