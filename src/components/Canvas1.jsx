import { useEffect, useRef } from "react";

export default function Canvas1() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      canvas.width = 500;
      canvas.height = 300;

      ctx.fillStyle = "rgb(0, 0, 255)";
      ctx.fillRect(10, 10, 150, 150);

      ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
      ctx.fillRect(85, 85, 150, 150);

      ctx.fillStyle = "black";
      ctx.fillRect(290, 25, 160, 160);
      ctx.clearRect(310, 45, 120, 120);
      ctx.strokeRect(315, 50, 110, 110);
    }
  }, []);

  return (
    <div className="canvas-sections">
      <h1 className="box-headings">Drawing Simple Shapes</h1>
      <div className="canvas-and-p1">
        <canvas ref={canvasRef} className="canvas"></canvas>
        <p className="text-content">
          To make a simple rectangle: <br></br>
          <br></br> fillRect method draws a filled rectangle where you declare
          the x and y starting position and then specify the width and height
          <br></br>
          <br></br> fillStyle is used to set the colour of the rectangle
          <br></br>
          <br></br>
          clearRect uses the same co-ordinated as fillRect, this creates a hole
          in the rectangle<br></br>
          <br></br> strokeRect draws the line of a rectangle with no fill
        </p>
      </div>
    </div>
  );
}
