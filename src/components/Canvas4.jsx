import { useEffect, useRef } from "react";

export default function Canvas4() {
  const canvasRef = useRef(null);
  let offset = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 300;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setLineDash([8, 6]);
      ctx.lineDashOffset = -offset;
      ctx.strokeRect(40, 40, 410, 220);

      // Draw inner circle
      ctx.setLineDash([8, 4]);
      ctx.lineDashOffset = +offset; // set to + to rotate circle same way
      ctx.beginPath();
      ctx.arc(245, 150, 50, 0, Math.PI * 2, true);
      ctx.stroke();
    }

    function march() {
      offset++;
      draw();
      const timeoutId = setTimeout(march, 20);
      return timeoutId;
    }

    const timeoutId = march();
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="canvas-sections">
      <h1>Simple Animation</h1>
      <div className="canvas-and-p4">
        <canvas ref={canvasRef} className="canvas"></canvas>
        <p className="text-content">
          For simple line animation:<br></br>
          setLineDash used to declare length of dashes in px and the gap between
          them, used in combination with strokeRect<br></br>
          the starting point of the dashes is moved a set amount and then the
          shape is drawn again set to the rate of the timer
        </p>
      </div>
    </div>
  );
}
