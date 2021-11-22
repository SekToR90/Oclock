import React from 'react';

import classes from './Card.module.scss'
import { Time } from '../../types/timeType'

interface CardDataType {
    startTask: Time
    finishTask: Time
    title: string
    color: string
}

export const Card: React.FC<CardDataType> = ({ startTask, finishTask, title, color }) => {

    return (
        <div className={classes.card} style={{ background: color }}>
            <div>
                <div className={classes.timeComponent}>
                    <div className={classes.imgClock} />
                    <p className={classes.time}>{startTask.hour}:{startTask.minute} - {finishTask.hour}:{finishTask.minute}</p>
                </div>
                <h2 className={classes.taskTitle}>{title}</h2>
            </div>
            <button className={classes.deleteButton} />
        </div>
    );
}