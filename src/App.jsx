import React, { useState, useEffect } from "react";
import "./App.css";
import myPhoto from "./assets/PHOTO.JPG";

function App() {
  const [fanCount, setFanCount] = useState(1000);
  const [isFan, setIsFan] = useState(false);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Desktop wallpapers
  const desktopWallpapers = [
    "https://wallpapers.com/images/featured/shah-rukh-khan-yne47u3t8q5vyosp.jpg",
    "https://c.ndtvimg.com/2022-12/lk2frl6g_pathaan_625x300_06_December_22.jpg",
    "https://w0.peakpx.com/wallpaper/282/232/HD-wallpaper-ra-one-one-man-woman-ra.jpg",
    "https://static01.nyt.com/images/2025/05/05/multimedia/05ST-METGALA-SRK-pcwf/05ST-METGALA-SRK-pcwf-googleFourByThree-v3.jpg",
    "https://www.yashrajfilms.com/images/default-source/Movies/Dilwale-Dulhania-Le-Jayenge/Dilwale-Dulhania-Le-Jayenge-Gallery/shahrukh-khan-and-kajol-in-dilwale-dulhania-le-jayengeb1f19da026f56f7f9f64ff0000090313.jpg?sfvrsn=6804f2cc_2",
    "https://i2.wp.com/godofindia.com/wp-content/uploads/2017/05/shahrukh-khan-3.jpg",
    "https://c4.wallpaperflare.com/wallpaper/587/609/298/shah-rukh-khan-4k-pc-desktop-hd-wallpaper-thumb.jpg",
    "https://media.gettyimages.com/id/2213604565/photo/new-york-new-york-shah-rukh-khan-attends-the-2025-met-gala-celebrating-superfine-tailoring.jpg?s=612x612&w=gi&k=20&c=jTCQKIbRgUC4Y_ivMDF2ByCV9dJwwja8OBd28vovqSY=",
  ];

  // Mobile wallpapers
  const mobileWallpapers = [
    myPhoto,
    "https://wallpapercave.com/wp/wp4081673.jpg",
    "https://i.pinimg.com/736x/1d/a5/8d/1da58d4987cec0a05609e3a363963d8b.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7fa1cd4-94d3-4bab-b781-960e6047b9ff/dhjxsxs-81ae9c51-85a3-4bb4-9e7c-7d70d9f2bcec.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGCwL8TDJ5XmO24e9UtJOwkhj9J287oJnRSCiy02LAPn1kBuZVUcIbsc7HH4Oew9OtI4&usqp=CAU",
    "https://w0.peakpx.com/wallpaper/67/297/HD-wallpaper-shah-rukh-khan-tie-srk-thumbnail.jpg",
  ];

  const wallpapers = isMobile ? mobileWallpapers : desktopWallpapers;

  // Wallpaper slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [wallpapers.length]);

  // Handle resize for mobile/desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fan button
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
        padding: "20px",
        position: "relative",
        overflow: "hidden",
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

      {/* Background YouTube Embed (hidden) */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/cnTRh0cOkSE?autoplay=1&loop=1&playlist=cnTRh0cOkSE"
        title="SRK Song"
        frameBorder="0"
        allow="autoplay"
      ></iframe>

      {/* Floating Hearts */}
      <div className="hearts">
        <span>❤️</span>
        <span>💖</span>
        <span>💜</span>
        <span>❤️</span>
        <span>💖</span>
      </div>
    </div>
  );
}

export default App;
