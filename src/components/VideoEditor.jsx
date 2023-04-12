import { Button, Input, Slider } from "antd";
import React, { useEffect, useRef, useState } from "react";

// should use useReducer here to improve state management

const VideoEditor = (props) => {
  const { src } = props;
  const videoRef = useRef(null);
  const [range, setRange] = useState([20, 50]);
  const [totalRange, setTotalRange] = useState(0);
  const [trimVideo, setTrimVideo] = useState(null);
  const [textTimeline, setTextTimeline] = useState("")

  const onRangeChange = (e) => {
    setRange(e);
  };

  const onTextTimeline = (e) => {
    setTextTimeline(e.target.value)
    console.log("textTimeline", textTimeline);
  }

  const handleTrim = () => {
    // Get start and end times from user input
    const startTime = parseFloat(range[0]);
    const endTime = parseFloat(range[1]);

    videoRef.current.currentTime = startTime;

    // send API request to download a trimmed video
  };

  useEffect(() => {
    if (videoRef.current && !totalRange) {
      setTotalRange(videoRef.current.duration);
    }
  }, [videoRef]);

  return (
    <div>
      <video ref={videoRef} width="400" controls>
        <source src={src} type="video/mp4"></source>
        <source src={src} type="video/ogg"></source> Your browser does not
        support HTML video.
      </video>
      <Slider
        range
        defaultValue={range}
        onChange={onRangeChange}
        max={totalRange}
      />
      <Input onInput={onTextTimeline}/>
      <Button onClick={handleTrim}>Trim</Button>
    </div>
  );
};

export default VideoEditor;
