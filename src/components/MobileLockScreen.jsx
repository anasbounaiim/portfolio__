import React, { useEffect, useState } from "react";
import { FaBatteryThreeQuarters, FaWifi } from "react-icons/fa";
import animatedBackground from "../assets/logo_animated.gif";

const keys = [["1", ""], ["2", "ABC"], ["3", "DEF"], ["4", "GHI"], ["5", "JKL"], ["6", "MNO"], ["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"]];

export default function MobileLockScreen({ onLogin }) {
  const [now, setNow] = useState(new Date());
  const [passcode, setPasscode] = useState("");
  useEffect(() => { const timer = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(timer); }, []);
  const press = (number) => {
    const next = `${passcode}${number}`.slice(0, 4);
    setPasscode(next);
    if (next.length === 4) setTimeout(onLogin, 180);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex h-[100dvh] flex-col overflow-hidden bg-black text-white">
      <img
        src={animatedBackground}
        alt=""
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[88%] max-w-md -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.16] grayscale"
      />
      <div className="flex h-[calc(1.75rem+env(safe-area-inset-top))] shrink-0 items-end justify-between px-4 pb-1 text-xs font-semibold">
        <span className="flex items-center gap-1"><span className="tracking-[-2px]">●●●●○</span><FaWifi /></span>
        <span>{now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
        <span className="flex items-center gap-1">100% <FaBatteryThreeQuarters size={17} /></span>
      </div>
      <div className="relative z-10 flex h-[34vh] min-h-[230px] shrink-0 flex-col items-center justify-center px-4 pb-3 text-center">
        <div className="text-[clamp(4.5rem,22vw,6.5rem)] font-extralight leading-none tracking-tight">{now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
        <div className="mt-4 text-xl font-light text-white/90">{now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" })}</div>
        <div lang="ar" dir="rtl" className="mt-1 text-lg font-light text-white/70">{new Intl.DateTimeFormat("ar-MA-u-ca-islamic", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(now)}</div>
      </div>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center py-2">
        <p className="mb-2 text-lg font-light">Enter Passcode</p>
        <div className="mb-4 flex h-4 items-center gap-5">{[0, 1, 2, 3].map(i => <span key={i} className={`h-3 w-3 rounded-full border border-white ${i < passcode.length ? "bg-white" : "bg-transparent"}`} />)}</div>
        <div className="grid grid-cols-3 gap-x-7 gap-y-3">
          {keys.map(([number, letters]) => <button key={number} onClick={() => press(number)} className="flex h-[clamp(3.6rem,16vw,4.5rem)] w-[clamp(3.6rem,16vw,4.5rem)] flex-col items-center justify-center rounded-full border border-white/75 bg-white/5 active:bg-white/35"><span className="text-3xl font-light leading-7">{number}</span><span className="h-3 text-[9px] tracking-[.18em]">{letters}</span></button>)}
          <span /><button onClick={() => press("0")} className="flex h-[clamp(3.6rem,16vw,4.5rem)] w-[clamp(3.6rem,16vw,4.5rem)] items-center justify-center rounded-full border border-white/75 bg-white/5 text-3xl font-light active:bg-white/35">0</button>
        </div>
      </div>
      <div className="relative z-10 flex shrink-0 justify-between px-8 pb-[max(18px,env(safe-area-inset-bottom))] text-base font-light"><button onClick={onLogin}>Emergency</button><button onClick={() => setPasscode(passcode.slice(0, -1))}>{passcode ? "Delete" : "Cancel"}</button></div>
    </div>
  );
}
