"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
}
:root {
  /* background colours */
  --black-main: hsl(216, 7%, 14%);
  --black-secondary: hsl(216, 7%, 25%);
  --black-faded: hsla(216, 7%, 14%, 0.5);
  --black-faded2: hsla(219, 8%, 33%, 0.5);
  /* colors */
  --white: #fff;
  --black: #000;
  --grey: hsl(0, 0%, 50%);
  --red: hsl(0, 100%, 50%);
  --purple-main: hsl(260, 100%, 60%);
  --purple-secondary: hsl(260, 100%, 33%);
  /* Sections */
  --section-bg-alt: hsl(216, 7%, 50%);
  --section-bg-alt2: var(--purple-main);
  /* font-size */
  --font16: 1em;
  --font18: 1.125em;
  --font24: 1.5em;
  --font32: 2em;
}

/* Semantic Elements and Tags */
html {
  scroll-margin-top: 75px!important;
  scroll-behavior: smooth!important; /* !important property crucial to override Next/Link take over of Scroll function */
}
body {
  background-color: var(--black-secondary);
  color: var(--white);
  font-size: var(--font16);
}
a {
  cursor: pointer;
  text-decoration: none;
}

`;
