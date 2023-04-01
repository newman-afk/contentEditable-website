import "./Intro.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const Intro = () => {
  const {
    introTitleRef,
    introContentRef,
    introButtonTextRef,
    data: {
      intro: { introImg, bg_mobile, bg_desktop, title, content, buttonText },
    },
    isContentEditable,
  } = useContext(DataContext);

  return (
    <section className="intro">
      <img className="intro-img" src={introImg} alt="illustration-intro" />

      <div className="bg">
        <img className="bg-mobile" src={bg_mobile} alt="background-img" />
        <img className="bg-desktop" src={bg_desktop} alt="background-img" />
      </div>

      <div className="content">
        <h1 contentEditable={isContentEditable} ref={introTitleRef}>
          {title}
        </h1>
        <p contentEditable={isContentEditable} ref={introContentRef}>
          {content}
        </p>
        <button contentEditable={isContentEditable} ref={introButtonTextRef}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Intro;
