import { Player } from "@remotion/player";
import {MyVideo} from "@/videos/my-video.tsx";

const App = () => {
    return <div className=''>
        <Player
            style={{backgroundColor:'gray'}}
            component={MyVideo}
            durationInFrames={120}
            compositionWidth={1920}
            compositionHeight={1080}
            fps={30}
            autoPlay
        />
    </div>;
};

export default App;
