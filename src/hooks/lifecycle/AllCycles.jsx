import React, { useEffect } from 'react'
// SOLO DEBEMOS TENER UN USEEFFECT POR COMPONENTE
export const AllCycles = () => {
    useEffect(()=>{
        console.log('Componente creado');

        const intervalID = setInterval(()=>{
            document.title = `${new Date()}`
            console.log('Actualizacion de componente');
        }, 1000);

        return () => {
            
            console.log('El componente va a desaparecer');
            document.title = 'Tiempo detenido';
            clearInterval(intervalID);
        }
        
    }, [])
    return (
        <div>AllCycles</div>
    )
}
