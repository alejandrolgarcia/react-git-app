import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit  = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
        // console.log('Submit hecho');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                className="form-control"
                value={ inputValue }
                onChange={ handleInputChange }
            /> 
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
