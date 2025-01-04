import { useState } from "react"

export default function Main() {
    const [ingredients,setIngredients] = useState([])
    const listOfIngredients = ingredients.map((list)=>(
        <li key={list}> {list}</li>
    ))
    
    function handleSubmit(event)
    {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        if(newIngredient)
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
            {
                ingredients.length>0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul  className="ingredients-list" aria-live="polite">{listOfIngredients}</ul>
                { ingredients.length>2 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>

                }
            </section>
            }
        </main>
    )
}