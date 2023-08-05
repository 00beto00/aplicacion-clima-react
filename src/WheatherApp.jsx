import { useState } from "react"

export const WheatherApp = () => {
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = 'f23248788d2ce67ba3eb58fd97af5154'
    const difKelvin = 273.15
        
    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)


    const handleCambiosCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
    }

    const fetchClima = async () => {
        try {
            // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} API 

            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)

            const data = await response.json()
            setDataClima(data) 
        } catch (error) {

            console.error('Ocurrio esto', error)

        }
    }

    return (
        <>
            <div className="container">
                <h1>Aplicación del clima</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={ciudad}
                        onChange={handleCambiosCiudad}
                    />
                    <button type="submit">Buscar</button>
                </form>

                {
                    dataClima && (
                        <div>
                            <h2>{dataClima.name}</h2>
                            <h2>Temperatua: {parseInt(dataClima?.main?.temp - difKelvin)}°C</h2>
                            <h2>Condición meteorológica: {dataClima.weather[0].description}</h2>
                            <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />

                        </div>
                    )
                }

            </div>
        </>
    )
}
