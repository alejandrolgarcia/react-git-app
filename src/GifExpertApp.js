import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Batman', 'Flash', 'Superman', 'Wonder Woman'];
    const [categories, setCategories] = useState(['Batman']);

    // const handleAdd = () => {
    //     setCategories([... categories, 'Linterna Verde']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    )
}
