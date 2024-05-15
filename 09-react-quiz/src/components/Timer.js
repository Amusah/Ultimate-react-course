import { useEffect } from "react";

function Timer({ disptach, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(
    function () {
      const timerId = setInterval(() => {
        disptach({ type: "tick" });
      }, 1000);

      return () => clearInterval(timerId);
    },
    [disptach]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:
      {secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
