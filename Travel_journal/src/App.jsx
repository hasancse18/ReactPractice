import React from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import Data from './Data'

const App = () => {
  const element = Data.map(ele=>{
    return (
      <Entry
        img = {ele.img}
        title = {ele.title}
        country = {ele.country}
        googleMapsLink = {ele.googleMapsLink}
        dates = {ele.dates}
        text = {ele.text}
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
