import {configureStore} from '@reduxjs/toolkit';
import videoTextSlice from '@/store/video-text-slice.ts';

const store = configureStore({
    reducer: {
        videoText: videoTextSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
