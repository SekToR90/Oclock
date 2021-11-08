import React from 'react';

import classes from './TaskBoard.module.scss'
import { Cards } from '../Cards/Cards'
import { CardData } from '../../util/CardsData'

export const TaskBoard: React.FC = () => {

    return (
        <div className={classes.bord}>
            {CardData.map(item => (
                <Cards {...item} />
            ))}
        </div>
    );
}