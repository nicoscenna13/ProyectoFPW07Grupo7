import React, { useState, useEffect } from 'react';
import data from '../data/animals.json';

function Game({ playerName, score, setScore, Ending, actualRound,setActualRound }) {
    const [targetAnimal, setTargetAnimal] = useState('');
    const [options, setOptions] = useState([]);
    const [isRight, setIsRight] = useState(null);
    const [totalRounds, setTotalRounds] = useState(Math.floor(Math.random() * 6) + 5);
    const [canClick, setCanClick] = useState(true);


   

    const getRandomAnimal = () => {
         const animals = data;
         const randomIndex = Math.floor(Math.random() * animals.length);
         const randomAnimal= animals[randomIndex];
         console.log(randomAnimal);
         return animals[randomIndex];
     };

     const getRandomOptions = () => {
         const rightAnimal = getRandomAnimal();
         let randomOptions = [rightAnimal];

         while (randomOptions.length < 3) {
             const option = getRandomAnimal();
             if (!randomOptions.includes(option)) {
                 randomOptions.push(option);
             }
         }

         randomOptions = randomOptions.sort(() => Math.random() - 0.5);

         setOptions(randomOptions);
         setTargetAnimal(rightAnimal);
         console.log(randomOptions);
         console.log("the targetAnimal is " + rightAnimal.key);
    };

   const verifyAnswer = (selectedAnimal) => {
         if (selectedAnimal === targetAnimal) {
             setIsRight(true);
             setScore(score + 1);
         } else {
             setIsRight(false);
         }
         setCanClick(false);
     };

     const nextRound = () => {
         if (actualRound < totalRounds) {
             setActualRound(actualRound + 1);
             setIsRight(null);
             setCanClick(true);
             getRandomOptions();
         } else {
             Ending(score);
         }
     };

     const disabledOptions = isRight !== null;

     useEffect(() => {
         getRandomOptions();
     }, []);

      return (
         <div>
              <h1>{playerName}, What is this animal?</h1>
              <p>Actual Round: {actualRound}</p>
              <img src={`img/${targetAnimal.key}.png`} alt={targetAnimal.key} />
              <div>
                  {options.map((animal) => (
                      <button
                          key={animal.key}
                          onClick={() => verifyAnswer(animal)}
                          disabled={!canClick || disabledOptions}
                      >
                          {animal.key}
                      </button>
                  ))}
              </div>
              {isRight === true && <p>¡Right! You're awesome</p>}
              {isRight === false && <p>¡Wrong! Best luck next time</p>}
              <button onClick={nextRound}>Next round</button>
          </div>
      );
                 }
 

export default Game;
