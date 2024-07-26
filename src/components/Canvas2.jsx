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
