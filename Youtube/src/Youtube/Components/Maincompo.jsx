import Leftcompo from "./Leftcompo";
import Rightcompo from "./Rightcompo";
import Topcompo from "./Topcompo";
import  '../Style Sheet/Youtube.css'

export default function Maincompo(){
    return(
        <div>
            <div><Topcompo/></div>
            <div className="flex"><Rightcompo/> <Leftcompo/></div>
        </div>
    )
}