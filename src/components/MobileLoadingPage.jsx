import React, { useEffect, useState } from "react";
import logo from "../assets/icon_buu.png";

export default function MobileLoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    const timer = setInterval(() => {
      const next = Math.min(100, ((Date.now() - startedAt) / 4000) * 100);
      setProgress(next);
      if (next === 100) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] flex h-[100dvh] flex-col items-center justify-center overflow-hidden bg-black px-10">
      <img src={logo} alt="Anas Bounaim" className="h-auto w-36 object-contain drop-shadow-2xl" />
      <div className="mt-12 h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-zinc-800 shadow-inner">
        <div className="h-full rounded-full bg-white" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-3 text-lg font-medium tabular-nums text-white">{Math.round(progress)}%</p>
    </div>
  );
}
