import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import React from 'react';

export const RemotionRoot: React.FC = () => {
    // const dispatch = useDispatch();
    // const {text, audioBlobUrl, position} = useSelector<
    //     RootState,
    //     {text: string; audioBlobUrl: string; position: {offsetX: number; offsetY: number}}
    // >((state) => state.videoText);
    //
    // const [isReady, setReady] = useState<boolean>(false);
    // useEffect(() => {
    //     const tts = async () => {
    //         dispatch(audioBlobUrlChange(await textToSpeak(text)));
    //     };
    //     tts().then(() => {
    //         setReady(true);
    //     });
    // }, []);

    return (
        <>
            <Composition
                id='HelloWorld'
                component={() => (
                    <HelloWorld text='An unexamined life is not worth living' position={{offsetX: 0, offsetY: 600}} />
                )}
                durationInFrames={150}
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
