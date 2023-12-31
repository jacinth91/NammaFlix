import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingVideos:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addNowPlayingVideos:(state,action)=>{
            state.nowPlayingVideos = action.payload

        }
    }
})
export const {addNowPlayingMovies,addNowPlayingVideos} = movieSlice.actions;

export default movieSlice.reducer;