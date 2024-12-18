
export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const listOfIngredients = ingredients.map((list)=>(
        <li key={list}> {list}</li>
    ))
    
    function handleSubmit(event)
    {
        event.preventDefault()
    }
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */
    
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