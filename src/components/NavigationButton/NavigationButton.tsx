import React, { useEffect, useState } from 'react';

import classes from './NavigationButton.module.scss'

export const NavigationButton: React.FC = () => {
    const [isDate, setIsDate] = useState('');

    useEffect(() => {
        let date = new Date();
        setIsDate (`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`) 
    }, [])

    return ( 
        <div className={classes.navigationElement}>
            <button className={classes.buttonNavigation}>Календарь</button>
            <button className={classes.buttonNavigation}>
                <p className={classes.date}>Сегодня</p>
                <p className={classes.date}>{isDate}</p>
            </button>
        </div>
    );
}