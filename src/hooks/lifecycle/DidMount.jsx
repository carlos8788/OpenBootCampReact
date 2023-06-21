/**
 * Ejemplo de uso del ciclo del método
 * del ciclo de vida en componente clase y el hook de ciclo
 * de vida en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
        
    }
  render() {
    return (
      <div>DidMount</div>
    )
  }
}

export const DidMountHook = () =>{
    /**
     * useEffect recibe como primer parametro una callback, luego recibe un array como parametro, 
     * si está vacío se ejecutará una vez [], si contiene una funcion o variable [example] se ejecutará
     * cada vez que se llame a esa función, sino ponemos nada se ejecutará cada vez que renderice
     */
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }, [])
    return(
        <>
        <div>DidMount</div>
        </>
    )
}