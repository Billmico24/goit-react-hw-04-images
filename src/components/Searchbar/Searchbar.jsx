import { useState } from 'react'
import PropTypes from 'prop-types';
import {SearchbarEl, SearchForm, SearchFormButton, ButtonLabel, SearchFormInput} from './Searchbar.styled'

export function Searchbar({inputValue, onSubmit})  {

  const [inputValueState, setInputValueState] = useState('');
  
    
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValueState);
  
  };

   const inputChange = e => {
    setInputValueState(e.target.value.trim().toLowerCase());
  };
    
 

        return (
        <SearchbarEl>
             <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                <ButtonLabel ></ButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                type="text"
                autoComplete="off"
                autoFocus
                value={inputValue}
                placeholder="Search images and photos"
                onChange={inputChange}
                />
            </SearchForm>
        </SearchbarEl>
    )
    
    
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
