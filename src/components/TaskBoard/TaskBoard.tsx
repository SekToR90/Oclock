import React from 'react';

import classes from './TaskBoard.module.scss'
import { Cards } from '../Cards/Cards'
import { CardData } from '../../util/CardsData'
import { NavigationButton } from '../NavigationButton/NavigationButton'

export const TaskBoard: React.FC = () => {

    return (
        <section className={classes.board}>
            <NavigationButton />
            <div className={classes.tasks}>
                {CardData.map(item => (
                    <Cards {...item} />
                ))}
                <button className={classes.addTaskButton} />
            </div>
        </section>
    );
}