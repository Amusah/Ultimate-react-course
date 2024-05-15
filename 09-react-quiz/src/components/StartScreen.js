import StartButton from "./StartButton";

function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React mastery</h3>
      <StartButton dispatch={dispatch} actionType={'start'}>Let's start!</StartButton>
    </div>
  );
}

export default StartScreen;
