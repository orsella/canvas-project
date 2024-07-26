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
      <h1 className="box-headings">Simple Animation</h1>
      <div className="canvas-and-p4">
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
