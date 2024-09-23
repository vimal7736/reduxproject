import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (searchTerm) => {
        const movieText = 'harry';
        const response = await MovieApi
            .get(`?apiKey=${APIKey}&s=${searchTerm}&type=movie`)
        return response.data
    })


export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows',
    async (searchTerm) => {
        const seriesText = 'Friends';
        const response = await MovieApi
            .get(`?apiKey=${APIKey}&s=${searchTerm}&type=series`)
        return response.data;
    }
)
export const fetchAsyncEpisode = createAsyncThunk('episode/fetchAsyncShows',
    async () => {
        const episodeText = 'show';
        const response = await MovieApi
            .get(`?apiKey=${APIKey}&s=${episodeText}&type=episode`)
        console.log(response, "qwermmk");
        return response.data;

    }
)

export const fetchAsyncMoviesorShowDetail = createAsyncThunk(
    "movies/fetchAsyncMoviesorShowDetails",
    async (id) => {
        const response = await MovieApi
            .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        return response.data
    }
)

const initialState = {
    movies: {},
    shows: {},
    episode: {},
    selectedMovieorShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },

    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchAsyncMovies.pending, (state) => {
                console.log('pending');
                state.status = 'loading'

            })
            .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
                console.log("Fetched Successfully");
                state.movies = payload;
                state.status = 'succeeded';

            })
            .addCase(fetchAsyncMovies.rejected, (state) => {
                console.log('Rejected');
                state.status = 'failed'

            })
            .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
                console.log("Fetched Successfully");
                state.shows = payload;
                state.status = 'succeeded';

            })
            .addCase(fetchAsyncEpisode.fulfilled, (state, { payload }) => {
                console.log("Fetched Successfully");
                state.episode = payload;
                state.status = 'succeeded';

            })
            .addCase(fetchAsyncMoviesorShowDetail.fulfilled,(state, {payload})=>{
                console.log("Fetched Succesfully");
                state.selectedMovieorShow = payload;
                state.status = 'succeeded';
            })

    },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllEpisode = (state) => state.movies.episode;
export const getSelectedMovieorShow = (state) => state.movies.selectedMovieorShow;
export default movieSlice.reducer;



