import "./Testimonials.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const TestimonialCard = ({
  testimonial: { profile_img, name, position, comment },
  id,
}) => {
  const {
    testimonialName1Ref,
    testimonialName2Ref,
    testimonialName3Ref,
    testimonialPosition1Ref,
    testimonialPosition2Ref,
    testimonialPosition3Ref,
    testimonialComment1Ref,
    testimonialComment2Ref,
    testimonialComment3Ref,

    isContentEditable,
  } = useContext(DataContext);
  return (
    <div className="testimonial-card">
      <p
        contentEditable={isContentEditable}
        ref={
          id === 1
            ? testimonialComment1Ref
            : id === 2
            ? testimonialComment2Ref
            : testimonialComment3Ref
        }
      >
        {comment}
      </p>

      <div className="person-info">
        <img src={profile_img} alt={name} />

        <div className="right">
          <h2
            contentEditable={isContentEditable}
            ref={
              id === 1
                ? testimonialName1Ref
                : id === 2
                ? testimonialName2Ref
                : testimonialName3Ref
            }
          >
            {name}
          </h2>
          <small
            contentEditable={isContentEditable}
            ref={
              id === 1
                ? testimonialPosition1Ref
                : id === 2
                ? testimonialPosition2Ref
                : testimonialPosition3Ref
            }
          >
            {position}
          </small>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const {
    data: {
      testimonials: { bg_quotes, callbacks },
    },
  } = useContext(DataContext);

  return (
    <section className="testimonials">
      <img src={bg_quotes} alt="bg-quotes" />
      {callbacks.map((testimonial) => (
        <TestimonialCard
          testimonial={testimonial}
          key={testimonial.id}
          id={testimonial.id}
        />
      ))}
    </section>
  );
};

export default Testimonials;
