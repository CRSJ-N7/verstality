import c from "./SelectedWork.module.css";
import flower from "../assets/selected-work/flower-picture.png";
import girl from "../assets/selected-work/girl-picture.png";
import hand from "../assets/selected-work/hand-picture.png";
import leafs from "../assets/selected-work/leafs-picture.png";
const SelectedWork = () => {
  return (
    <div className={c.selectedWorkContainer}>
      <h2 className={c.selectedWorkText}>SELECTED WORK</h2>
      <div className={c.profileImagesWrapper}>
        <img className={c.profileImage} src={hand}></img>
        <img className={c.profileImage} src={leafs}></img>
      </div>
      <div className={c.profileWorksWrapper}>
        <div className={c.profileWorks}>
          <h2 className={c.profileName}>
            <b>TRINITY</b>
          </h2>
          <div className={c.profileTags}>
            <button className={c.profileButtons}>Digital Design</button>
            <button className={c.profileButtons}>2022</button>
          </div>
          <div className={c.profileDiscover}>
            <button className={`${c.profileButtons} ${c.discoverButton}`}>
              Discover
            </button>
          </div>
        </div>
      </div>

      <div className={c.profileImagesWrapper}>
        <img className={c.profileImage} src={flower}></img>
        <img className={c.profileImage} src={girl}></img>
      </div>
      <div className={c.profileWorksWrapper}>
        <div className={c.profileWorks}>
          <h2 className={c.profileName}>
            <b>MORPHEUS</b>
          </h2>
          <div className={c.profileTags}>
            <button className={c.profileButtons}>Digital Design</button>
            <button className={c.profileButtons}>2023</button>
          </div>
          <div className={c.profileDiscover}>
            <button className={`${c.profileButtons} ${c.discoverButton}`}>
              Discover
            </button>
          </div>
        </div>
      </div>
      <div className={c.profileFooter}>
        <button className={`${c.profileButtons} ${c.allWorkButton}`}>
          All work
        </button>
      </div>
    </div>
  );
}

export default SelectedWork;