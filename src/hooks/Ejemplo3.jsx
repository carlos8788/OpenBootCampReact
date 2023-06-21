
import React, { useState, useContext } from 'react'
const miContexto = React.createContext(null)

const Componente1 = () => {
    const state = useContext(miContexto)
    console.log(state);
    return (

        <div>
            <h1>El token es:{state.token}</h1>
            <Componente2/>
        </div>
    )
}

const Componente2 = () => {
    const state = useContext(miContexto)
    return(
        <>
        <h2>La sesion es: {state.session}</h2>
        </>
    )
}

export default function ComponentConContexto(){
    const estadoInicial = {
        token: '123465',
        session: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial)

    const actualizarSesion = () =>{
        setSessionData({
            token: 'ASD3213213',
            session: sessionData.session + 1
        })
    }
    return (
        <>
        <miContexto.Provider value={sessionData}>
        <Componente1 />
        <button onClick={actualizarSesion}>Actualizar contexto</button>
        </miContexto.Provider>
        </>
    )
}

