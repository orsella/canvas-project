// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Canvas1 from "./components/Canvas1";
import Canvas2 from "./components/Canvas2";
import Canvas3 from "./components/Canvas3";
import Canvas4 from "./components/Canvas4";

function App() {
  return (
    <body className="body">
      <Header></Header>
      <main className="main">
        <Canvas1></Canvas1>
        <Canvas2></Canvas2>
        <Canvas3></Canvas3>
        <Canvas4></Canvas4>
      </main>
    </body>
  );
}

export default App;
