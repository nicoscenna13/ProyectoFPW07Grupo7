import React from 'react';

function End({ playerName, score}) {
    return (
        <div>
            <h1>Congratulations, {playerName}!</h1>
            <p>Your score is: {score}</p>
        </div>

    );
}

export default End;