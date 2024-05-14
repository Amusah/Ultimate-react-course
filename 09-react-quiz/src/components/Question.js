function Question({ question, dispatch, answer }) {
  const { question: quest, options, points, correctOption } = question;
  console.log(question);
  return (
    <div>
      <h4>{quest}</h4>
      <Option
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOption={correctOption}
      />
    </div>
  );
}

function Option({ options, dispatch, answer, correctOption }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
