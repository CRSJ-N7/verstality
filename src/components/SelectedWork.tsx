import c from "./SelectedWork.module.css";
import flower from "../assets/selected-work/flower-picture.png";
import girl from "../assets/selected-work/girl-picture.png";
import hand from "../assets/selected-work/hand-picture.png";
import leafs from "../assets/selected-work/leafs-picture.png";
const SelectedWork = () => {
  return (
    <div className={c.selectedWorkContainer}>
      <div className={c.selectedWorkWrapper}>
        <h2 className={c.selectedWorkText}>SELECTED WORK</h2>
      </div>

      <div className={c.profileImagesWrapper}>
        <img className={c.profileImage} src={hand}></img>
        <img className={c.profileImage} src={leafs}></img>
      </div>
      <div className={c.profileWorksWrapper}>
        <div className={c.profileWorks}>
          <h2 className={c.profileName}>TRINITY</h2>
          <div className={c.profileTags}>
            <button className={c.profileButtons}>Digital Design</button>
            <button className={c.profileButtons}>2022</button>
          </div>
          <img className={c.profileDiscover} alt="NavigationIcons"></img>
        </div>
      </div>

      <div className={c.profileImagesWrapper}>
        <img className={c.profileImage} src={flower}></img>
        <img className={c.profileImage} src={girl}></img>
      </div>
      <div className={c.profileWorksWrapper}>
        <div className={c.profileWorks}>
          <h2 className={c.profileName}>MORPHEUS</h2>
          <div className={c.profileTags}>
          <button className={c.profileButtons}>Digital Design</button>
          <button className={c.profileButtons}>2023</button>
          </div>
          <img className={c.profileDiscover} alt="NavigationIcons"></img>
        </div>
      </div>
    </div>
  );
}

export default SelectedWork;