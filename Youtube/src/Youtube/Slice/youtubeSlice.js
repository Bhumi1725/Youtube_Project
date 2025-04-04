import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const initialState ={
    youtubeList:[],
    error:"",
    isLoading:false
};

 const Url = "http://localhost:3000/menu";

 export const getYoutube = createAsyncThunk("youtube/getYoutube", async (data, { rejectWithValue }) => {
     const response = await fetch(Url);
 
     if (response.ok) {
         let jsonResponse = response.json();
         return jsonResponse;
     }
     else {
         return rejectWithValue({ error: 'Youtube data not found' })
     }
 });

export const youtubeSlice = createSlice({
    name:'Youtube info',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getYoutube.pending, (state, action) => {
                    state.isLoading = true;
                })
                    .addCase(getYoutube.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.error = '';
                        state.youtubeList = action.payload;
                    }).addCase(getYoutube.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload.error;
                        state.youtubeList = [];
                    })
    }
});

export default youtubeSlice.reducer
