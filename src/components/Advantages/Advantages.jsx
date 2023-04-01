import "./Advantages.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const Advantage = ({ advantage: { icon, title, content }, index }) => {
  const {
    advantageTitle1Ref,
    advantageTitle2Ref,
    advantageTitle3Ref,
    advantageTitle4Ref,
    advantageContent1Ref,
    advantageContent2Ref,
    advantageContent3Ref,
    advantageContent4Ref,

    isContentEditable,
  } = useContext(DataContext);

  return (
    <div className="advantage">
      <img src={icon} alt="advantage-icon" />
      <h2
        contentEditable={isContentEditable}
        ref={
          index === 0
            ? advantageTitle1Ref
            : index === 1
            ? advantageTitle2Ref
            : index === 2
            ? advantageTitle3Ref
            : advantageTitle4Ref
        }
      >
        {title}
      </h2>
      <p
        contentEditable={isContentEditable}
        ref={
          index === 0
            ? advantageContent1Ref
            : index === 1
            ? advantageContent2Ref
            : index === 2
            ? advantageContent3Ref
            : advantageContent4Ref
        }
      >
        {content}
      </p>
    </div>
  );
};

const Advantages = () => {
  const {
    data: { advantages },
  } = useContext(DataContext);

  return (
    <section className="advantages">
      {advantages.map((advantage, i) => (
        <Advantage advantage={advantage} key={i} index={i} />
      ))}
    </section>
  );
};

export default Advantages;
