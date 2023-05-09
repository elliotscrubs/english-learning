import { useMemo, useState, useEffect, useCallback } from 'react';
import { Word } from './types';
import Option from './Option';

interface QuestionProp {
    options: Word[];
    onAnswer: (correct: boolean) => void;
  }
  
  const Question = ({ options, onAnswer }: QuestionProp) => {
    const [answer, setAnswer] = useState<Word>();
    const solution = useMemo(
      () => options[Math.floor(Math.random() * options.length)],
      [options]
    );
  
    useEffect(() => setAnswer(undefined), [options]);
  
    const onClickHandler = useCallback(
      (option: Word) => {
        setAnswer(option);
        onAnswer(option.english === solution.english);
      },
      [onAnswer, solution]
    );
  
    return (
      <div>
        <div className='top'>
          <div className='text'>
            <p>Hogyan mondod, hogy</p>
          </div>
          <div className='hungarian'>
            <p>" {solution.hungarian} "</p>
          </div>
          <div className='text2'>
            <p>angolul?</p>
          </div>
        </div>
        <div className='bottom'>
          {options.map((option, i) => (
            <Option
              key={i}
              option={option}
              solution={solution}
              onClick={() => onClickHandler(option)}
              answer={answer}
            />
          ))}
          ;
        </div>
      </div>
    );
  };

  export default Question;  
  
  