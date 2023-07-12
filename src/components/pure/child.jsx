import React, { useRef } from 'react'

function Child({ name, send, updateName }) {

    const messageRef = useRef('')
    const nameRef = useRef(name)

    const pressButton = () => {
        const text = messageRef.current.value
        alert('Default text ' + text)
    }

    const pressButtonParams = (text) => {
        alert(text)
    }

    const submitName = (e)  =>{
        e.preventDefault()
        updateName(nameRef.current.value)
    }

    return (
        <>
            <div onMouseOver={() => console.log('On Mouse Over')}>Child Component {name}</div>
            <button onClick={() => console.log('Boton 1 pulsado')}>
                Botón 1
            </button>
            <button onClick={pressButton}>
                Botón 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Botón 3
            </button>

            <input 
            type="text" 
            placeholder='Insert text' 
            onFocus={() => console.log('Input Focus')} 
            onChange={(e) => console.log('changed', e.target.value)}
            onCopy={() => console.log('Input Copy')}
            ref={messageRef}
            />

            <button onClick={ () => send(messageRef.current.value)}>Send Message</button>
            <div className="" style={{margin:'20px'}}>
                <form action="" onSubmit={submitName}>
                    <input ref={nameRef} type="text" placeholder='New Name'  />
                    <button type="submit">Update Name</button>
                </form>
            </div>
        </>
    )
}

export default Child