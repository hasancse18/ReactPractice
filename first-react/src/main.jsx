import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import ReactLogo from './react-logo.svg';

function Header()
{
  return (
  
    <>
      <header className='header'>
        <img src={ReactLogo} width ="55px" alt="logo" />
        <nav>
          <ul className="navList">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

function Main()
{
  return (
    <>
    <main>
        <h1>Reaseon I am excited to learn React</h1>
        <ol>
          <li>React is a popular library, so I will be able to fit in with all
            the coolest devs out there
          </li>
          <li>I am more likely to get a job as a front end developer it i know react</li>
        </ol>
      </main>
  </>
  )
  
}

function Footer()
{
  return(
    <>
     <footer>
        <small>@ 2024 Hasan development. All rights reserved</small>
      </footer>
    </>
  ) 
  
}

function MainContent(){
  //console.log(<h1>hello</h1>)
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <MainContent/>
)
// const h1 = document.createElement("h1")
// h1.textContent = "this is imperative coding"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)
