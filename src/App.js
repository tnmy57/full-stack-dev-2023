import { useState } from 'react';
import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videoDB from './data/data';
import NewVideo from './components/newVideo';
function App() {

  const [videos,setVideos] = useState(videoDB);

  function addVideos(video){
    setVideos([...videos,{...video,id: videos.length+1}])
  }

  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>
        <NewVideo addVideos={addVideos}/>
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



    </div>
  );
}

export default App;
