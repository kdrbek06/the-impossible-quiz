 import React, {useState} from 'react';
import './App.css';
import Questions from './assets/questions.json';

const {questions} = Questions;

function App() {
  
  const [index, setIndex] = useState<number>(0);
  const [question, setQuestion] = useState<string>(questions[0].question);
  const [options, setOptions] = useState<string[]>(questions[0].answers);
  const [answer, setAnswer] = useState<string>(questions[0].answers[questions[0].correctIndex]);
  


//REMEMBER WHICH QUESTION WE ARE ON
//WRITE THE QUESTION
//WRITE THE OPTIONS
//NEXT QUESTION BUTTON
//SET A TIMER
//SCORE TABLE



const optionClickHandler = (option : string) => {
  if(option === answer){
    console.log('Bingoooo');

    if(index  + 1  <= questions.length - 1){
      
      setIndex(index + 1);
      setQuestion(questions[index + 1].question);
      setOptions(questions[index + 1].answers);
      setAnswer(questions[index + 1].answers[questions[index + 1].correctIndex]);

    } else {
      console.log('you finished the quiz...')
    }
      


  } else {
    console.log('wrong answer');
  }
}

  return (
    <div className="App">
      <div className="question">
        {`${index + 1} - ${question}`}
      </div>
      <div className="options">
        {options.map((option) => (
          <button key={option} onClick={() => optionClickHandler(option)}>{option}</button>
        )

        )}
      </div>
    </div>
  );
}

export default App;
