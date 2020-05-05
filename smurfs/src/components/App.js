import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { SmurfContext } from "../contexts/SmurfContext";
import SmurfList from "./SmurfList";
import axios from "axios";
import Form from "./Form";

function App() {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        // console.log(res.data);
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs }}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;