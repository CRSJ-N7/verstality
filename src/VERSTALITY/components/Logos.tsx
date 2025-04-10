import logo1 from "../../assets/logos/Logo-1.svg";
import logo2 from "../../assets/logos/Logo-2.svg";
import logo3 from "../../assets/logos/Logo-3.svg";
import logo4 from "../../assets/logos/Logo-4.svg";
import logo5 from "../../assets/logos/Logo-5.svg";
import logo6 from "../../assets/logos/Logo-6.svg";
import logo7 from "../../assets/logos/Logo-7.svg";

import c from "./Logos.module.css";

function Logos() {
  return (
    <div className={c.logosContainer}>
      <div className={c.logosWrapper}>
        <img className={c.logo1} src={logo1} />
        <img className={c.logo2} src={logo2} />
        <img className={c.logo3} src={logo3} />
        <img className={c.logo4} src={logo4} />
        <img className={c.logo5} src={logo5} />
        <img className={c.logo6} src={logo6} />
        <img className={c.logo7} src={logo7} />
      </div>
    </div>
  );
}

export default Logos;
