import c from "./OurTeam.module.css"
import facebookIcon from "../assets/our-team/facebookIcon.svg";
import dribbleIcon from "../assets/our-team/dribbleIcon.svg";
import linkedinIcon from "../assets/our-team/linkedinIcon.svg";
import twitterIcon from "../assets/our-team/twitterIcon.svg";
import photo1 from "../assets/our-team/Photo-1.png"
import photo2 from "../assets/our-team/Photo-2.png"
import photo3 from "../assets/our-team/Photo-3.png"
import photo4 from "../assets/our-team/Photo-4.png"
import photo5 from "../assets/our-team/Photo-5.png"
import photo6 from "../assets/our-team/Photo-6.png"


const OurTeam = () => {
  return (
    <div className={c.ourTeamContainer}>
      <h2 className={c.ourTeamHeader}>OUR TEAM</h2>

      <div className={c.ourTeamProfileWrapper}>
        <div className={c.teammate}>
          <div className={c.profileWrapper}>
            <h3 className={c.profileName}>TYRA DHILLON</h3>
            <h4 className={c.profilePosition}>Creative Director</h4>
          </div>
          <img className={c.profilePhoto} src={photo1} />
          <div className={c.logosWrapper}>
            <img className={c.logo} src={twitterIcon} />
            <img className={c.logo} src={facebookIcon} />
            <img className={c.logo} src={linkedinIcon} />
            <img className={c.logo} src={dribbleIcon} />
          </div>
        </div>
        <div className={c.teammate}>
          <div className={c.profileWrapper}>
            <h3 className={c.profileName}>DARCEL BALLENTINE</h3>
            <h4 className={c.profilePosition}>Brand Designer</h4>
          </div>
          <img className={c.profilePhoto} src={photo2} />
          <div className={c.logosWrapper}>
            <img className={c.logo} src={twitterIcon} />
            <img className={c.logo} src={facebookIcon} />
            <img className={c.logo} src={linkedinIcon} />
            <img className={c.logo} src={dribbleIcon} />
          </div>
        </div>
        <div className={c.teammate}>
          <div className={c.profileWrapper}>
            <h3 className={c.profileName}>BRITTNI LANDO</h3>
            <h4 className={c.profilePosition}>Fashion Designer</h4>
          </div>
          <img className={c.profilePhoto} src={photo3} />
          <div className={c.logosWrapper}>
            <img className={c.logo} src={twitterIcon} />
            <img className={c.logo} src={facebookIcon} />
            <img className={c.logo} src={linkedinIcon} />
            <img className={c.logo} src={dribbleIcon} />
          </div>
        </div>
        <div className={c.teammate}>
          <div className={c.profileWrapper}>
            <h3 className={c.profileName}>ROSELLE EHRMAN</h3>
            <h4 className={c.profilePosition}>Graphic Designer</h4>
          </div>
          <img className={c.profilePhoto} src={photo4} />
          <div className={c.logosWrapper}>
            <img className={c.logo} src={twitterIcon} />
            <img className={c.logo} src={facebookIcon} />
            <img className={c.logo} src={linkedinIcon} />
            <img className={c.logo} src={dribbleIcon} />
          </div>
        </div>
        <div className={c.teammate}>
          <div className={c.profileWrapper}>
            <h3 className={c.profileName}>JANE COOPER</h3>
            <h4 className={c.profilePosition}>Creative Director</h4>
          </div>
          <img className={c.profilePhoto} src={photo5} />
          <div className={c.logosWrapper}>
            <img className={c.logo} src={twitterIcon} />
            <img className={c.logo} src={facebookIcon} />
            <img className={c.logo} src={linkedinIcon} />
            <img className={c.logo} src={dribbleIcon} />
          </div>
        </div>
        <div className={c.teammate}>
          <div className={c.profileWrapper}>
            <h3 className={c.profileName}>ROBERT FOX</h3>
            <h4 className={c.profilePosition}>Brand Designer</h4>
          </div>
          <img className={c.profilePhoto} src={photo6} />
          <div className={c.logosWrapper}>
            <img className={c.logo} src={twitterIcon} />
            <img className={c.logo} src={facebookIcon} />
            <img className={c.logo} src={linkedinIcon} />
            <img className={c.logo} src={dribbleIcon} />
          </div>
        </div>
      <div className={c.findJobWrapper}>
        <h3 className={c.findJobHeader}>JOIN THE TEAM</h3>
        <h4 className={c.findJobDesc}>
          DESIRE TO INFLUENCE <br></br>THE FUTURE OF BRANDING?
        </h4>
        <div className={c.findJobButtonWrapper}>
          <button className={c.findJobButton}>Find job</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default OurTeam;