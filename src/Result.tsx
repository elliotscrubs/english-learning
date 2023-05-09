const Result = ({ score }: { score: number }) => {
  return (
    <div>
      <div className='top'>
        <div className='text'>
          <p>Gratulálok, ennyi pontot értél el:</p>
        </div>
      </div>
      <div className='bottom'>
        <div className='result'>
          <p>{score} / 10</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
