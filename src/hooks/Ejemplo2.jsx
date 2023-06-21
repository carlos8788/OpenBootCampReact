import React, { useEffect, useState, useRef } from 'react'


const Ejemplo2 = () => {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  const incrementar1 = () => setContador(contador + 1);
  const incrementar2 = () => setContador2(contador2 + 1);

  const miRef = useRef();

  /**
   * Se ejecuta siempre
   */
  useEffect(()=>{
    console.log('Cambio en el estado de mi componente');
    console.log(miRef);
  })
  
  /**
   * Se va a ejecutar solo si cambia contador 1
  */
 useEffect(()=>{
    console.log('Cambio en el estado de mi componente contador 1');

  }, [contador])

  return (
    <div>
      ****************************************************************
      <h3>Contador1: {contador}</h3>
      <h3>Contador2: {contador2}</h3>
      <h4 ref={miRef}>
        Ejemplo de elemento referenciado
      </h4>
      <button onClick={incrementar1}>Incrementar1</button>
      <button onClick={incrementar2}>Incrementar2</button>
    </div>
  )
}

export default Ejemplo2