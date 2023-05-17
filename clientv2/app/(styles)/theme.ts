import { DefaultTheme } from "styled-components";

//Provides access to colors in this file.
const color = {
  darkTheme: {
    white: "#fff",
    lightGrey: "#ffffff9c",
    black: "#000",
    blackMain: "hsl(216, 7%, 14%)",
    blackSecondary: "hsl(216, 7%, 25%)",
    blackFaded: "hsla(216, 7%, 14%, 0.5)",
    blackFaded2: "hsla(219, 8%, 33%, 0.5)",
    red: "hsl(0, 100%, 65%)",
    purpleMain: "hsl(260, 100%, 60%)",
    purpleSecondary: "hsl(260, 100%, 33%)",
    purpleHyperLink: "hsl(260, 100%, 75%)",
    lightTransparency: "hsla(0, 0%, 10%, 0.85)",
  },
};

const DarkTheme: DefaultTheme = {
  font: {
    font14: "0.875em",
    font16: "1em",
    font18: "1.125em",
    font20: "1.25em",
    font24: "1.5em",
    font28: "1.75em",
    font30: "1.875em",
    font32: "2em",
    font36: "2.25em",
    font40: "2.5em",
    font48: "3em",
    font96: "6em",
  },
  fontColor: color.darkTheme.white,
  fontLinkColor: color.darkTheme.purpleHyperLink,
  fontLinkColorActive: color.darkTheme.purpleMain,
  body: color.darkTheme.blackSecondary,
  header: {
    nav: {
      navLink: {
        active: color.darkTheme.purpleMain,
        notActive: color.darkTheme.white,
      },
      navUl: {
        backgroundColor: color.darkTheme.blackMain,
      },
    },
  },
  button: {
    color: color.darkTheme.white,
    backgroundColor: color.darkTheme.purpleSecondary,
    backgroundColorHover: color.darkTheme.purpleMain,
    border: `${color.darkTheme.purpleMain}`,
  },
  anchor: {
    color: color.darkTheme.white,
    backgroundColor: color.darkTheme.purpleSecondary,
    backgroundColorHover: color.darkTheme.purpleMain,
    border: `${color.darkTheme.purpleMain}`,
  },
  section: {
    title: {
      fontColor: color.darkTheme.white,
      backgroundColor: color.darkTheme.purpleMain,
      boxShadow: color.darkTheme.blackMain,
    },
  },
  socials: {
    anchor: {
      color: color.darkTheme.white,
      backgroundColor: color.darkTheme.purpleSecondary,
    },
  },
  about: {
    skills: {
      skillsContainer: {
        boxShadow: color.darkTheme.blackFaded,
        backgroundColor: color.darkTheme.purpleMain,
      },
      skillsBtn: {
        backgroundColor: color.darkTheme.purpleSecondary,
        backgroundColorHover: color.darkTheme.purpleMain,
        backgroundColorActive: color.darkTheme.purpleMain,
        border: color.darkTheme.purpleMain,
      },
    },
  },
  projects: {
    projectCard: {
      backgroundColor: color.darkTheme.blackMain,
      projectCardCaption: {
        backgroundColor: color.darkTheme.purpleSecondary,
      },
      projectCardLink: {
        border: color.darkTheme.purpleMain,
      },
    },
  },
  contact: {
    label: {
      color: color.darkTheme.white,
    },
    input: {
      error: {
        borderColor: color.darkTheme.red,
      },
    },
    button: {
      backgroundColor: color.darkTheme.purpleSecondary,
      backgroundColorHover: color.darkTheme.purpleMain,
      border: color.darkTheme.purpleMain,
    },
    handleContact: {
      thankyou: {
        container: {
          backgroundColor: color.darkTheme.purpleMain,
          boxShadow: color.darkTheme.blackFaded,
        },
      },
      closeModal: {
        backgroundColor: color.darkTheme.white,
        fill: color.darkTheme.blackSecondary,
      },
    },
  },
  //provides access to the colors outside of the file
  color: {
    white: color.darkTheme.white,
    lightGrey: color.darkTheme.lightGrey,
    black: color.darkTheme.black,
    blackMain: color.darkTheme.blackMain,
    blackSecondary: color.darkTheme.blackSecondary,
    blackFaded: color.darkTheme.blackFaded,
    blackFaded2: color.darkTheme.blackFaded2,
    red: color.darkTheme.red,
    purpleMain: color.darkTheme.purpleMain,
    purpleSecondary: color.darkTheme.purpleSecondary,
    purpleHyperLink: color.darkTheme.purpleHyperLink,
    lightTransparency: color.darkTheme.lightTransparency,
  },
};

export const theme = {
  DarkTheme,
};
