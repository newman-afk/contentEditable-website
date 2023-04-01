import "./StayProductive.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const StayProductive = () => {
  const {
    stayProductiveTitleRef,
    stayProductiveContent1Ref,
    stayProductiveContent2Ref,
    stayProductiveLinkTextRef,

    data: {
      stay_productive: {
        img,
        title,
        content,
        link: { text, icon },
      },
    },
    isContentEditable,
  } = useContext(DataContext);

  return (
    <section className="stay-productive">
      <img src={img} alt="stay-productive-img" />
      <div className="right">
        <h2 contentEditable={isContentEditable} ref={stayProductiveTitleRef}>
          {title}
        </h2>
        {content.map((para, i) => (
          <p
            contentEditable={isContentEditable}
            key={i}
            ref={
              i === 0 ? stayProductiveContent1Ref : stayProductiveContent2Ref
            }
          >
            {para}
          </p>
        ))}
        <a
          contentEditable={isContentEditable}
          href="#"
          ref={stayProductiveLinkTextRef}
        >
          {text} <img src={icon} alt="icon-arrow" />
        </a>
      </div>
    </section>
  );
};

export default StayProductive;
