import BurgerMenu from "./BurgerMenu";
import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";

jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

test("render burgerMenu", () => {
  it("check if svg is loaded", () => {
    const mRef = {current: {}}
  });
});
