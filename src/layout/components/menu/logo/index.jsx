import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Yodalogo from "../../../../assets/images/logo/logo-webp.webp";
import Yoda from "../../../../assets/images/logo/logo-dssi.svg";
import YodaDark from "../../../../assets/images/logo/logo-dark.svg";
import YodaRtl from "../../../../assets/images/logo/logo-rtl.svg";
import YodaRtlDark from "../../../../assets/images/logo/logo-rtl-dark.svg";

import themeConfig from "../../../../configs/themeConfig.jsx";

export default function MenuLogo(props) {
  const customise = useSelector((state) => state.customise);

  return (
    <Link
      to="/"
      className="hp-header-logo hp-d-flex hp-align-items-end"
      onClick={props.onClose}
    >
      <img className="hp-logo" src={Yodalogo} alt="logo" />
      {/* {
        customise.direction == "rtl" ? (
          customise.theme == "light" ? (
            <img className="hp-logo" src={YodaRtl} alt="logo" />
          ) : (
            <img className="hp-logo" src={YodaRtlDark} alt="logo" />
          )
        ) : (
          customise.theme == "light" ? (
            <img className="hp-logo" src={Yoda} alt="logo" />
          ) : (
            <img className="hp-logo" src={YodaDark} alt="logo" />
          )
        )
      } */}
      &emsp;
      <span className="h3 d-font-weight-800 hp-mb-6">DSSI</span>
      {/* <span
        className="hp-p1-body hp-font-weight-500 hp-text-color-black-40 hp-mb-16 hp-ml-4"
        style={{
          letterSpacing: -1.5
        }}
      >
        v.{themeConfig.version}
      </span> */}
    </Link>
  );
}
