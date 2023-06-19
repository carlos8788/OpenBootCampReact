import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Contacto from './ComponenteB'

function ComponenteA({props}) {
    const [conect, setConect] = useState(false)

    const state = () => {
        (conect) ? setConect(false) : setConect(true)
        
    }

    return (
        <>
            <h1>{props.nombre} {props.apellido}</h1>

            <h2>{props.email}</h2>
            <h3>{conect ? 'Está conectado' : 'Está desconectado'}</h3>
            <button onClick={state}>Estado</button>
        </>
    )
}

ComponenteA.propTypes = {
    props: PropTypes.instanceOf(Contacto)
}

export default ComponenteA
