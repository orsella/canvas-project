import { useEffect, useRef } from "react";

export default function Canvas2() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      canvas.width = 600;
      canvas.height = 300;

      ctx.beginPath();
      ctx.arc(150, 150, 100, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(220, 150);
      ctx.arc(150, 150, 70, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(130, 130);
      ctx.arc(120, 130, 10, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(190, 130);
      ctx.arc(180, 130, 10, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(120, 130, 10, 0, Math.PI * 2, true); // Left eye
      ctx.fill();
      ctx.beginPath();
      ctx.arc(180, 130, 10, 0, Math.PI * 2, true); // Right eye
      ctx.fill();

      // Second smiley face
      ctx.beginPath();
      ctx.arc(450, 150, 100, 0, Math.PI * 2, true); // Outer circle
      // ctx.moveTo(520, 150);
      ctx.arc(450, 150, 70, 0, Math.PI, false); // Mouth (clockwise)
      // ctx.moveTo(430, 130);
      ctx.arc(420, 130, 10, 0, Math.PI * 2, true); // Left eye
      // ctx.moveTo(490, 130);
      ctx.arc(480, 130, 10, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();
    }
  }, []);
  return (
    <div className="canvas-sections">
      <h1 className="box-headings">Drawing Lines And Arcs</h1>
      <div className="canvas-and-p2">
        <canvas ref={canvasRef} className="canvas"></canvas>
        <p className="text-content">
          To draw lines/arcs: <br></br>
          <br></br>
          beginPath method used to start a path/reset path<br></br>
          <br></br>
          arc method creates a arc centered at the given x and y position, you
          declare the radius, as well as the starting and ending angle (Math.PI
          * 2 for a circle)<br></br>
          <br></br>
          Can also declare true or false to set the rotation of the circle
          <br></br>
          <br></br>
          moveTo moves to the next drawing position with drawing anything
        </p>
      </div>
    </div>
  );
}
