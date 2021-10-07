import React from 'react';

import classes from './Header.module.scss'

export const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <button className={classes.headerButton}>
                <div className={classes.headerAvatar} />
            </button>
        </header>
    );
}