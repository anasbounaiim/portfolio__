import React, { useEffect, useRef, useState } from "react";
import { motion, useDragControls, useMotionValue, animate } from "framer-motion";
import { MdOutlineClose, MdOutlineMinimize, MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";
import { useWindowContext } from "../../context/WindowContext";

// Corrected feature imports
import Home from "../../features/Home";
import About from "../../features/About";
import Porfolio from "../../features/Portfolio";
import Contact from "../../features/Contact";
import Games from "../../features/Games";
import Videos from "../../features/Videos";

import "animate.css";

const Onglet = ({
  title,
  size,
  handleClose,
  handleMinimize,
  handleMaximize,
  onFocus,
  isMinimized,
  isMaximized,
  content,
  id,
  initialX,
  initialY,
  styles: zIndexValue,
}) => {
  const { tabPositions } = useWindowContext();
  const windowRef = useRef(null);
  
  // High-performance Motion Values for smooth dragging without lag
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Track last drag position for memory restoration
  const lastPosition = useRef({ x: 0, y: 0 });
  const [minimizeOffsets, setMinimizeOffsets] = useState({ x: 0, y: 0 });

  const handlePointerDown = (event) => {
    if (onFocus) onFocus();
  };

  // Sync motion values back to lastPosition ref whenever they change during drag
  const onDrag = (event, info) => {
    lastPosition.current = { x: info.offset.x, y: info.offset.y };
  };

  // Calculate coordinates when minimizing to target the taskbar tab accurately
  useEffect(() => {
    if (isMinimized && windowRef.current && tabPositions[id]) {
      const rect = windowRef.current.getBoundingClientRect();
      const tabPos = tabPositions[id];
      setMinimizeOffsets({
        x: tabPos.x - (rect.left - (lastPosition.current.x) + rect.width / 2),
        y: tabPos.y - (rect.top - (lastPosition.current.y) + rect.height / 2)
      });
    }
  }, [isMinimized, tabPositions, id]);

  // Handle transitions imperatively to prevent "fighting" with the drag system
  useEffect(() => {
    const transition = {
      type: "spring",
      stiffness: isMinimized ? 150 : 220,
      damping: isMinimized ? 20 : 16,
      mass: isMinimized ? 1.2 : 1
    };

    if (isMinimized) {
      animate(x, minimizeOffsets.x, transition);
      animate(y, minimizeOffsets.y, { ...transition, stiffness: 100, damping: 15, mass: 1.5 });
    } else if (isMaximized) {
      animate(x, 0, transition);
      animate(y, 0, transition);
    } else {
      // Restore to last known drag position
      animate(x, lastPosition.current.x, transition);
      animate(y, lastPosition.current.y, { ...transition, stiffness: 250, damping: 14, mass: 1.2 });
    }
  }, [isMinimized, isMaximized, minimizeOffsets, x, y]);

  // Maximized styles
  const maximizedClasses = isMaximized 
    ? "fixed inset-0 !w-full !h-[calc(100vh-36px)] !rounded-none !top-0 !left-0 z-[9999]" 
    : `absolute ${size} rounded-lg`;

  return (
    <motion.div
      ref={windowRef}
      layout // Enable smooth resizing/moving between layout states
      style={{
        left: isMaximized ? 0 : `${initialX}px`, 
        top: isMaximized ? 0 : `${initialY}px`,
        x, // Connect motion value
        y, // Connect motion value
        zIndex: zIndexValue,
        pointerEvents: isMinimized ? 'none' : 'auto',
        touchAction: 'none',
        transformOrigin: "bottom center",
        willChange: "transform, filter, opacity"
      }}
      drag={!isMaximized && !isMinimized}
      dragMomentum={true}
      dragElastic={0}
      dragTransition={{ power: 0.1, timeConstant: 200 }}
      onDrag={onDrag}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ 
        opacity: isMinimized ? 0 : 1, 
        // Asymmetric "Straw" Liquid Suction
        scaleX: isMinimized ? 0.02 : 1, 
        scaleY: isMinimized ? 0.005 : 1,
        // The "Bend": skew and rotate to point toward taskbar suction
        skewX: isMinimized ? (minimizeOffsets.x > 0 ? 35 : -35) : 0,
        rotateZ: isMinimized ? (minimizeOffsets.x > 0 ? 10 : -10) : 0,
        // Stylish Brightness Peak on Restore
        filter: isMinimized 
          ? "blur(12px) brightness(1.4) saturate(1.2)" 
          : "blur(0px) brightness(1) saturate(1)",
      }}
      whileDrag={{ 
        scale: 1.02, 
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        zIndex: 999999
      }}
      transition={{ 
        duration: isMinimized ? 0.5 : 0.6,
        ease: [0.6, -0.28, 0.735, 0.045], 
        opacity: { duration: 0.3, delay: isMinimized ? 0.2 : 0 },
        // x and y: Snappier restore with rubber jiggle
        x: { 
          type: "spring", 
          stiffness: isMinimized ? 150 : 220, 
          damping: isMinimized ? 20 : 16, 
          mass: isMinimized ? 1.2 : 1 
        },
        y: { 
          type: "spring", 
          stiffness: isMinimized ? 100 : 250, 
          damping: isMinimized ? 15 : 14, 
          mass: isMinimized ? 1.5 : 1.2 
        },
        // Staggered liquid scaling (In: thin first; Out: tall first - "Rocket" effect)
        scaleX: { 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          delay: isMinimized ? 0 : 0.15 
        },
        scaleY: { 
          type: "spring", 
          stiffness: 250, 
          damping: 12,
          delay: isMinimized ? 0.1 : 0 
        },
        skewX: { type: "spring", stiffness: 100, damping: 10 },
        rotateZ: { type: "spring", stiffness: 100, damping: 10 },
        filter: { duration: 0.4 },
        // Smooth resizing spring
        layout: { type: "spring", stiffness: 200, damping: 25, mass: 1 }
      }}
      className={`${maximizedClasses} bg-white overflow-hidden drop-shadow-2xl window-glass`}
      onPointerDown={handlePointerDown}
    >
      {/* Header - Drag Handle */}
      <div
        className={`w-full bg-blue-600 select-none ${isMaximized ? 'cursor-default' : 'cursor-move'} flex h-8 items-center px-2 text-white text-base font-medium shadow-md`}
        onDoubleClick={handleMaximize}
      >
        <span className="min-w-0 flex-1 truncate">{title}</span>
        <div className="flex shrink-0 items-center gap-1" onPointerDown={e => e.stopPropagation()}>
          {/* Minimize Button */}
          <button
            className="flex h-5 w-8 cursor-pointer items-center justify-center rounded-[3px] border border-white/25 bg-white/15 text-white shadow-sm transition-all hover:bg-white/25 hover:shadow-md active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              handleMinimize();
            }}
            title="Minimize"
          >
            <MdOutlineMinimize className="text-base drop-shadow-sm" />
          </button>

          {/* Maximize/Restore Button */}
          <button
            className="flex h-5 w-8 cursor-pointer items-center justify-center rounded-[3px] border border-white/25 bg-white/15 text-white shadow-sm transition-all hover:bg-white/25 hover:shadow-md active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              handleMaximize();
            }}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? <MdOutlineFullscreenExit className="text-base drop-shadow-sm" /> : <MdOutlineFullscreen className="text-base drop-shadow-sm" />}
          </button>

          {/* Close Button */}
          <button
            className="flex h-5 w-8 cursor-pointer items-center justify-center rounded-[3px] border border-red-600 bg-red-500 text-white shadow-sm transition-all hover:bg-red-400 hover:shadow-md active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            title="Close"
          >
            <MdOutlineClose className="text-base font-bold drop-shadow-sm" />
          </button>
        </div>
      </div>

      <div className="h-10 w-full bg-gray-100/90 border-b border-gray-200 flex justify-start items-center z-50 shadow-sm relative px-3">
        <p className="text-sm font-semibold text-gray-600 mr-2 shrink-0">Address :</p>
        <div className="bg-white/80 border border-gray-200 flex-1 h-7 px-4 text-sm font-semibold rounded-md text-gray-600 flex items-center shadow-inner truncate">
          C:\Users\PC\Portfolio\<span className="ml-[1px]">{content}</span>
        </div>
      </div>

      <div className="h-[calc(100%-4.5rem)] w-full overflow-y-auto scroll-smooth bg-white">
        {content === "home" && <div className="p-4"><Home /></div>}
        {content === "about" && <div className="p-4"><About /></div>}
        {content === "portfolio" && <div className="p-4"><Porfolio /></div>}
        {content === "contact" && <div className="p-4"><Contact /></div>}
        {content === "games" && <div className="h-full bg-white"><Games /></div>}
        {content === "videos" && <div className="h-full bg-[#111827]"><Videos /></div>}
        {content === "bin" && (
          <div className="flex justify-center items-center h-full">
            <span className="mb-9 text-lg font-medium text-zinc-400 italic">
              your mind should be clean like this recycle bin
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Onglet;
