import React, { useState } from 'react'

const StateArray = () => {
    const myFavoriteThings = []
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    
    const [items, setItems] = useState([])
    
    function addFavoriteThing() {
      // We'll work on this next, nothing to do here yet.
      setItems(prevItems=> [...prevItems,allFavoriteThings[prevItems.length]])
    }
    const thingsElements = items.map(thing => <p key={thing}>{thing}</p>)
    return (
      <main>
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-live="polite">
          {thingsElements}
        </section>
      </main>
    )
}

export default StateArray
