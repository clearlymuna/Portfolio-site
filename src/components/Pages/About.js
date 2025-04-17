import "./About.css";
import profileImage from "../../assets/IMG_0317.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left: Text Section */}
        <div className="about-text" data-aos="fade-up">
          <h2 className="about-title">About me</h2>
          <p className="about-description">
            Hi, I'm Muna — a creative problem-solver with a background in
            illustration and a growing skill set in software development. I’m
            currently an international student in Canada, studying Software
            Engineering Technology, and I’m passionate about combining design
            thinking with technical precision to build things that are both
            functional and beautiful.
            <br />
            <br />
            Outside of class, I take on freelance gigs ranging from event setup
            to digital art commissions. I believe in learning by doing, asking
            better questions, and finding the calm in chaos. Whether it’s moving
            heavy wedding structures or debugging Java code, I bring a hands-on,
            can-do mindset to the table.
            <br />
            <br />
            Currently exploring opportunities that let me grow as both a
            designer and a developer — and hopefully leave things better than I
            found them.
          </p>
        </div>

        {/* Right: Image and Resume Section */}
        <div className="about-image-container" data-aos="fade-up">
          <div className="profile-pic-wrapper">
            <img src={profileImage} alt="Muna" className="profile-pic" />
          </div>
          <h3 className="about-name">Munachimso Eriobuna</h3>
          <a
            href="/MUNACHIMSO ERIOBUNA CO-OP RESUME.pdf"
            target="_blank"
            className="resume-button"
          >
            <span className="button-bg"></span>
            <span className="button-text">Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
