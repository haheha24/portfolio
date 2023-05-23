import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      font14: string;
      font16: string;
      font18: string;
      font20: string;
      font24: string;
      font28: string;
      font30: string;
      font32: string;
      font36: string;
      font40: string;
      font48: string;
      font96: string;
    };
    fontColor: string;
    fontLinkColor: string;
    fontLinkColorActive: string;
    body: string;
    header: {
      nav: {
        navLink: {
          active: string;
          notActive: string;
        };
        navUl: {
          backgroundColor: string;
        };
      };
    };
    button: {
      color: string;
      backgroundColor: string;
      backgroundColorHover: string;
      border: string;
    };
    anchor: {
      color: string;
      backgroundColor: string;
      backgroundColorHover: string;
      border: string;
    };
    socials: {
      anchor: {
        color: string;
        backgroundColor: string;
      };
    };
    section: {
      title: {
        fontColor: string;
        backgroundColor: string;
        boxShadow: string;
      };
    };
    about: {
      skills: {
        skillsContainer: {
          boxShadow: string;
          backgroundColor: string;
        };
        skillsBtn: {
          backgroundColor: string;
          backgroundColorHover: string;
          backgroundColorActive: string;
          border: string;
        };
      };
    };
    projects: {
      projectCard: {
        backgroundColor: string;
        projectCardCaption: {
          backgroundColor: string;
        };
        projectCardLink: {
          border: string;
        };
      };
    };
    contact: {
      label: {
        color: string;
      };
      input: {
        error: {
          borderColor: string;
        };
      };
      button: {
        backgroundColor: string;
        backgroundColorHover: string;
        border: string;
      };
      handleContact: {
        thankyou: {
          container: {
            backgroundColor: string;
            boxShadow: string;
          };
        };
        closeModal: {
          backgroundColor: string;
          fill: string;
        };
      };
    };
    color: {
      white: string;
      lightGrey: string;
      black: string;
      blackMain: string;
      blackSecondary: string;
      blackFaded: string;
      blackFaded2: string;
      red: string;
      purpleMain: string;
      purpleSecondary: string;
      purpleHyperLink: string;
      lightTransparency: string;
    };
  }
}
