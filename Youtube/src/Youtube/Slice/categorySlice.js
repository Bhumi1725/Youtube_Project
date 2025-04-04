import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const initialState ={
    categoryList:[],
    error:"",
    isLoading:false
};

 const Url = "http://localhost:3000/category";

 export const getCategory = createAsyncThunk("category/getCategory", async (data, { rejectWithValue }) => {
     const response = await fetch(Url);
 
     if (response.ok) {
         let jsonResponse = response.json();
         return jsonResponse;
     }
     else {
         return rejectWithValue({ error: 'data not found' })
     }
 });

export const categorySlice = createSlice({
    name:'category info',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getCategory.pending, (state, action) => {
                    state.isLoading = true;
                })
                    .addCase(getCategory.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.error = '';
                        state.categoryList = action.payload;
                    }).addCase(getCategory.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload.error;
                        state.categoryList = [];
                    })
    }
});

export default categorySlice.reducer
