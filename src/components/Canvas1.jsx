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
      <h1>Drawing Simple Shapes</h1>
      <div className="canvas-and-p1">
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
