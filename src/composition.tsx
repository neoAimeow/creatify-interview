import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import React, {useState} from 'react';

export const RemotionRoot: React.FC = () => {
    const [text] = useState('An unexamined life is not worth living');

    return (
        <>
            <Composition
                id='HelloWorld'
                component={HelloWorld}
                durationInFrames={150}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{text, audioBlobUrl: 'https://aimeow.oss-cn-hangzhou.aliyuncs.com/audio.mp3'}}
            />
        </>
    );
};
