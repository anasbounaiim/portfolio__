import React, { useEffect, useRef } from 'react';
import "../index.css";

const CirclesAnimation = () => {
  const circlesRef = useRef([]);
  const coordsRef = useRef({ x: 0, y: 0 });

  const colors = [
    "#FF0066",
  ];

  useEffect(() => {
    circlesRef.current = circlesRef.current.slice(0, colors.length);

    circlesRef.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coordsRef.current.x = e.clientX;
      coordsRef.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coordsRef.current.x;
      let y = coordsRef.current.y;

      circlesRef.current.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999999 }}>
      {colors.map((color, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className="circle"
        ></div>
      ))}
    </div>
  );
};

export default CirclesAnimation;
