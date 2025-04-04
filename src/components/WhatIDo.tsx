import c from "./WhatIDo.module.css";
import iDoPhoto from "../assets/what-i-do/iDoPhoto.png";
const WhatIDo = () => {
  return (
    <div className={c.iDoContainer}>
      <div className={c.iDoWrapper}>
        <img className={c.iDoPhoto} src={iDoPhoto} alt="iDoPhoto" />
        <div className={c.iDoSkillsContainer}>
          <h2 className={c.iDoSkillsMainHeader}>WHAT I DO</h2>
          <div className={c.iDoSkillsWrapper}>
            <div className={c.iDoSkills}>
              <p className={c.iDoSkillsHeader}>
                <b className={c.lightText}>01</b> DIGITAL DESIGN
              </p>
              <p className={c.iDoSkillsDesc}>
                I craft captivating digital designs that captivate and motivate
                your audience. Allow me to breathe life into your brand with my
                expertise.
              </p>
            </div>
            <div className={c.iDoSkills}>
              <p className={c.iDoSkillsHeader}>
                <b className={c.lightText}>02</b> ART DIRECTION
              </p>
              <p className={c.iDoSkillsDesc}>
                My proficiency in art direction guarantees that your project
                aligns with your brand, conveys your message effectively, and is
                visually striking. Let's collaborate to narrate your story.
              </p>
            </div>
            <div className={c.iDoSkills}>
              <p className={c.iDoSkillsHeader}>
                <b className={c.lightText}>03</b> INTERACTION DESIGN
              </p>
              <p className={c.iDoSkillsDesc}>
                I have a specialization in creating user experiences that are
                not only functional but also aesthetically pleasing and
                user-friendly.
              </p>
            </div>
            <div className={c.iDoSkills}>
              <p className={c.iDoSkillsHeader}>
                <b className={c.lightText}>04</b> MOTION DESIGN
              </p>
              <p className={c.iDoSkillsDesc}>
                From dynamic logos to informative explainer videos, I infuse
                life into your message through visually mesmerizing motion
                design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;