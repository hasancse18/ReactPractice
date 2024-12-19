import React from 'react'
import "./style.css"
const Signup = () => {

    
  function signUp(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")
    const status = formData.get("status")
    const diet = formData.getAll("diet")
    console.log(diet)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" defaultValue="This is description"></textarea>
        
        <fieldset>
          <legend>Employment Status</legend>
          <label >
            <input type="radio" name = "status" value="Unemployed"/>
            Unemployed
          </label>
          <label >
            <input type="radio" name = "status" value="Part-Time"/>
            Part-Time
          </label>
          <label >
            <input type="radio" name = "status" defaultChecked={true} value="Full-Time"/>
            Full-Time
          </label>

        </fieldset>
        <fieldset>
          <legend>Dietry restrictions</legend>
          <label >
            <input type="checkbox" name = "diet" value="kosher"/>
            Kosher
          </label>
          <label >
            <input type="checkbox" name = "diet" value="Vegan"/>
            Vegan
          </label>
          <label >
            <input type="checkbox" name = "diet" value="Gluten-free"/>
            Gluten-free
          </label>

        </fieldset>
        
        

        
        <button>Submit</button>

      </form>
    </section>
  )
}
export default Signup
