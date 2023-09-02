import './App.css';
import videoDB from './data/data';
import { useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
function App() {
  const [videos,setVideos] = useState(videoDB)

  function addNewVideo(video){
    setVideos([...videos,{...video,id:videos.length+1}])
  }

  return (
    <div className="App" onClick={()=>console.log('App')}>
    <AddVideo addVidFun={addNewVideo}></AddVideo>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
