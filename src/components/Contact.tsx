import c from './Contact.module.css'
import facebookIcon from "../assets/our-team/facebookIcon.svg";
import dribbleIcon from "../assets/our-team/dribbleIcon.svg";
import linkedinIcon from "../assets/our-team/linkedinIcon.svg";
import twitterIcon from "../assets/our-team/twitterIcon.svg";
const Contact = () => {
  return (
    <div className={c.contactContainer}>
      <div className={c.contactWrapper}>
      <h2 className={c.contactHeader}>CONTACT</h2>
      <div className={c.contactDescWrapper}>
        <h3 className={c.contactTitle}>
          LET'S START BUILDING YOUR BRAND'S UNIQUE STORY TOGETHER
        </h3>
        <h4 className={c.contactSubtitle}>
          Want to see what a difference a strong brand can make? Request a
          consultation today.
        </h4>
        <div className={c.getInTouchWrapper}>
          <button className={c.getInTouchButton}>Get In Touch</button>
        </div>
      </div>
      </div>

      <div className={c.footer}>
        <p className={c.footerText}>
          © Made by <span className={c.boldText}>Kunturi Design</span>. All rights reserved.
        </p>
        <div className={c.logosWrapper}>
          <img className={c.logo} src={twitterIcon} />
          <img className={c.logo} src={facebookIcon} />
          <img className={c.logo} src={linkedinIcon} />
          <img className={c.logo} src={dribbleIcon} />
        </div>
      </div>
    </div>
  );
}

export default Contact;