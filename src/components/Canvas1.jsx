import { useEffect, useRef } from "react";

export default function Canvas2() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect(30, 30, 50, 50);
    }
  }, []);

  return (
    <div className="canvas-sections">
      <h1>Testing</h1>
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
