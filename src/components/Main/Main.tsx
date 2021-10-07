import React from 'react';

import classes from './Main.module.scss'
import { Clock } from '../Clock/Clock'

export const Main: React.FC = () => {
    return (
        <main className={classes.main}>
            <Clock />
        </main>
    );
}