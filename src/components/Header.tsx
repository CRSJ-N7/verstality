import c from "./Header.module.css";
import logo from "../assets/top/logo.svg";
import scrollDown from "../assets/top/scrollDown.png"
import mainPhoto from "../assets/top/mainPhoto.png"
function Header() {
  return (
    <>
      <div className={c.header}>
        <div className={c.menu}>
          <img className={c.logo} src={logo} />
          <h2 className={c.menuText}>MENU</h2>
        </div>
        <div className={c.titleWrapper}>
          <h1 className={c.title}>DIANNE RUSSEL</h1>
          <h2 className={c.subtitle}>Digital Design</h2>
          <div className={c.scrollDown}>
            <img src={scrollDown} />
          </div>
        </div>
        <img className={c.mainPhoto} src={mainPhoto} />
        <div className={c.photoWrapper}></div>
      <div className={c.aboutMe}>
        <h2 className={c.aboutMeText}>From art to technology, we transform visions into extraordinary <b className={c.boldText}>digital experiences</b> - your design, our passion, an exceptional future</h2>
      </div>
      </div>
    </>
  );
}

export default Header;
