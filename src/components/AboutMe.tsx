import c from "./AboutMe.module.css";
import facebookIcon from "../assets/icons/facebookIcon.svg";
import dribbleIcon from "../assets/icons/dribbleIcon.svg";
import linkedinIcon from "../assets/icons/linkedinIcon.svg";
import twitterIcon from "../assets/icons/twitterIcon.svg";

const AboutMe = () => {
  return (
<>
    <div className={c.aboutMeSection}>
      <div className={c.description}>
        <h2 className={c.descriptionText}>
          From art to technology, we transform visions into extraordinary{" "}
          <b className={c.boldText}>digital experiences</b> - your design, our
          passion, an exceptional future
        </h2>
      </div>
    </div>
        <div className={c.aboutMeWrapper}>
          <h3 className={c.aboutMeText}>ABOUT ME</h3>
          <div className={c.mediaLogos}>
            <img className={c.facebookIcon} src={facebookIcon} />
            <img className={c.dribbleIcon} src={dribbleIcon} />
            <img className={c.linkedinIcon} src={linkedinIcon} />
            <img className={c.twitterIcon} src={twitterIcon} />
          </div>
        </div>
        </>
  );
}

export default AboutMe;
