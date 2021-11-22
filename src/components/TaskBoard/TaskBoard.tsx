import React from 'react';

import classes from './TaskBoard.module.scss'
import { Card } from '../Card/Card'
import { CardData } from '../../util/CardsData'
import { NavigationButton } from '../NavigationButton/NavigationButton'

export const TaskBoard: React.FC = () => {

    return (
        <section className={classes.board}>
            <NavigationButton />
            <div className={classes.tasks}>
                {CardData.map(item => (
                    <Card {...item} />
                ))}
                <button className={classes.addTaskButton} />
            </div>
        </section>
    );
}