import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1>Happy birthday </h1>
      <p>Mr Godwin Innocent</p>
      <p>Wishing u d best of the best</p>
    </div>
  );
}

export default HeroSection;
