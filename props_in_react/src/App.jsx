import React from 'react'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="contacts">
    <Contact
        img="src/assets/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="0137348"
        email="admin@gmail.com"
    />
    <Contact 
      img="src/assets/pumpkin.png"
      name="Mr. Whiskerson"
      phone="0137348"
      email="admin@gmail.com"
    />
    <Contact 
      img="src/assets/fluffykins.png"
      name="Mr. Whiskerson"
      phone="0137348"
      email="admin@gmail.com"
    />
    <Contact 
      img="src/assets/felix.png"
      name="Mr. Whiskerson"
      phone="0137348"
      email="admin@gmail.com"
    />
</div>
  )
}

export default App
