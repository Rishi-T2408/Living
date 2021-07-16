import React from 'react';

import { Link } from 'react-router-dom';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];  //Basically these are two arrays which will give default size to our button 

const SIZES = ['btn--medium', 'btn--large'];

const Button = (
    {
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
      }
) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)  //I have taken two javascript variable which will take value from the array
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <div>
            <Link to='/Create' className='btn-mobile'>
             <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      </Link>
        </div>
      );
}
 
export default Button;