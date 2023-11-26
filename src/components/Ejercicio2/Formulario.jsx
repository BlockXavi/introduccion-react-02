import { useState } from 'react'

// Defino el componente Formulario
export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  }) 
  
  // Función para cambiar el estado (valor) de los <input> del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
        ...formData,
        [name]: value
    })
  }
  
  // Manejamos el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Datos del formulario:', formData)
    console.log('Datos del formulario:', formData)
  }

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder='Nombre'/>
        </div>
        <div>
          <label>e-mail: </label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='e-mail'/>
        </div>
        <div>
          <label>Mensaje: </label>
          <textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} placeholder='Escribe tu mensaje'/>
          </div>  
        <button type="submit">Enviar</button>
      </form>
      </div>
  )
}