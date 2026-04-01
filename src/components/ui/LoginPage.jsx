import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPowerOff, FaWifi, FaBatteryThreeQuarters, FaRedo } from "react-icons/fa";

const LoginPage = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  // Animation Variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0, scale: 0.9 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center font-sans selection:bg-blue-500/30 overflow-hidden"
    >
      {/* Material Style Black Low-Opacity Backdrop */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Main Content Area */}
      <div className="z-10 flex-1 flex flex-col items-center justify-center -mt-16 w-full">
        {/* Authentication Section */}
        <div className="flex flex-col items-center max-w-sm w-full px-4">
          {/* Avatar Section */}
          <motion.div
            variants={itemVariants}
            className="w-40 h-40 rounded-full border-[1.5px] border-white/20 p-0.5 mb-8 shadow-2xl relative"
          >
            <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse" />
            <img
              src="https://ui-avatars.com/api/?name=Anas+Bounaim&rounded=true&size=160&color=ffffff&background=333"
              className="w-full h-full rounded-full object-cover shadow-inner"
              alt="Anas Bounaim"
            />
          </motion.div>

          {/* User Name */}
          <motion.div variants={itemVariants} className="mb-10">
            <h1 className="text-white text-4xl font-bold tracking-tight drop-shadow-lg">
              Anas Bounaim
            </h1>
          </motion.div>

          {/* Input Section */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="relative w-[320px] group"
          >
            <input
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Just smash the keyboard"
              className="w-full bg-transparent border-b border-white/40 py-2 text-white text-[15px] placeholder-white/30 focus:outline-none focus:border-white transition-colors focus:ring-0 text-left px-1"
            />
            <button
              type="submit"
              className={`absolute right-1 bottom-3 w-6 h-6 flex items-center justify-center text-white/40 hover:text-white transition-all transform ${password.length > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
              <FaArrowRight size={16} />
            </button>
          </motion.form>
        </div>
      </div>

      {/* System Bottom Bar */}
      <motion.div
        variants={{
          initial: { y: 60, opacity: 0 },
          animate: { y: 0, opacity: 1, transition: { type: "spring", damping: 15, stiffness: 80, delay: 0.8 } }
        }}
        className="absolute bottom-0 left-0 right-0 h-16 bg-black/10 flex items-center justify-between px-8 text-white/80"
      >
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.location.reload()}
            className="flex items-center justify-center w-10 h-10 bg-red-600/80 hover:bg-red-500 rounded-lg text-white transition-colors cursor-pointer shadow-lg backdrop-blur-sm"
            title="Shut down"
          >
            <FaPowerOff size={18} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.location.reload()}
            className="flex items-center justify-center w-10 h-10 bg-orange-500/80 hover:bg-orange-400 rounded-lg text-white transition-colors cursor-pointer shadow-lg backdrop-blur-sm"
            title="Restart"
          >
            <FaRedo size={18} />
          </motion.div>
        </div>

        <div className="flex items-center font-medium tracking-wide">
          <span className="tabular-nums drop-shadow-md text-[20px] font-bold tracking-wider">{currentTime}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
