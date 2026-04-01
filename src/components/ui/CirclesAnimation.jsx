import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import "../../index.css";

const CirclesAnimation = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Different spring configurations for layered trailing effects
  const fastSpring = { damping: 20, stiffness: 300 };
  const midSpring = { damping: 25, stiffness: 150 };
  const slowSpring = { damping: 30, stiffness: 80 };

  const x1 = useSpring(mouseX, fastSpring);
  const y1 = useSpring(mouseY, fastSpring);
  
  const x2 = useSpring(mouseX, midSpring);
  const y2 = useSpring(mouseY, midSpring);
  
  const x3 = useSpring(mouseX, slowSpring);
  const y3 = useSpring(mouseY, slowSpring);

  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999999 }}>
      {/* Slow Large Ring */}
      <motion.div
        style={{
          position: 'fixed',
          x: x3,
          y: y3,
          translateX: "-50%",
          translateY: "-50%",
          width: '50px',
          height: '50px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          mixBlendMode: 'difference'
        }}
      />

      {/* Mid Ring (The Main Follower) */}
      <motion.div
        className="circle-follower"
        style={{
          x: x2,
          y: y2,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          borderColor: isClicking ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* Fast Inner Core */}
        <motion.div 
          style={{
            width: '12px',
            height: '12px',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-1 h-1 bg-white rounded-full opacity-50" />
        </motion.div>
      </motion.div>

      {/* Instant Center Dot */}
      <motion.div
        style={{
          position: 'fixed',
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: '4px',
          height: '4px',
          backgroundColor: 'white',
          borderRadius: '50%',
          mixBlendMode: 'difference'
        }}
      />
    </div>
  );
};

export default CirclesAnimation;
