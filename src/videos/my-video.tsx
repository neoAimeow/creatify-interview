import {spring, useCurrentFrame, useVideoConfig, Audio} from 'remotion';
import Draggable from 'react-draggable';
import {useRef} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store.ts';

export const MyVideo = () => {
    const frame = useCurrentFrame();
    const {fps, durationInFrames} = useVideoConfig();
    const scale = spring({
        fps,
        frame
    });
    const nodeRef = useRef(null);
    const {text, audioBlobUrl} = useSelector<RootState, {text: string; audioBlobUrl: string}>(
        (state) => state.videoText
    );

    return (
        <div className='text-black flex flex-col w-full h-full'>
            <div>
                The current frames is {frame}. This video is {durationInFrames / fps} seconds long.
            </div>
            <Draggable nodeRef={nodeRef}>
                <div className='w-full h-full flex items-center justify-center' ref={nodeRef}>
                    <div className='text-7xl' style={{transform: `scale(${scale})`}}>
                        {text}
                    </div>
                </div>
            </Draggable>
            {audioBlobUrl && <Audio src={audioBlobUrl} />}
        </div>
    );
};
