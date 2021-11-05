import React from 'react';

import classes from './TaskBoard.module.scss'
import { Cards } from '../Cards/Cards'

export const TaskBoard: React.FC = () => {
    
    return (
        <div className={classes.bord}>
            
            <Cards />
        </div>
    );
}