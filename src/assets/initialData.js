import {
  BG_CURVY_DESKTOP,
  BG_CURVY_MOBILE,
  BG_QUOTES,
  ICON_ACCESS_ANYWHERE,
  ICON_ANY_FILE,
  ICON_ARROW,
  ICON_COLLABORATION,
  ICON_EMAIL,
  ICON_LOCATION,
  ICON_PHONE,
  ICON_SECURITY,
  ILLUSTRATION_INTRO,
  ILLUSTRATION_STAY_PRODUCTIVE,
  LOGO,
  PROFILE_1,
  PROFILE_2,
  PROFILE_3,
} from "../images";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const data = {
  header: {
    logo: LOGO,
    links: [
      {
        name: "Edit",
        link: "#",
      },
      {
        name: "Save",
        link: "#",
      },
      {
        name: "Reset",
        link: "#",
      },
      {
        name: "Features",
        link: "#",
      },
      {
        name: "Team",
        link: "#",
      },
      {
        name: "Sign in",
        link: "#",
      },
    ],
  },

  intro: {
    introImg: ILLUSTRATION_INTRO,
    bg_mobile: BG_CURVY_MOBILE,
    bg_desktop: BG_CURVY_DESKTOP,
    title: "All your files in one secure location, accessible anywhere.",
    content:
      "Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends family, and co-workers.",
    buttonText: "Get Started",
  },

  advantages: [
    {
      icon: ICON_ACCESS_ANYWHERE,
      title: "Access your files, anywhere",
      content:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: ICON_SECURITY,
      title: "Security you can trust",
      content:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      icon: ICON_COLLABORATION,
      title: "Real-time collaboration",
      content:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      icon: ICON_ANY_FILE,
      title: "Store any type of file",
      content:
        " Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ],

  stay_productive: {
    img: ILLUSTRATION_STAY_PRODUCTIVE,
    title: "Stay productive, wherever you are ",
    content: [
      "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    ],

    link: {
      text: "See how Fylo works",
      icon: ICON_ARROW,
    },
  },

  testimonials: {
    bg_quotes: BG_QUOTES,
    callbacks: [
      {
        id: 1,
        profile_img: PROFILE_1,
        name: "Satish Patel",
        position: "Founder & CEO, Huddle",
        comment:
          "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      },
      {
        id: 2,
        profile_img: PROFILE_2,
        name: "Bruce McKenzie",
        position: "Founder & CEO, Huddle",
        comment:
          "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      },
      {
        id: 3,
        profile_img: PROFILE_3,
        name: "Iva Boyd",
        position: "Founder & CEO, Huddle",
        comment:
          "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      },
    ],
  },

  signup_form: {
    title: "Get early access today",
    content:
      "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.",
    confirm_button_text: "Get Started For Free",
  },

  footer: {
    logo: LOGO,

    location: {
      icon: ICON_LOCATION,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    phone: {
      icon: ICON_PHONE,
      content: "+1-543-123-4567",
    },
    email: {
      icon: ICON_EMAIL,
      content: "example@fylo.com",
    },

    links1: [
      {
        title: "About Us",
        url: "#",
      },
      {
        title: "Jobs",
        url: "#",
      },
      {
        title: "Press",
        url: "#",
      },
      {
        title: "Blog",
        url: "#",
      },
    ],
    links2: [
      {
        title: "Contact Us",
        url: "#",
      },
      {
        title: "Terms",
        url: "#",
      },
      {
        title: "Privacy",
        url: "#",
      },
    ],
    social_icons: [
      {
        icon: faFacebookF,
        tag: "facebook",
      },
      {
        icon: faTwitter,
        tag: "twitter",
      },
      {
        icon: faInstagram,
        tag: "instagram",
      },
    ],
  },
};

export default data;
