import c from '../components/MyClients.module.css'
import logo1 from "../../assets/my-clients/Logo-1.svg";
import logo2 from "../../assets/my-clients/Logo-2.svg";
import logo3 from "../../assets/my-clients/Logo-3.svg";
import logo4 from "../../assets/my-clients/Logo-4.svg";
import logo5 from "../../assets/my-clients/Logo-5.svg";
import logo6 from "../../assets/my-clients/Logo-6.svg";
import photo1 from "../../assets/my-clients/Photo-1.png";
import photo2 from "../../assets/my-clients/Photo-2.png"
import photo3 from "../../assets/my-clients/Photo-3.png"
import photo4 from "../../assets/my-clients/Photo-4.png"
import photo5 from "../../assets/my-clients/Photo-5.png"
import photo6 from "../../assets/my-clients/Photo-6.png"

const MyClients = () => {
  return (
    <div className={c.myClientsContainer}>
      <h2 className={c.myClientsHeader}>MY CLIENTS</h2>

      <div className={c.myClientsWrapper}>
        
        <div className={c.myClient}>
          <div className={c.logoWrapper}>
            <img className={c.logo1} src={logo1} />
          </div>
          <h2 className={c.clientHeader}>
            Exceptional Web and Digital Design That Exceeded Expectations
          </h2>
          <p className={c.clientDesc}>
            Our website redesign and digital transformation went above and
            beyond our wildest dreams. Dianne's attention to detail, creativity,
            and unmatched design skills resulted in a visually stunning and
            user-friendly online presence that left us in awe.
          </p>
          <div className={c.clientProfile}>
            <img className={c.clientPhoto} src={photo1}></img>
            <div className={c.clientInfo}>
              <h2 className={c.clientName}>Annete Black</h2>
              <p className={c.clientPosition}>Marketing coordinator</p>
            </div>
          </div>
        </div>

        <div className={c.myClient}>
          <div className={c.logoWrapper}>
            <img className={c.logo1} src={logo2} />
          </div>
          <h2 className={c.clientHeader}>
            Art Direction that Perfectly Captured Our Essence{" "}
          </h2>
          <p className={c.clientDesc}>
            Collaborating with Dianne on our art direction was an absolute
            delight. He not only listened to our ideas but also infused his own
            creativity into the mix, resulting in a visual brand identity that
            flawlessly encapsulated our essence.
          </p>
          <div className={c.clientProfile}>
            <img className={c.clientPhoto} src={photo2}></img>
            <div className={c.clientInfo}>
              <h2 className={c.clientName}>Ralph Edwards</h2>
              <p className={c.clientPosition}>Software Development Manager</p>
            </div>
          </div>
        </div>

        <div className={c.myClient}>
          <div className={c.logoWrapper}>
            <img className={c.logo1} src={logo3} />
          </div>
          <h2 className={c.clientHeader}>
            Interaction Design Expertise that Delivered Beyond Measure{" "}
          </h2>
          <p className={c.clientDesc}>
            Dianne's expertise in interaction design elevated our app to new
            heights of user-friendliness and intuitiveness. His meticulous
            approach and imaginative thinking led to a product that far exceeded
            our expectations.
          </p>
          <div className={c.clientProfile}>
            <img className={c.clientPhoto} src={photo3}></img>
            <div className={c.clientInfo}>
              <h2 className={c.clientName}>Jacob Jones</h2>
              <p className={c.clientPosition}>Srum Master</p>
            </div>
          </div>
        </div>

        <div className={c.myClient}>
            <div className={c.logoWrapper}>
              <img className={c.logo1} src={logo4} />
            </div>
            <h2 className={c.clientHeader}>
              Captivating Motion Design that Breathed Life into Our Brand{" "}
            </h2>
          <p className={c.clientDesc}>
            Dianne's mastery of motion design is nothing short of extraordinary.
            With his stunning animations, he breathed life into our brand,
            leaving our audience thoroughly captivated.
          </p>
          <div className={c.clientProfile}>
            <img className={c.clientPhoto} src={photo4}></img>
            <div className={c.clientInfo}>
              <h2 className={c.clientName}>Cameron Williamson</h2>
              <p className={c.clientPosition}>Software Tester</p>
            </div>
          </div>
        </div>

        <div className={c.myClient}>
            <div className={c.logoWrapper}>
              <img className={c.logo1} src={logo5} />
            </div>
            <h2 className={c.clientHeader}>
              Dianne Delivered a Website that Truly Showcases Our Business{" "}
            </h2>
          <p className={c.clientDesc}>
            Dianne's web design prowess has given us a website that not only
            showcases our business but does so in a highly professional and
            user-friendly manner. We couldn't be more thrilled with the final
            result.
          </p>
          <div className={c.clientProfile}>
            <img className={c.clientPhoto} src={photo5}></img>
            <div className={c.clientInfo}>
              <h2 className={c.clientName}>Eleanor Pena</h2>
              <p className={c.clientPosition}>Software Developer</p>
            </div>
          </div>
        </div>

        <div className={`${c.myClient} ${c.lastClient}`}>
            <div className={c.logoWrapper}>
              <img className={c.logo1} src={logo6} />
            </div>
            <h2 className={c.clientHeader}>
              Dianne Delivers a Business-Showcasing Website{" "}
            </h2>
          <p className={c.clientDesc}>
            Dianne's mastery of web design has given our brand a vibrant new
            lease on life. With precision and creativity, she transformed our
            vision into a website that truly sets us apart from the competition.
          </p>
          <div className={c.clientProfile}>
            <img className={c.clientPhoto} src={photo6}></img>
            <div className={c.clientInfo}>
              <h2 className={c.clientName}>Courtney Henry</h2>
              <p className={c.clientPosition}>Software Developer Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyClients;