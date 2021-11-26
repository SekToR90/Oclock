import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import classes from './Clock.module.scss'

function calculateDegrees() {
        let date = new Date();

        return {
            secondDegrees: Math.floor((360 * date.getSeconds()) / 60),
            mimuteDegrees: Math.floor((360 * date.getMinutes()) / 60),
            hourDegrees: Math.floor((360 * date.getHours()) / 24)
        }
    }

export const Clock: React.FC = () => {
    const [degrees, setDegrees] = useState(calculateDegrees);

    useEffect(() => {
        const timer = setInterval(() => setDegrees(calculateDegrees()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={classes.clock}>
            <div className={classNames(classes.hand, classes.handHour)} style={{ transform: `rotate(${degrees.hourDegrees}deg)` }} />
            <div className={classNames(classes.hand, classes.handMimute)} style={{ transform: `rotate(${degrees.mimuteDegrees}deg)` }} />
            <div className={classNames(classes.hand, classes.handSecond)} style={{ transform: `rotate(${degrees.secondDegrees}deg)` }} />
        </div>
    );
}