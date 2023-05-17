"use client";

import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { StyledLi, device } from "../(styles)/globalStyledComponents";
import imgFeature from "../../public/images/transluscent_waves.jpg";

//Nav
type StyledNavProps = {
  $fixedOnly: boolean;
};
const StyledNav = styled.nav<StyledNavProps>`
  height: 100vh;
  background-size: 100% 100%;
  overflow: hidden;
  background-image: url(${imgFeature.src});
  z-index: 100;

  ${({ $fixedOnly }) =>
    $fixedOnly &&
    css`
      /* height: 0; */
    `}

  @media only screen and (${device.md}) {
    height: auto;
    width: 100%;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

//Nav Unordered List
type StyledNavUlProps = {
  $fixed?: boolean;
  $hidden?: boolean;
};
const StyledNavUl = motion(styled.ul<StyledNavUlProps>`
  display: grid;
  grid-template-rows: repeat(3, 25vh);
  grid-template-columns: repeat(6, 15%);
  gap: 10px 20px;
  align-content: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: transparent;

  ${({ $fixed }) =>
    $fixed &&
    css`
      display: flex;
      align-content: normal;
      position: fixed;
      top: 0;
      left: 0;
      transform: none;
      background-color: ${({ theme }) =>
        theme.header.nav.navUl.backgroundColor};
      z-index: 100;
      box-shadow: 10px 0 10px black;
    `}

  @media only screen and (${device.md}) {
    display: ${({ $hidden }) => ($hidden ? "none" : "block")};
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
`);

//Nav List
const StyledNavLi = styled(StyledLi).attrs(
  ({ $fixed }: { $fixed: boolean }) => ({
    $fixed: $fixed,
  })
)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 10%, 0.85);
  border-radius: 10px;
  text-align: center;
  font-size: ${({ theme }) =>
    `clamp(${theme.font.font16}, 2vw, ${theme.font.font96})`};
  z-index: 100;

  ${({ $fixed }) =>
    $fixed &&
    css`
      background-color: transparent;
      border-radius: 0;
      font-size: ${({ theme }) =>
        `clamp(${theme.font.font18}, 1vw, ${theme.font.font96})`};
    `}

  @media only screen and (${device.md}) {
    display: block;
    border-radius: 0;
    width: 100%;
    padding: 10px 0;
    font-size: ${({ theme }) =>
      `clamp(${theme.font.font24}, 2.5vw, ${theme.font.font96})`};
  }
`;

const StyledItemOne = motion(styled(StyledNavLi)`
  grid-column: 1/7;
  grid-row: 1/2;
  font-size: ${({ theme }) =>
    `clamp(${theme.font.font24}, 4vw, ${theme.font.font96})`};

  ${({ $fixed }) =>
    $fixed &&
    css`
      background-color: transparent;
      border-radius: 0;
      font-size: ${({ theme }) =>
        `clamp(${theme.font.font18}, 1vw, ${theme.font.font96})`};
    `}
  @media only screen and (${device.md}) {
    font-size: ${({ theme }) =>
      `clamp(${theme.font.font24}, 2.5vw, ${theme.font.font96})`};
  }
`);
const StyledItemTwo = motion(styled(StyledNavLi)`
  grid-column: 1/3;
  grid-row: 2/3;
`);
const StyledItemThree = motion(styled(StyledNavLi)`
  grid-column: 3/5;
  grid-row: 2/3;
`);
const StyledItemFour = motion(styled(StyledNavLi)`
  grid-column: 5/7;
  grid-row: 2/3;
`);
const StyledItemFive = motion(styled(StyledNavLi)`
  grid-column: 3/5;
  grid-row: 3/4;

  ${({ $fixed }) =>
    $fixed &&
    css`
      position: relative;
    `}
  @media only screen and (${device.md}) {
    position: static;
    right: 0;
  }
`);

//Nav Link
export type StyledNavLinkProps = {
  $activemenu: boolean;
};
const StyledNavLink = motion(styled.a<StyledNavLinkProps>`
  padding: 28px 25px; //thickness of fixed navlink
  font-weight: 500;
  color: ${({ theme }) => theme.header.nav.navLink.notActive};

  ${({ $activemenu }) =>
    $activemenu &&
    css`
      color: ${({ theme }) => theme.header.nav.navLink.active};
    `}
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (${device.md}) {
    display: block;
    width: 100%;
    border-radius: 0;
    &:hover {
      border-radius: 0;
    }
  }
`);

//Burger Button
const StyledNavBurger = styled.button`
  display: none;
  @media only screen and (${device.md}) {
    display: block;
    margin: 0 auto;
    width: 100%;
    cursor: pointer;
  }
`;

export {
  StyledNav,
  StyledNavUl,
  StyledNavLi,
  StyledItemOne,
  StyledItemTwo,
  StyledItemThree,
  StyledItemFour,
  StyledItemFive,
  StyledNavLink,
  StyledNavBurger,
};
