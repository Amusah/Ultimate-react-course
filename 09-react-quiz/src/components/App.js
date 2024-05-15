import { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import StartButton from "./StartButton";
import Footer from "./Footer";
import Timer from "./Timer";

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,

  // loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "dataReceived":
      return { ...state, questions: payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active", secondsRemaining: state.questions.length * SECS_PER_QUESTION };

    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: payload,
        points:
          payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return {
        ...state,
        // questions: [],
        index: 0,
        answer: null,
        points: 0,
        // highscore: 0,
        status: "ready",
        secondsRemaining: 10,
      };

    case "tick":
      return {
        ...state,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
        secondsRemaining: state.secondsRemaining - 1,
        // highscore: state.highscore
      };

    // case 'loading':
    //   return { ...state, status: 'loading'}
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numOfQuestions = questions.length; // derived state
  const totalPoints = questions
    .map((question) => question.points)
    .reduce((total, value) => total + value, 0);
  // console.log(totalPoints);

  useEffect(function () {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        // console.log(data);
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        // console.log(error);
        dispatch({ type: "dataFailed" });
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} numOfQuestions={numOfQuestions} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numOfQuestions}
              points={points}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Timer secondsRemaining={secondsRemaining} disptach={dispatch} />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numOfQuestions={numOfQuestions}
              status={status}
            />
          </>
        )}
        {status === "finished" && (
          <>
            <FinishedScreen
              points={points}
              totalPoints={totalPoints}
              highscore={highscore}
            />
            <StartButton dispatch={dispatch} actionType={"restart"}>
              Restart quiz
            </StartButton>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
