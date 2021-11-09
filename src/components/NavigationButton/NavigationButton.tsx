import React from 'react';

import classes from './NavigationButton.module.scss'

export const NavigationButton: React.FC = () => {
    return (
        <div className={classes.navigation}>
            <button className={classes.buttonNavigation}></button>
            <button className={classes.buttonNavigation}></button>
        </div>
    );
}