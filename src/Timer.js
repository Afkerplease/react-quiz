import React, { useEffect } from "react";

function Timer({ dispatch, secoondsRemaining }) {
  const mins = Math.floor(secoondsRemaining / 60);
  const seconds = secoondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {" "}
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
