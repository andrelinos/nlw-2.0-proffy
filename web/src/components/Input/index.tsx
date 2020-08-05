import React from 'react';


interface InputProps {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name }) => {
  return (
    <input className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name}/>

    </input>
  )
}

export default Input;