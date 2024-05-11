import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  questionNumber: 0,

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
      return { ...state, status: 'active'}

    // case 'loading':
    //   return { ...state, status: 'loading'}
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status, questionNumber }, dispatch] = useReducer(reducer, initialState);
  const numOfQuestions = questions.length; // derived state

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
        {status === "ready" && <StartScreen dispatch={dispatch} numOfQuestions={numOfQuestions} />}
        {status === 'active' && <Question question={questions[questionNumber]}/>}
      </Main>
    </div>
  );
}

export default App;
