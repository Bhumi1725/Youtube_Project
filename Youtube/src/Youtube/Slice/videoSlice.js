import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const initialState ={
    videoList:[],
    error:"",
    isLoading:false
};

 const Url = "http://localhost:3000/videos";

 export const getVideo = createAsyncThunk("video/getVideo", async (data, { rejectWithValue }) => {
     const response = await fetch(Url);
 
     if (response.ok) {
         let jsonResponse = response.json();
         return jsonResponse;
     }
     else {
         return rejectWithValue({ error: 'Video data not found' })
     }
 });

export const videoSlice = createSlice({
    name:'Video info',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getVideo.pending, (state, action) => {
                    state.isLoading = true;
                })
                    .addCase(getVideo.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.error = '';
                        state.videoList = action.payload;
                    }).addCase(getVideo.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload.error;
                        state.videoList = [];
                    })
    }
});

export default videoSlice.reducer



// url = http://localhost:3000/category