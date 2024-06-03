import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue] = useState(' ')

    const onInputChange = ( event ) => {
        setInputValue( event.target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <=1) return;

        //setCategories( (categories) => [inputValue, ...categories])
        onNewCategory( inputValue.trim())
        setInputValue(' ')
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
        type='text'
        placeholder='Buscar gifs'
        value = { inputValue}
        onChange={ (event) => onInputChange( event) }
        />
    </form>
  )
}

AddCategory.propTypes = {
    category: PropTypes.string,
    onNewCategory: PropTypes.func

};
export default AddCategory
