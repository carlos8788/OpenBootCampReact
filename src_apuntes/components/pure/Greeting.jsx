// Class Greeting
// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

// class Greeting extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       age: 34
//     }
//   }

//   render() {
//     return (
//       <>
//       <h1>
//         Hola Mundo! {this.props.name}
//       </h1>
//       <h2>
//         Tu edad es de: {this.state.age}
//       </h2>
//       <button onClick={this.birthday}>Cumplir Años</button>
//       </>
//     )
//   }

//   birthday = () => {
//     this.setState((prevState) =>(
//       {age: prevState.age + 1}
//     ))
//   };
// }

// Greeting.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// }

// export default Greeting



// Greeting Function

import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Greeting = (props) => {
  // useState
  const [age, setAge] = useState(29)

  const birthday = () =>{
    setAge(age + 1)
  }

  return (
    <>
      <h1>
        Hola Mundo! {props.name}
      </h1>
      <h2>
        Tu edad es de: {age}
      </h2>
      <button onClick={birthday}>Cumplir Años</button>
    </>
  )
}

Greeting.propTypes = {
  name: PropTypes.string
}

export default Greeting
