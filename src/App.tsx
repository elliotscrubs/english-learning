import { useMemo, useState } from 'react';
import './App.css';
import Question from './Question';
import Result from './Result';
import { Word } from './types';
import words from './words.json';


function App() {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState(0);

  const options = useMemo(() => {
    const options: Word[] = [];
    while (options.length < 40) {
      const word = words[Math.floor(Math.random() * words.length)];
      if (!options.find(option => option.english === word.english)) {
        options.push(word);
      }
    }
    return options;
  }, []);

  const options2 = useMemo(
    () => options.slice(index * 4, index * 4 + 4),
    [index, options]
  );

  return index === 10 ? (
    <Result score={score} />
  ) : (
    <>
      <Question
        options={options2}
        onAnswer={correct => setScore(correct ? score + 1 : score)}
      />
      <button
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '30px',
          padding: '10px',
        }}
        onClick={() => setIndex(index + 1)}>
        Next
      </button>
    </>
  );
}

export default App;
