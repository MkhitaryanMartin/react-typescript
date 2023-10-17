import React from 'react';
import "./style.scss"

type Props = {
    search : string,
    handleChange : (e:  React.ChangeEvent<HTMLInputElement>)=> void
}

const Input = ({
    search,
    handleChange
}: Props) => {
    return (
        <input 
        type='search'
         value={search}
         placeholder='Search'
          onChange={handleChange} />
    );
};

export default Input;