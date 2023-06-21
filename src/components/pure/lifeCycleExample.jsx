/**
 * Ejemplo de componente de tipo clases que dispone 
 * de los métodos de ciclo de vida
 */

import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class LifeCycleExample extends Component {
  static propTypes = {second: third}

  constructor(props) {
    super(props)
    console.log('instancioa el componente');
  }
   
  componentDidMount(){

  }

  render() {
    return (
      <div>lifeCycleExample</div>
    )
  }
}
