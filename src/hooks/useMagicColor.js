import React, { useEffect, useRef, useState } from 'react';

function randomColor(current) {

    const COLOR_LIST = ['DarkRed', 'RebeccaPurple', 'DarkSlateBlue', 'Navy', 'SlateGray']
    const currentInd = COLOR_LIST.indexOf(current)
    let newInd = currentInd;
    while (currentInd == newInd) {
        newInd = Math.trunc(Math.random() * 5);
    }
    return COLOR_LIST[newInd];
}
function useMagicColor() {
    const [color, setColor] = useState('black')
    const colorRef = useRef('black');
    //Change color every 10 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000 * 5); //10 seconds
        return () => {
            clearInterval(colorInterval);
        }
    }, [])
    return color;
}

export default useMagicColor;