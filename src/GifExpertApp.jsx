import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

//fFwj5mfe2vdiWlOYBuZMlU6TrWfDBQFh
export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Piece']);
   
    const onAddCategory = ( newCategory) => {
        if(categories.includes(newCategory)) return;
       
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
            { 
                categories.map( (category) => (
                <GifGrid 
                    key={ category }
                    category={ category }
                />
                ))
            }
            
        </ol>
        {/*  gifs item */}
    </>
  )
}


