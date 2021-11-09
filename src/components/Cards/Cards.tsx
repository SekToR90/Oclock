import React from 'react';

import classes from './Cards.module.scss'


interface CardDataType {
    startTask: {
        hour: number,
        minute: number
    }
    finishTask: {
        hour: number,
        minute: number
    }
    title: string
    color: string 
}

export const Cards: React.FC<CardDataType> = ({ startTask, finishTask, title, color }) => {

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