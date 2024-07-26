import { useEffect, useRef } from "react";

export default function Canvas5() {
  const canvasRef = useRef(null);

  const animateBall = (ctx, canvas) => {
    let xc = Math.random() * canvas.width; // x coordinate
    let yc = Math.random() * canvas.height; // y coordinate
    let dx = (Math.random() - 0.5) * 5; // velocity of x movement
    let dy = (Math.random() - 0.5) * 5; // velocity of y movement
    const radius = 35;

    let currentColor = "white"; // Initial color

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(xc, yc, radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = "black";
      ctx.fillStyle = currentColor;
      ctx.fill();
      ctx.stroke();

      if (xc + radius > canvas.width || xc - radius < 0) {
        currentColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, 0.8)`;
        dx = -dx;
      }
      if (yc + radius > canvas.height || yc - radius < 0) {
        currentColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, 0.8)`;
        dy = -dy;
      }

      xc += dx;
      yc += dy;
    }

    animate();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      canvas.width = 500;
      canvas.height = 300;

      animateBall(ctx, canvas);
    }
  }, []);

  return (
    <div className="canvas-sections">
      <h1 className="box-headings">Bouncy Ball</h1>
      <div className="canvas-and-p3">
        <canvas ref={canvasRef} className="canvas" id="bouncy"></canvas>
        <p className="text-content">
          **Starting Point**: The ball starts at a random position on the
          canvas.
          <br />
          <br />
          **Movement**: The ball moves in a random direction with a random
          speed.
          <br />
          <br />
          **Boundary Collision**: When the ball hits the edge of the canvas, it
          changes direction, creating a bouncing effect.
          <br />
          <br />
          **Color Change**: Each time the ball hits the canvas edge, it also
          changes to a new random color, making the animation visually dynamic.
          <br />
          <br />
          **Continuous Animation**: The animation runs continuously, creating
          the effect of a ball bouncing around the canvas without stopping.
          <br />
        </p>
      </div>
    </div>
  );
}
