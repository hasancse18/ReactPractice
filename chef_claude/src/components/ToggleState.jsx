import React, { useState } from 'react'

const ToggleState = () => {
    const[value,setValue] = useState(true)
    // function change()
    // {
    //     value==="Yes"?setValue("No"):setValue("Yes")
    // }
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={()=>{
                setValue(!value)
            }}>{value?"Yes":"No"}</button>
        </main>
    )
}

export default ToggleState
