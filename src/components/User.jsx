import React from 'react';
import { useDispatch } from 'react-redux';
import {setTime} from '../redux/actions/actions';
import '../styles/User.css';

const User = () => {
    const dispatch = useDispatch();

    const setDaily = () => {
        dispatch(setTime('daily'));
    }

    const setWeekly = () => {
        dispatch(setTime('weekly'));
    }

    const setMonthly = () => {
        dispatch(setTime('monthly'));
    }

    return (
        <div className="user">
            <div className="user-profile">
                <div className="user-avatar">
                    <div className="user-image-container">
                        <img src="./images/image-jeremy.png" alt="user-pic" />
                    </div>
                </div>

                <div className="user-name">
                    <div>Report for</div>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>

            <div className="time-frames">
                <ul className="time-frames-links">
                    <li onClick={setDaily}>Daily</li>
                    <li onClick={setWeekly}>Weekly</li>
                    <li onClick={setMonthly}>Monthly</li>
                </ul>
            </div>
        </div>
    )
}

export default User;
