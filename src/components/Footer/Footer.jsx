import "./Footer.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const {
    footerLocationRef,
    footerPhoneNumberRef,
    footerEmailRef,

    data: {
      footer: { logo, location, phone, email, links1, links2, social_icons },
    },
    isContentEditable,
  } = useContext(DataContext);

  return (
    <footer>
      <img src={logo} alt="logo" />

      <div className="flex">
        <div className="contact-info">
          <img src={location.icon} alt="location" />
          <p contentEditable={isContentEditable} ref={footerLocationRef}>
            {location.content}
          </p>
        </div>

        <div>
          <div className="contact-info">
            <img src={phone.icon} alt="phone" />
            <p contentEditable={isContentEditable} ref={footerPhoneNumberRef}>
              {phone.content}
            </p>
          </div>
          <div className="contact-info">
            <img src={email.icon} alt="email" />
            <p contentEditable={isContentEditable} ref={footerEmailRef}>
              {email.content}
            </p>
          </div>
        </div>

        <div className="links1">
          {links1.map((link, i) => (
            <a contentEditable={isContentEditable} href="#" key={i}>
              {link.title}
            </a>
          ))}
        </div>

        <div className="links2">
          {links2.map((link, i) => (
            <a contentEditable={isContentEditable} href="#" key={i}>
              {link.title}
            </a>
          ))}
        </div>
        <div className="social-icons">
          {social_icons.map((social_icon, i) => (
            <FontAwesomeIcon icon={social_icon.icon} key={i} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
