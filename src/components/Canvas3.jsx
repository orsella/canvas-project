import { useEffect, useRef } from "react";

export default function Canvas3() {
  const canvasRef = useRef(null);

  const drawCircles = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
    for (let i = 0; i < 80; i++) {
      let x = Math.random() * 500;
      let y = Math.random() * 300;
      let red = Math.random() * 255;
      let blue = Math.random() * 255;
      let green = Math.random() * 255;
      let radius = Math.random() * 20;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = `rgba(${red}, ${blue}, ${green}, 0.8)`;
      ctx.stroke();
      ctx.fillStyle = `rgba(${red}, ${blue}, ${green}, 0.8)`;
      ctx.fill();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      canvas.width = 500;
      canvas.height = 300;

      drawCircles(ctx, canvas);

      const handleClick = () => {
        drawCircles(ctx, canvas);
      };

      canvas.addEventListener("click", handleClick);

      return () => {
        canvas.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <div className="canvas-sections">
      <h1 className="box-headings">Random Circles</h1>
      <div className="canvas-and-p3">
        <canvas ref={canvasRef} className="canvas" id="circles"></canvas>
        <p className="text-content">
          **Drawing Circles**: Each time the canvas is clicked, the function
          draws 80 circles at random positions on the canvas.
          <br />
          <br />
          **Random Attributes**: Each circle has a random position, radius, and
          color, each click generates a unique pattern.
          <br />
          <br />
          **Interactivity**: Clicking on the canvas triggers the drawing
          function, creating a new set of random circles each time.
        </p>
      </div>
    </div>
  );
}
