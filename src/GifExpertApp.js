import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['Dragon Ball', 'Samurai X', 'One Punch']
    const [categories, setcategories] = useState(['Dragon Ball']);
    
    /* const handleAdd = (() => {

     //setcategories(['Naruto', ...categories]);
     //setcategories([...categories, 'Naruto']);
        setcategories(cats => [...cats, 'Naruto']);

    });
 */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories = {setcategories}/>
            <hr/>
            <ol>
            {
                    categories.map(category => 
                        <GifGrid 
                        key = {category}
                        category = {category}/>
                    )
                }
            </ol>
        </>
    )
}
