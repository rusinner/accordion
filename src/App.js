import React, { useState } from "react";
import SingleQuestion from "./Question";
import data from "./data";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
