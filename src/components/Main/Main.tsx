import React from 'react';

import classes from './Main.module.scss'
import { Clock } from '../Clock/Clock'
import { TaskBoard } from '../TaskBoard/TaskBoard'

export const Main: React.FC = () => {

    return (
        <main className={classes.main}>
            <Clock />
            <TaskBoard />
        </main>
    );
}