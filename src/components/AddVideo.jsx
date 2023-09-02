import React, { useState } from "react";

const initialVideoState = {
  title: "",
  views: "",
  time: "1 year ago",
  channel: "Coder Dost",
  verified: false,
};

const AddVideo = ({addVidFun}) => {
  const [video, setVideo] = useState(initialVideoState);

  function handleChange(e) {
    setVideo({...video,[e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    addVidFun(video)
    setVideo(initialVideoState);
  }
  return (
    <div>
      <form>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          placeholder="Enter the title"
          value={video.title}
        />
        <input
          name="views"
          type="text"
          onChange={handleChange}
          placeholder="Enter the Views"
          value={video.views}
        />
        <button
          onClick={handleSubmit}
          //   onClick={() => {
          //     handleClick()
          // setVideos([
          //   ...videos,
          //   {
          //     id: videos.length + 1,
          //     title: "Demo JS tutorial",
          //     views: "100K",
          //     time: "1 year ago",
          //     channel: "Coder Dost",
          //     verified: false,
          //   },
          // ]);
          //   }}
        >
          Add Video
        </button>
      </form>
    </div>
  );
};

export default AddVideo;
