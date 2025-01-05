import React, { useState } from 'react'
import './index.css'
import padData from './pad'
const index = ({darkMode}) => {
  const [pad, setPad] = useState(padData)
  const styles = {
    backgroundColor: darkMode? "#222222" : "#cccccc"
  }
  const padList = pad.map(element=>(
    <button style={styles} key={element.key}></button>
  ))
  return (
    <main>
        <div className="pad-container">
            {padList}
        </div>
    </main>
)
}

export default index
