import React from 'react';
import styles from './TimeEstimate.module.css';

function TimeEstimate({
    children
}) {
    return ( <div className = { styles.timeEstimate
        } > {
            children
        } </div>
    );
}

export default TimeEstimate;

