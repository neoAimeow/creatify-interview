import {Audio, spring} from 'remotion';
import {AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {useRef} from 'react';
import Draggable from 'react-draggable';
import {setTitlePosition} from './store/video-text-slice.ts';

type HelloWorldProps = {
    text: string;
    audioBlobUrl?: string;
    position: {offsetX: number; offsetY: number};
};

export const HelloWorld = (props: HelloWorldProps) => {
    const frame = useCurrentFrame();
    const {durationInFrames, fps} = useVideoConfig();
    const {text, audioBlobUrl, position} = props || {};
    const nodeRef = useRef(null);

    // Animate from 0 to 1 after 25 frames
    const logoTranslationProgress = spring({
        frame: frame - 25,
        fps,
        config: {
            damping: 100
        }
    });

    // Move the logo up by 150 pixels once the transition starts
    const logoTranslation = interpolate(logoTranslationProgress, [0, 1], [0, -150]);

    // Fade out the animation at the end
    const opacity = interpolate(frame, [durationInFrames - 25, durationInFrames - 15], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    return (
        <AbsoluteFill style={{backgroundColor: 'white'}}>
            <AbsoluteFill style={{opacity}}>
                <AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
                    <Logo logoColor1={'#91EAE4'} logoColor2={'#86A8E7'} />
                </AbsoluteFill>
                {/* Sequences can shift the time for its children! */}
                <Draggable
                    nodeRef={nodeRef}
                    onDrag={(e) => {
                        const {offsetX, offsetY} = e as MouseEvent;
                        setTitlePosition({offsetX, offsetY});
                    }}
                >
                    <AbsoluteFill ref={nodeRef} style={{top: position?.offsetY, left: position?.offsetX}}>
                        <Sequence from={35}>
                            <Title titleText={text} titleColor={'#000000'} />
                        </Sequence>
                    </AbsoluteFill>
                </Draggable>
                {/* The subtitle will only enter on the 75th frame. */}
                <Sequence from={75}>
                    <Subtitle />
                </Sequence>
            </AbsoluteFill>
            {audioBlobUrl && <Audio src={audioBlobUrl} />}
        </AbsoluteFill>
    );
};
