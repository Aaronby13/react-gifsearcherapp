import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertComponent = ()=>{

    const [categories, setCategories] = useState(['Star Wars'])

    return (<>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={ setCategories } />
                <hr/>

                    { 
                        categories.map((category) => 
                            <GifGrid category = {category} key={category} />
                        )
                    }

            </>) 
}


export {GifExpertComponent}