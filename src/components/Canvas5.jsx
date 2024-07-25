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
      <h1>Bouncy Ball</h1>
      <div className="canvas-and-p3">
        <canvas ref={canvasRef} className="canvas" id="bouncy"></canvas>
        <p className="text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          bibendum dignissim orci id venenatis. Vestibulum imperdiet augue
          metus, sit amet commodo ipsum aliquam sed. Curabitur mattis, nibh in
          blandit feugiat, ligula tellus vestibulum nulla, a auctor est dolor
          pulvinar diam. Nam augue lacus, ultricies vitae lacus ut, tristique
          varius augue. In sapien enim, convallis sed viverra sed, ornare ut
          ante. Duis vitae est pellentesque, vulputate nulla non, efficitur
          dolor. Integer laoreet libero ac erat fermentum mollis. Vivamus sit
          amet quam sit amet ligula aliquam rhoncus eget at orci. Suspendisse
          sed dui auctor, posuere erat nec, ultricies elit. Maecenas vehicula
          semper sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent vehicula nisl interdum, viverra mauris eget, lobortis
          odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
