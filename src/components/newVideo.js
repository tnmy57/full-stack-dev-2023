import React, { useState } from "react";
import "./newVideo.css";

function NewVideo({ addVideos }) {
  const [video, setVideo] = useState({
    title: "",
    views: "",
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo({
      title: "",
      views: "",
      time: "1 month ago",
      channel: "Coder Dost",
      verified: true,
    });
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Enter title"
          value={video.title}
        ></input>
        <input
          name="views"
          onChange={handleChange}
          placeholder="Enter views"
          value={video.views}
        ></input>
        <button
          onClick={handleSubmit}

          //   onClick={() => {
          //     setVideos([
          //       ...videos,
          //       {

          //       },
          //     ]);
          //   }}
        >
          Add Video
        </button>
      </form>
    </div>
  );
}

export default NewVideo;
