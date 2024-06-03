import { useState } from "react";
import AddCategory from "./components/AddCategory";

//fFwj5mfe2vdiWlOYBuZMlU6TrWfDBQFh
export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Piece', 'Dragon Ball']);
   
    const onAddCategory = ( newCategory) => {
       
        setCategories([ newCategory, ...categories ])
        //setCategories ( cat => [...cat, 'Valorant']);
    }

  return (
    <>
    {/* titulo */}
      <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory
    // setCategories={ setCategories }/>
    onNewCategory={ event => onAddCategory(event)}
    />




    <ol>
        { categories.map((category) => {
            return <li key={ category }>{category}</li>
        })}
        
    </ol>
        {/*  gifs item */}


    </>
  )
}


