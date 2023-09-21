import React from "react";

function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🚀";
  return (
    <>
      <p className="result">
        {" "}
        {emoji} You scored <strong> {points} </strong> points out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore"> (highscore:{highScore} points) </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart!
      </button>
    </>
  );
}

export default FinishedScreen;
