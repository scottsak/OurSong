import React, {useState} from "react";
import stats from '../images/stats.png';
import q from '../images/question-mark.png';

import StatScreen from './modals/StatScreen';
import RulesScreen from './modals/RulesScreen';

function Header(){
        // modals
        const [showRules, setShowRules] = useState(false);
        const [showStat, setShowStat] = useState(false);
    return(
        <div className='header'>
                <h1 className='game-title'>swiftie</h1>
                <div className='top right'>
                    <div className='right-top-div'>
                        <button className='top-button rules-button' onClick={() => setShowRules(true)}><img className='top-button-image' src={q}></img></button>
                        <RulesScreen title="My Modal" onClose={() => setShowRules(false)} show={showRules}></RulesScreen>
                        <div className='btn-space'></div>
                        <button className='top-button stats-button' onClick={() => setShowStat(true)}><img className='top-button-image' src={stats}></img></button>
                        <StatScreen title="My Modal" onClose={() => setShowStat(false)} show={showStat} gamesPlayed={3}></StatScreen>
                        <div className='btn-space'></div>
                    </div>
                </div>
            </div>
    )
}

export default Header;