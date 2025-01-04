import React, { useState } from 'react';
import "./style.css";

const Signup = () => {
  const initialValues = { email: "", password: "",status:"", favColor:"",diet:[]};
  const [value, setValue] = useState(initialValues);
  //console.log(value)
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setValue((prevValue) => ({
  //     ...prevValue,
  //     [name]: value,
  //   }));
  // };

  function signUp(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    // const email = formData.get("email")
    // const password = formData.get("password")
    // const status = formData.get("status")
    const diet = formData.getAll("diet")
    // const favColor = formData.get("favColor")
    //console.log(favColor);
    const data = Object.fromEntries(formData);
    const allData = {
      ...data,
      diet
    }

    //console.log(data)
    
   setValue(allData);

  }
  console.log(value)
  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
          //value={value.email}
          //onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          //value={value.password}
          //onChange={handleChange}
        />
        
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" defaultValue="This is description"></textarea>
        
        <fieldset>
          <legend>Employment Status</legend>
          <label>
            <input type="radio" name="status" value="Unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="status" value="Part-Time" />
            Part-Time
          </label>
          <label>
            <input type="radio" name="status" defaultChecked={true} value="Full-Time" />
            Full-Time
          </label>
        </fieldset>
        
        <fieldset>
          <legend>Dietary Restrictions</legend>
          <label>
            <input type="checkbox" name="diet" value="Kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="diet" value="Vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="diet" value="Gluten-free" />
            Gluten-free
          </label>
        </fieldset>
        <label htmlFor="favColor">What Color You Like Most?</label>
        <select name="favColor" id="favColor">
          <option value="Green">Green</option>
          <option value="Violet">Violet</option>
          <option value="Red">Red</option>
          <option value="Gray">Gray</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Signup;
