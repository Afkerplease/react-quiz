import React from "react";

function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;
  console.log(question);
  return (
    <div className="options">
      {question.options.map((qstn, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }  `}
          key={qstn}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {" "}
          {qstn}{" "}
        </button>
      ))}
    </div>
  );
}

export default Options;
