import "./Home.css";
import cartoonImg from "../../assets/Untitled_Artwork 1.png";
import flipLogo from "../../assets/FLIP&FLOSS-LOGO-COMPLETE 1.png";
import ulessonLogo from "../../assets/ulesson 1.png";
import mivaLogo from "../../assets/Miva-mobile-logo-dark-4x-1 1.png";

export default function Home() {
  return (
    <section className="home">
      <div className="text-section">
        <h1>Designer</h1>
        <p>
          Hi, I'm Muna, a Visual Designer making experiences that connect and
          delight.
        </p>
      </div>
      <img src={cartoonImg} alt="Cartoon of Muna" className="hero-image" />
      <div className="logo-strip">
        <img src={flipLogo} alt="Flip & Floss" />
        <img src={ulessonLogo} alt="uLesson" />
        <img src={mivaLogo} alt="MIVA Open University" />
      </div>
    </section>
  );
}
