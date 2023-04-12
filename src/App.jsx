import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoEditor from "./components/VideoEditor";
import sampleVideo from "./assets/sampleVideo.mp4"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <VideoEditor src={sampleVideo} />
    </div>
  );
}

export default App;
