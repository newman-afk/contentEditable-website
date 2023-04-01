import LOGO from "../../images/logo.svg";
import "./Header.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const Header = () => {
  const {
    data: {
      header: { logo, links },
    },
    reset,
    saveChange,
    isContentEditable,
    setIsContentEditable,
  } = useContext(DataContext);

  async function handleEdit(name) {
    if (name === "Edit") {
      setIsContentEditable(isContentEditable ? false : true);

      // bc setState is async and I haven't figure out how to alert current message, so it's working fine but in wrong way.
      alert(
        isContentEditable
          ? "Edit Mode Off"
          : `
          Edit Mode On
          
          change some text and save、refresh the page to see what will happen, and reset button is working.
          
          PS: Edit and Save just save your changes to local storage named fuhuahu-contentEditable-website, feel free to delete it if you want to.
          Have a good day!`
      );
    } else if (name === "Save") {
      saveChange();
    } else if (name === "Reset") {
      reset();
    }
  }
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />

      <div className="header-links">
        {links.map((link, index) => {
          return (
            <a
              onClick={() => handleEdit(link.name)}
              href={link.link}
              key={index}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
