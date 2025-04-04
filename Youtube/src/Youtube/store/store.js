import {configureStore} from '@reduxjs/toolkit';
import youtubeSlice from '../Slice/youtubeSlice';
import videoSlice from '../Slice/videoSlice';
import categorySlice  from '../Slice/categorySlice';

const store = configureStore({
    reducer:{
        Youstore : youtubeSlice,
        Videostore : videoSlice,
        Categorystore : categorySlice
    }
});

export default store;