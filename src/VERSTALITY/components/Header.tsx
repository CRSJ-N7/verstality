import c from "./Header.module.css";
import logo from "../../assets/icons/HeaderLogo.svg";
import scrollDown from "../../assets/header/scrollDown.png";
import mainPhoto from "../../assets/header/mainPhoto.png";
import dianneStudio from "../../assets/header/dianneStudio.svg"

function Header() {
  return (
      <div className={c.header}>
        <div className={c.menu}>
          <img className={c.logo} src={logo} />
          <img className={c.dianneStudio} src={dianneStudio}/>
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
      </div>
  );
}

export default Header;
