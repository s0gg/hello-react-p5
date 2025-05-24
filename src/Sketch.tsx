import { useEffect } from "react";
import p5 from "p5";

const sampleSketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };
  p.draw = () => {
    p.clear();
    p.circle(p.mouseX, p.mouseY, 100);
  };
}

export const Sketch = () => {
  useEffect(() => {
    new p5(sampleSketch);
  }, [sampleSketch]);

  return (<></>);
};
