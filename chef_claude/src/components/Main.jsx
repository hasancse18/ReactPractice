import { useState } from "react"

export default function Main() {
    const [ingredients,setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])
    const listOfIngredients = ingredients.map((list)=>(
        <li key={list}> {list}</li>
    ))
    
    function handleSubmit(event)
    {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(items=> [...items,newIngredient])
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {listOfIngredients}
            </ul>
        </main>
    )
}