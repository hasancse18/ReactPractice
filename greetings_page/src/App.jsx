
import React from 'react';

const App = () => {
  const hours = new Date().getHours();
  let greet="";
  let quote =""
  let bg =""
  let textColor =""
  if(hours>=6 && hours <=11)
  {
    textColor ="#333333"
    bg="#FFFAF3"
    greet = "Good Morning";
    quote = "Every morning we are born again. What we do today is what matters most."
  }
  else if(hours>11 && hours <=16)
  {
    textColor ="#006400"
    bg ="#E0F7E9"
    greet = "Good Afternoon";
    quote="Every day brings new choices."
  }
  else if (hours>16 && hours<22)
  {
    textColor ="#4B0082"
    bg = "#E6E6FA"
    greet ="Good Evening";
    quote="The evening is a time of real experimentation. You never want to look the same way."
  }
  else
  {
    textColor ="#FFFFFF"
    bg="#2F2F2F"
    greet = "Good Night";
    quote= "The darker the night, the brighter the stars."
  }
  return (
    <>
      <div className="box" style={{ backgroundColor: bg ,color:textColor}}>
        <div className="container">
          <h1>{greet}</h1>
          <p>{quote}</p>
        </div>
      </div>
    </>
  )
}

export default App;
