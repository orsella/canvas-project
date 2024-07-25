// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Canvas1 from "./components/Canvas1";
import Canvas2 from "./components/Canvas2";
import Canvas3 from "./components/Canvas3";
import Canvas4 from "./components/Canvas4";
import Canvas5 from "./components/Canvas5";
import Canvas6 from "./components/Canvas6";
import Canvas7 from "./components/Canvas7";
import Canvas8 from "./components/Canvas8";

function App() {
  return (
    <body className="body">
      <Header></Header>
      <main className="main">
        <Canvas1></Canvas1>
        <Canvas2></Canvas2>
        <Canvas3></Canvas3>
        <Canvas4></Canvas4>
        <Canvas5></Canvas5>
        <Canvas6></Canvas6>
        <Canvas7></Canvas7>
        <Canvas8></Canvas8>
      </main>
    </body>
  );
}

export default App;
