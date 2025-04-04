import { useDispatch, useSelector } from 'react-redux'
import '../Style Sheet/Youtube.css'
import { useEffect } from 'react';
import { getYoutube } from '../Slice/youtubeSlice';

export default function Rightcompo() {

    let dispatch = useDispatch();
    let Youtubedata = useSelector((store) => store.Youstore.youtubeList)
    console.log(Youtubedata);

    useEffect(() => {
        dispatch(getYoutube())
    }, [dispatch])
    return (
        <div className="Right h100 scroll flex derection">
                {
                    Youtubedata.map((data, i) => <p key={i}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"  ><path clipRule="evenodd" d={data.icon} fillRule="evenodd"></path></svg>{data.title}</p>)
                }
        </div>
    )
}