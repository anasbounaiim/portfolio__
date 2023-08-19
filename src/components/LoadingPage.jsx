import loading from "../assets/loading-buu.gif"
import 'animate.css';

const LoadingPage = () => {
    return ( 
     
            <div className={`w-screen h-screen bg-[#0D0D0D] flex items-center justify-center `}>
                <img className="object-cover h-[90vh] w-[90vw]" src={loading} alt="" />
                
            </div>
            

     );
}
 

export default LoadingPage;