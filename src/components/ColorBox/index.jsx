import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};
function getRandomColor() {
    const COLOR_LIST = ['deepskyblue', 'yellow', 'black', 'red','cyan']
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}
function ColorBox() {
    
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';
        return initColor;
    })
    
    function handleColorBox() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box-color', newColor);
    }
    return (
        <div
            className='color-box'
            style={{
                backgroundColor: color,
                color:'white'
            }}
            onClick={handleColorBox}
        >
        </div>
    );
}

export default ColorBox;