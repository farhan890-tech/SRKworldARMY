import React, { useState, useEffect } from "react";
import "./App.css";
import ReactPlayer from "react-player";

<ReactPlayer
  url="https://www.youtube.com/watch?v=cnTRh0cOkSE"
  playing={true}
  loop={true}
  width="0"
  height="0"
/>
function App() {
  const [fanCount, setFanCount] = useState(1000);
  const [isFan, setIsFan] = useState(false);
  const [index, setIndex] = useState(0);

  const wallpapers = [
    "https://wallpapers.com/images/featured/shah-rukh-khan-yne47u3t8q5vyosp.jpg",
    "https://c.ndtvimg.com/2022-12/lk2frl6g_pathaan_625x300_06_December_22.jpg",
    "https://c4.wallpaperflare.com/wallpaper/587/609/298/shah-rukh-khan-4k-pc-desktop-hd-wallpaper-thumb.jpg",
    "https://media.gettyimages.com/id/2213604565/photo/new-york-new-york-shah-rukh-khan-attends-the-2025-met-gala-celebrating-superfine-tailoring.jpg?s=612x612&w=gi&k=20&c=jTCQKIbRgUC4Y_ivMDF2ByCV9dJwwja8OBd28vovqSY=",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [wallpapers.length]);

  const handleFanClick = () => {
    if (!isFan) {
      setFanCount(fanCount + 1);
      setIsFan(true);
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${wallpapers[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 className="title">🌟 Global SRK Fan Counter 🌟</h1>
      <h2 className="count">
        {fanCount.toLocaleString()} <br />
        <span className="fans-text">Fans Worldwide</span>
      </h2>
      <button
        onClick={handleFanClick}
        disabled={isFan}
        className={`button ${isFan ? "disabled" : ""}`}
      >
        {isFan ? "You are already counted ✅" : "Count Me In 🚀"}
      </button>

      {/* Background YouTube Embed */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/cnTRh0cOkSE?autoplay=1&loop=1&playlist=cnTRh0cOkSE"
        title="SRK Song"
        frameBorder="0"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default App;
