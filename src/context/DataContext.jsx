import { createContext, useState, useRef, useEffect } from "react";
import initialData from "../assets/initialData";

const DataContext = createContext();

export function DataProvider({ children }) {
  const localStorageKey = "fuhuahu-contentEditable-website";

  // intro
  const introTitleRef = useRef();
  const introContentRef = useRef();
  const introButtonTextRef = useRef();

  // advantages
  const advantageTitle1Ref = useRef();
  const advantageTitle2Ref = useRef();
  const advantageTitle3Ref = useRef();
  const advantageTitle4Ref = useRef();
  const advantageContent1Ref = useRef();
  const advantageContent2Ref = useRef();
  const advantageContent3Ref = useRef();
  const advantageContent4Ref = useRef();

  // stay productive
  const stayProductiveTitleRef = useRef();
  const stayProductiveContent1Ref = useRef();
  const stayProductiveContent2Ref = useRef();
  const stayProductiveLinkTextRef = useRef();

  // testimonials
  const testimonialName1Ref = useRef();
  const testimonialName2Ref = useRef();
  const testimonialName3Ref = useRef();
  const testimonialPosition1Ref = useRef();
  const testimonialPosition2Ref = useRef();
  const testimonialPosition3Ref = useRef();
  const testimonialComment1Ref = useRef();
  const testimonialComment2Ref = useRef();
  const testimonialComment3Ref = useRef();

  // sign up form
  const signUpFormTitleRef = useRef();
  const signUpFormContentRef = useRef();
  const signUpFormConfirmButtonTextRef = useRef();

  // footer
  const footerLocationRef = useRef();
  const footerPhoneNumberRef = useRef();
  const footerEmailRef = useRef();

  const [data, setData] = useState(initialData);
  const [isContentEditable, setIsContentEditable] = useState(false);

  function saveChange() {
    const newData = {
      intro: {
        title: introTitleRef.current.textContent.trim(),
        content: introContentRef.current.textContent.trim(),
        buttonText: introButtonTextRef.current.textContent.trim(),
      },
      advantages: [
        {
          title: advantageTitle1Ref.current.textContent.trim(),
          content: advantageContent1Ref.current.textContent.trim(),
        },
        {
          title: advantageTitle2Ref.current.textContent.trim(),
          content: advantageContent2Ref.current.textContent.trim(),
        },
        {
          title: advantageTitle3Ref.current.textContent.trim(),
          content: advantageContent3Ref.current.textContent.trim(),
        },
        {
          title: advantageTitle4Ref.current.textContent.trim(),
          content: advantageContent4Ref.current.textContent.trim(),
        },
      ],
      stayProductive: {
        title: stayProductiveTitleRef.current.textContent.trim(),
        content: [
          stayProductiveContent1Ref.current.textContent.trim(),
          stayProductiveContent2Ref.current.textContent.trim(),
        ],
        linkText: stayProductiveLinkTextRef.current.textContent.trim(),
      },
      testimonials: [
        {
          name: testimonialName1Ref.current.textContent.trim(),
          position: testimonialPosition1Ref.current.textContent.trim(),
          comment: testimonialComment1Ref.current.textContent.trim(),
        },
        {
          name: testimonialName2Ref.current.textContent.trim(),
          position: testimonialPosition2Ref.current.textContent.trim(),
          comment: testimonialComment2Ref.current.textContent.trim(),
        },
        {
          name: testimonialName3Ref.current.textContent.trim(),
          position: testimonialPosition3Ref.current.textContent.trim(),
          comment: testimonialComment3Ref.current.textContent.trim(),
        },
      ],
      signUpForm: {
        title: signUpFormTitleRef.current.textContent.trim(),
        content: signUpFormContentRef.current.textContent.trim(),
        confirm_button_text:
          signUpFormConfirmButtonTextRef.current.textContent.trim(),
      },
      footer: {
        location: footerLocationRef.current.textContent.trim(),
        phone: footerPhoneNumberRef.current.textContent.trim(),
        email: footerEmailRef.current.textContent.trim(),
      },
    };

    localStorage.setItem(localStorageKey, JSON.stringify(newData));
  }

  function reset() {
    localStorage.removeItem(localStorageKey);
    setData(initialData);
  }

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem(localStorageKey));

    if (newData !== null) {
      const {
        intro,
        advantages,
        stayProductive,
        testimonials,
        signUpForm,
        footer,
      } = newData;

      setData({
        ...data,
        intro: {
          ...data.intro,
          title: intro.title,
          content: intro.content,
          buttonText: intro.buttonText,
        },
        advantages: [
          {
            ...data.advantages[0],
            title: advantages[0].title,
            content: advantages[0].content,
          },
          {
            ...data.advantages[1],
            title: advantages[1].title,
            content: advantages[1].content,
          },
          {
            ...data.advantages[2],
            title: advantages[2].title,
            content: advantages[2].content,
          },
          {
            ...data.advantages[3],
            title: advantages[3].title,
            content: advantages[3].content,
          },
        ],
        stay_productive: {
          ...data.stay_productive,
          title: stayProductive.title,
          content: stayProductive.content,
          link: {
            ...data.stay_productive.link,
            text: stayProductive.linkText,
          },
        },
        testimonials: {
          ...data.testimonials,
          callbacks: [
            {
              ...data.testimonials.callbacks[0],
              name: testimonials[0].name,
              position: testimonials[0].position,
              comment: testimonials[0].comment,
            },
            {
              ...data.testimonials.callbacks[1],
              name: testimonials[1].name,
              position: testimonials[1].position,
              comment: testimonials[1].comment,
            },
            {
              ...data.testimonials.callbacks[2],
              name: testimonials[2].name,
              position: testimonials[2].position,
              comment: testimonials[2].comment,
            },
          ],
        },
        signup_form: signUpForm,
        footer: {
          ...data.footer,
          location: {
            ...data.footer.location,
            content: footer.location,
          },
          phone: {
            ...data.footer.phone,
            content: footer.phone,
          },

          email: {
            ...data.footer.email,
            content: footer.email,
          },
        },
      });
    }
  }, []);
  return (
    <DataContext.Provider
      value={{
        // intro
        introTitleRef,
        introContentRef,
        introButtonTextRef,

        // advantages
        advantageTitle1Ref,
        advantageTitle2Ref,
        advantageTitle3Ref,
        advantageTitle4Ref,
        advantageContent1Ref,
        advantageContent2Ref,
        advantageContent3Ref,
        advantageContent4Ref,

        // stay productive
        stayProductiveTitleRef,
        stayProductiveContent1Ref,
        stayProductiveContent2Ref,
        stayProductiveLinkTextRef,

        // testimonials
        testimonialName1Ref,
        testimonialName2Ref,
        testimonialName3Ref,
        testimonialPosition1Ref,
        testimonialPosition2Ref,
        testimonialPosition3Ref,
        testimonialComment1Ref,
        testimonialComment2Ref,
        testimonialComment3Ref,

        // sign up form
        signUpFormTitleRef,
        signUpFormContentRef,
        signUpFormConfirmButtonTextRef,

        // footer
        footerLocationRef,
        footerPhoneNumberRef,
        footerEmailRef,

        data,
        reset,
        saveChange,
        isContentEditable,
        setIsContentEditable,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
