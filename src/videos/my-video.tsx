import { useCurrentFrame } from "remotion";
import { useVideoConfig } from "remotion";
import Draggable from 'react-draggable'; // The default

export const MyVideo = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();

    return (
        <Draggable>
            <div className="text-black">
                The current frame is {frame}.
                This video is {durationInFrames / fps} seconds long.
            </div>
        </Draggable>

    );
};