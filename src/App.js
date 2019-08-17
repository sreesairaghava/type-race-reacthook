import React, { useState } from "react";
import "./App.css";

const App = () => {
  const SNIPPETS = [
    "Bears, beets, battlestar galactica",
    "Where do programmers like to hangout? The Foo Bar",
    "What's Forrest Gump's password? Forrest1",
    "Sree Sai Raghava"
  ];
  //!This is new feature to use React Hooks
  const INITIAL_GAME_START = { victory: false, startTime: null, endTime: null };
  const [snippet, setSnippet] = useState("");
  const [userText, setUserText] = useState("");
  const [gameState, setGameState] = useState(INITIAL_GAME_START);
  //* Creating Helper Function to set user text
  const updateUserText = event => {
    setUserText(event.target.value);
    if (event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
  };
  // *Creating Helper Function to choose Snippet
  const chooseSnippet = snippetIndex => () => {
    console.log("setSnippet", snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({
      ...gameState,
      startTime: new Date().getTime()
    });
  };
  return (
    <div
      style={{
        width: "80%",
        height: "500px",
        margin: "0 auto"
      }}
    >
      <h2
        style={{
          color: "red"
        }}
      >
        Type Race
      </h2>
      {SNIPPETS.map((SNIPPET, index) => (
        <button
          onClick={chooseSnippet(index)}
          key={index}
          style={{
            padding: "10px",
            color: "white",
            borderRadius: "5px",
            backgroundColor: "blue",
            border: "none",
            margin: "10px",
            cursor: "pointer"
          }}
        >
          {SNIPPET.substring(0, 10)}...
        </button>
      ))}
      <br />
      <h4> {snippet} </h4>
      <br />
      <input
        value={userText}
        onChange={updateUserText}
        style={{
          padding: "20px",
          marginTop: "20px",
          width: "50%",
          outline: "none",
          color: "red"
        }}
      />
      <h4>
        {gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}ms` : null}
      </h4>
      <hr />
    </div>
  );
};

export default App;
