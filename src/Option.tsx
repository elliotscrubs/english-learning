import { Word } from "./types";

interface OptionProps {
    option: Word;
    solution: Word;
    answer?: Word;
    onClick: () => void;
  }
  
  function Option({ option, solution, answer, onClick }: OptionProps) {
    const isCorrect = answer && option.english === solution.english;
    const isInCorrect =
      answer?.english === option.english &&
      option.english !== solution.english;
  
    return (
      <div className='card'>
        <button
          onClick={onClick}
          disabled={!!answer}
          className={isCorrect ? 'correct' : isInCorrect ? 'inCorrect' : ''}>
          <p>{option.english}</p>
        </button>
      </div>
    );
  }
  export default Option;