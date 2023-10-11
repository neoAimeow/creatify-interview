import {createSlice} from '@reduxjs/toolkit';

export const videoTextSlice = createSlice({
    name: 'videoText',
    initialState: {
        text: 'Init text',
        audioBlobUrl: ''
    },
    reducers: {
        videoChangeText: (state, action) => {
            state.text = action.payload;
        },
        audioBlobUrlChange: (state, action) => {
            console.error(action.payload);
            state.audioBlobUrl = action.payload;
        }
    }
});

export const {videoChangeText, audioBlobUrlChange} = videoTextSlice.actions;
export default videoTextSlice.reducer;
