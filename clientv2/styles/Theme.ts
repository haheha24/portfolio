export interface TypeTheme {
  [key: string]: {
    font: {
      font16: string;
      font18: string;
      font24: string;
      font32: string;
    };
    fontColor: string;
    body: string;
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
    color: {
      white: string;
      black: string;
      blackMain: string;
      blackSecondary: string;
      blackFaded: string;
      blackFaded2: string;
      purpleMain: string;
      purpleSecondary: string;
    };
  };
}

const color = {
  white: "#fff",
  black: "#000",
  blackMain: "hsl(216, 7%, 14%)",
  blackSecondary: "hsl(216, 7%, 25%)",
  blackFaded: "hsla(216, 7%, 14%, 0.5)",
  blackFaded2: "hsla(219, 8%, 33%, 0.5)",
  purpleMain: "hsl(260, 100%, 60%)",
  purpleSecondary: "hsl(260, 100%, 33%)",
};

export const theme: TypeTheme = {
  darkTheme: {
    font: {
      font16: "1em",
      font18: "1.125em",
      font24: "1.5em",
      font32: "2em",
    },
    fontColor: color.white,
    body: color.blackSecondary,
    section: {
      title: {
        fontColor: color.blackMain,
        backgroundColor: color.purpleMain,
        boxShadow: color.blackMain,
      },
    },
    about: {
      skills: {
        skillsContainer: {
          boxShadow: color.blackFaded,
          backgroundColor: color.purpleMain,
        },
        skillsBtn: {
          backgroundColor: color.purpleSecondary,
          backgroundColorHover: color.purpleMain,
          backgroundColorActive: color.purpleMain,
          border: color.purpleMain,
        },
      },
    },
    button: {
      color: color.white,
      backgroundColor: color.purpleSecondary,
      backgroundColorHover: color.purpleMain,
      border: `${color.purpleMain}`,
    },
    anchor: {
      color: color.white,
      backgroundColor: color.purpleSecondary,
      backgroundColorHover: color.purpleMain,
      border: `${color.purpleMain}`,
    },
    color: {
      white: "#fff",
      black: "#000",
      blackMain: "hsl(216, 7%, 14%)",
      blackSecondary: "hsl(216, 7%, 25%)",
      blackFaded: "hsla(216, 7%, 14%, 0.5)",
      blackFaded2: "hsla(219, 8%, 33%, 0.5)",
      purpleMain: "hsl(260, 100%, 60%)",
      purpleSecondary: "hsl(260, 100%, 33%)",
    },
  },
};
