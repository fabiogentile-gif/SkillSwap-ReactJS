import { createPlayer } from '@videojs/react';
import { VideoSkin, Video, videoFeatures } from '@videojs/react/video';
import '@videojs/react/video/skin.css';

const Player = createPlayer({ features: videoFeatures });

export default function VideoPlayer() {
    return (
        <Player.Provider>
            <VideoSkin poster="https://image.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/thumbnail.webp">
                <Video src="/src/assets/video/videoplayback.mp4" playsInline />
            </VideoSkin>
        </Player.Provider>
    );
}