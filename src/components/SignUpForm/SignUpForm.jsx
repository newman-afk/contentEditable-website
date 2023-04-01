import "./SignUpForm.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const SignUpForm = () => {
  const {
    signUpFormTitleRef,
    signUpFormContentRef,
    signUpFormConfirmButtonTextRef,

    data: {
      signup_form: { title, content, confirm_button_text },
    },
    isContentEditable,
  } = useContext(DataContext);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 contentEditable={isContentEditable} ref={signUpFormTitleRef}>
          {title}
        </h1>
        <p contentEditable={isContentEditable} ref={signUpFormContentRef}>
          {content}
        </p>
        <div className="flex">
          <input type="email" required placeholder="email@example.com" />
          <button
            contentEditable={isContentEditable}
            ref={signUpFormConfirmButtonTextRef}
          >
            {confirm_button_text}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
