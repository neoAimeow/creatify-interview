import {createSlice} from '@reduxjs/toolkit';

export const videoTextSlice = createSlice({
    name: 'videoText',
    initialState: {
        // 输入的文字
        text: 'An unexamined life is not worth living',
        // 输入文字后调用tts获取的Blob url
        audioBlobUrl: ''
    },
    reducers: {
        videoChangeText: (state, action) => {
            state.text = action.payload;
        },
        audioBlobUrlChange: (state, action) => {
            state.audioBlobUrl = action.payload;
        }
    }
});

export const {videoChangeText, audioBlobUrlChange} = videoTextSlice.actions;
export default videoTextSlice.reducer;
