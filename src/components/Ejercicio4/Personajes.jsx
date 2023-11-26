import { useEffect, useState } from "react";

export default function Personajes () {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false) // Oculto el indicador de carga
            })
            .catch((error) => {
                console.error('Error al obtener datos:', error)
                setLoading(false) // Oculto el indicador de carga
            })
    }, [])

    // Muestra los datos obtenidos de la API en la pantalla usando
    // el metodo map de manera legible (por ejemplo, en una lista)
    // y muestra minimo la imagen y el nombre del personaje.

    console.log(data)

    return (
        <div>
            <h3>Personajes de la API de Rick and Morty</h3>
            {loading? (
                <p>Cargando...</p>
            ) : (
                <ul>
                    {data.results.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name + '-img'} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}