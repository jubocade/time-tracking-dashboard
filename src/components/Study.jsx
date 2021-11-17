import React from 'react';
import '../styles/Study.css';
import Activity from './Activity';
import data from '../data.json';

const Study = () => {
    const index = 2;
    const act_name = data[index].title;
    const daily_current = data[index].timeframes.daily.current;
    const daily_previous = data[index].timeframes.daily.previous;
    const weekly_current = data[index].timeframes.weekly.current;
    const weekly_previous = data[index].timeframes.weekly.previous;
    const monthly_current = data[index].timeframes.monthly.current;
    const monthly_previous = data[index].timeframes.monthly.previous;
    return (
        <div className="study">
            <img src="./images/icon-study.svg" alt="icon"/>
            <Activity
                act_name={act_name}
                daily_current={daily_current}  
                daily_previous={daily_previous}
                weekly_current={weekly_current}
                weekly_previous={weekly_previous}
                monthly_current={monthly_current}
                monthly_previous={monthly_previous}
            />
        </div>
    )
}

export default Study;
