import 'animate.css';

import icon_home from "../assets/home-icon.png"
import icon_about from "../assets/about-icon.png"
import icon_portfolio from "../assets/portfolio-icon.png"
import icon_contact from "../assets/contact-icon.png"
import icon_bin from "../assets/bin.png";

const Icon = ({ bgColor, text ,handleClick  }) => {
    return ( 
        <>
        
        <div className={`z-[-10] m-6 flex flex-col items-center justify-center w-[100px] ${text==="Recycle bin" ?'absolute -right-3 w-20 bottom-8 ' : null  } animate__animated animate__fadeIn animate__faster cursor-pointer px-4 py-1 hover:animate__fadeInUp  hover:bg-zinc-900/60  hover:rounded-md hover:opacity-60`} onClick={handleClick} >
        
            <div className={`w-[55px] h-[55px] ${bgColor} text-white text-2xl  rounded-md `}> 
            
                  {/* Home content */}
          {text === "Home" ? <img src={icon_home} className="w-18 h-18" alt="" /> : null}
          {/* about content */}
          {text === "About" ? <img src={icon_about} className="w-18 h-18" alt="" /> : null}
          {/* portfolio content */}
          {text === "Portfolio" ? <img src={icon_portfolio} className="w-18 h-18" alt="" /> : null}
          {/* conatct content */}
          {text === "Say hi !" ? <img src={icon_contact} className="w-18 h-18" alt="" /> : null}

          {text === "Recycle bin" ? <img src={icon_bin} className="w-18 h-18" alt="" /> : null}
            
             </div>
            <span className={`${text==="Recycle bin" ?'text-xs text-center' : "text-xl"  }text-center text-white font-medium `}> {text} </span>

        </div>
       
        </>
     );
}
 
export default Icon;