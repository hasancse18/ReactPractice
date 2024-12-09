import React from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import Data from './Data'

const App = () => {
  const element = Data.map(ele=>{
    return (
      <Entry
        {...ele}
    />
    )
  })
  return (
    <>
      <Header/>
      <div className="container">
        {element}
      </div>
    </>
  )
}

export default App
