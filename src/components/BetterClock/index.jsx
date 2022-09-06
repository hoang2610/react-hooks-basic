import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';
import './BetterClock.scss';
import useMagicColor from '../../hooks/useMagicColor';

BetterClock.propTypes = {
    
};

function BetterClock(props) {
    const { timeString } = useClock();
    const color = useMagicColor();
    //console.log(color);
    return (
        <div className="better-clock" style={{backgroundColor: color}}>
            <p className="better-clock-time">{timeString}</p>
        </div>
    );
}

export default BetterClock;