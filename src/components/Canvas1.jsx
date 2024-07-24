import React from "react";

const Canvas = (props) => <canvas {...props} />;

export default function Canvas() {
  return (
    <div>
      <h1>Testing</h1>
      <canvas className="canvas1"></canvas>
      <p></p>
    </div>
  );
}
