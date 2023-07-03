import React, { useState } from 'react'

// Definiendo estilos en constantes

//Si está logueado
const loggedStyle = {
    color: 'blue'
}

//No está logueado
const unloggedStyle = {
    color: 'red',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
    const [logged, setLogged] = useState(false)

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? <p>Hola {props.name}</p>: <p>Por favor login</p>}
            <button onClick={()=>setLogged(!logged)}>
                { logged? 'Logout' : 'Login' }
            </button>

        </div>
    )
}

export default GreetingStyled