import React, { useState } from 'react'
import Child from '../pure/child'

function Father() {
    const [name, setName] = useState('Luis')
    const showMessage = (text) => {
        alert(text)
    }

    const updateName = (newName) =>{
        setName(newName)
    }

    return (
        <>
            <Child send={showMessage} name={name} updateName={updateName}/>
        </>
    )
}

export default Father