import { useDispatch, useSelector } from 'react-redux'
import '../Style Sheet/Youtube.css'
import { useEffect } from 'react';
import { getVideo } from '../Slice/videoSlice';
import { getCategory } from '../Slice/categorySlice';

export default function Leftcompo() {
    let dispatch = useDispatch();
    let Videodata = useSelector((store) => store.Videostore.videoList);
    let categorydata = useSelector((store) => store.Categorystore.categoryList)
    
    useEffect(() => {
        dispatch(getVideo()),
        dispatch(getCategory())
    }, [dispatch])

    return (
        <div className="Left w100 h100">
            <div className='flex category '>
                {
                    categorydata.map((data,i)=> <h5 key={i}>{data}</h5>)
                }
            </div>
            <div className='flex h100 video scroll'>
                {
                    Videodata.map((data, i) => <div className='playvi flex derection' key={i}>
                        <img className='img' src={data.img} />
                        <div className='flex icontil'>
                            <div>
                                <img className='icon cricle' src={data.Channelicon} alt="" />
                            </div>
                            <div className='title flex derection'>
                                <b>{data.title}</b> <span className='seticon'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"  ><path clipRule="evenodd" d={data.seticon} fillRule="evenodd"></path></svg></span>
                                <div className='flex icontil'>
                                    <p>{data.Channelname}</p>
                                    <p>{data.popular ? "yes" : ""}</p>
                                </div>
                                <div className='icontil flex'>
                                    <span>{data.views}</span>
                                    <span>{data.days}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}