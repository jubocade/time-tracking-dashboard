import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Activity.css';

const Activity = ({act_name, daily_current, daily_previous, weekly_current, weekly_previous, monthly_current, monthly_previous}) => {

    const timeFrame = useSelector(state => state.setTimeReducer)

    return (
         <div className="activity">
                <div className="name-cont">
                    <h4> {act_name} </h4>
                    <img src="./images/icon-ellipsis.svg" alt="three-dots" />
                </div>

                <div className="hours-cont">
                    <h1> {timeFrame === 'daily' ? `${daily_current}hrs` : (timeFrame === 'weekly' ?  `${weekly_current}hrs` : `${monthly_current}hrs`)}
                    </h1>

                    <div> {timeFrame === 'daily' ? `Last Day - ${daily_previous}hrs` : (timeFrame === 'weekly' ?  `Last Week - ${weekly_previous}hrs` : `Last Month - ${monthly_previous}hrs`)} </div>
                </div>
            </div>
    )
}

export default Activity;
