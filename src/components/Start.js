import React, { useState } from 'react';
import Game from './Game.js';
import End from './End.js';


function Start() {
    const [playerName, setPlayerName] = useState('');
    const [runGame, setRunGame] = useState(false);
    const [score, setScore] = useState(0);
    const [runEnd, setRunEnd] = useState(false);
    const [actualRound, setActualRound] = useState(1);

    const manageStartClick = (name) => {
        setPlayerName(name);
        setRunGame(true);
        setScore(0);
        setRunEnd(false);

    };

    const Ending = (score) => {
        setScore(score);
        setRunGame(false);
        setRunEnd(true);
    };

    if (!runGame && !runEnd) {
        return (
            <div>
                <h1>Hi! What's your name?</h1>
                <input
                    type="text"
                    placeholder="Kid's name"
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                <button onClick={() => manageStartClick(playerName)}>Start</button>
            </div>
        );
    }else if (runGame) {
        return (
            <div>
                <Game
                    playerName={playerName}
                    score={score}
                    setScore={setScore}
                    Ending={Ending}
                    actualRound={actualRound}
                    setActualRound={setActualRound}

                />
            </div>
        );
    }
    else if (runEnd){
        return(
            <End playerName={playerName} score={score}/>
        )
    } 
}

export default Start;