import React from 'react'

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo4 de children props</h1>
            <h2 className='task-name'>
                Nombre: {props.nombre}
            </h2>
            {props.children}
        </div>
    )
}

export default Ejemplo4