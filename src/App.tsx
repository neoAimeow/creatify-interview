import {useSelector, useDispatch} from 'react-redux';
import {Player} from '@remotion/player';
import {useRef} from 'react';
import {PlayerRef} from '@remotion/player';
import {audioBlobUrlChange, videoChangeText} from './store/video-text-slice.ts';
import {RootState} from './store/store.ts';
import {textToSpeak} from './utils/tts.ts';
import {HelloWorld} from './HelloWorld.tsx';

const App = () => {
    const player = useRef<PlayerRef>(null);
    const dispatch = useDispatch();
    const {text, audioBlobUrl, position} = useSelector<
        RootState,
        {text: string; audioBlobUrl: string; position: {offsetX: number; offsetY: number}}
    >((state) => state.videoText);

    return (
        <div className='flex flex-row w-screen h-screen bg-amber-100'>
            <div className='flex flex-col bg-blue-200'>
                <input
                    type='text'
                    className='border mt-3 ml-5 mr-5'
                    defaultValue={text}
                    onChange={(e) => {
                        dispatch(videoChangeText(e.target.value));
                    }}
                />
                <button
                    className='bg-amber-500 mt-5 ml-5 mr-5'
                    onClick={async () => {
                        try {
                            dispatch(audioBlobUrlChange(await textToSpeak(text)));
                            player && player.current && player.current.play();
                        } catch (ex) {
                            console.error(ex);
                        }
                    }}
                >
                    play
                </button>
            </div>
            <Player
                ref={player}
                component={() => <HelloWorld text={text} audioBlobUrl={audioBlobUrl} position={position} />}
                durationInFrames={150}
                compositionWidth={1920}
                compositionHeight={1080}
                fps={30}
            />
        </div>
    );
};

export default App;
