function NextButton({ dispatch, answer, index, numOfQuestions, status }) {
  if (answer === null) return null;

  if(index < numOfQuestions - 1) return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );

  if (index === numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );

  if (status === 'finished')
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    );  
}

export default NextButton;
