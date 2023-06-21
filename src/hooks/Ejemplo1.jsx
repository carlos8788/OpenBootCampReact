/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente del tipo funcion y acceder
 * a su estado a traves de un hook y además poder 
 * modificarlo
 */

import React, { useState } from 'react'


const Ejemplo1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre: 'Luis',
        email: 'luis@react.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    const incrementarContador = () => setContador(contador + 1);
    const actualizarPersona = () => setPersona({
        nombre: 'Pepe',
        email: 'pepe@react.com'
    });

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h3>Datos: {persona.nombre} - {persona.email}</h3>
            
            <button onClick={incrementarContador}>Contador</button>
            <br />
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    )
}

export default Ejemplo1

