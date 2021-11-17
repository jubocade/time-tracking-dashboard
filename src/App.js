import React from 'react';
import User from './components/User';
import Work from './components/Work';
import Play from './components/Play';
import Study from './components/Study';
import Exercise from './components/Exercise';
import Social from './components/Social';
import Care from './components/Care';
import './App.css';

function App() {
  return (
    <div className="app">
        <main>
            <div className="wrapper">
                <User className="user" />
                <Work className="work"/>
                <Play className="play"/>
                <Study className="study"/>
                <Exercise className="exercise"/>
                <Social className="social"/>
                <Care className="care"/>
            </div>
        </main>
    </div>
  );
}

export default App;
