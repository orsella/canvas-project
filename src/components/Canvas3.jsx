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
      <h1>Testing</h1>
      <div className="canvas-and-p3">
        <canvas ref={canvasRef} className="canvas"></canvas>
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
