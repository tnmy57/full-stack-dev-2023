import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videoDB from './data/data';
import Counter from "./components/counter.js"
import { useState } from 'react';
function App() {
  const [videos,setVideos] = useState(videoDB)
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>
        <button onClick={()=>{
          setVideos([
            ...videos,
            {
              id: videos.length + 1,
              title: "Demo JS tutorial",
              views: "100K",
              time: "1 year ago",
              channel: "Coder Dost",
              verified: false,
            },
          ]);
        }}>Add Video</button>
      </div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      </div>
      
      <Counter/>

    </div>
  );
}

export default App;
