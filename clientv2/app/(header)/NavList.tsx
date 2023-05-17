"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  StyledItemOne as Home,
  StyledItemTwo as About,
  StyledItemThree as Projects,
  StyledItemFour as Contact,
  StyledItemFive as SocialContainer,
  StyledNavLink,
} from "./styles";
import Socials from "../(components)/Socials";
import { IActiveMenu } from "./Header";
import imgSiteLogo from "../../public/images/site_logo_512x512.png";
import { useRouter } from "next/navigation";

interface INavLink {
  isFixed: boolean;
  trackActive: {
    activeMenu: IActiveMenu;
    setActiveMenu: Dispatch<SetStateAction<IActiveMenu>>;
  };
}

const NavList = ({ isFixed = false, trackActive }: INavLink) => {
  const { activeMenu, setActiveMenu } = trackActive;
  const router = useRouter();
  return (
    <>
      <Home
        $fixed={isFixed}
        /* initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.25 }} */
      >
        <Link href="/" passHref legacyBehavior scroll={false}>
          <StyledNavLink
            key={"home"}
            id="home"
            /* href="/" */
            whileTap={{ scale: 0.9 }}
            $activemenu={activeMenu.home}
            onClick={() => {
              setActiveMenu({
                home: true,
                about: false,
                projects: false,
                contact: false,
              });
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth", inline: "start" });
            }}
          >
            <Image
              src={imgSiteLogo}
              alt="The Creative Age Logo"
              style={{
                verticalAlign: "text-bottom",
                width: "1em",
                height: "1em",
              }}
            />
            The Creative Age
          </StyledNavLink>
        </Link>
      </Home>
      <About
        $fixed={isFixed}
        /* initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }} */
      >
        <Link href={`/#about`} passHref legacyBehavior>
          <StyledNavLink
            key={"about"}
            whileTap={{ scale: 0.9 }}
            $activemenu={activeMenu.about}
            onClick={() => {
              setActiveMenu({
                home: false,
                about: true,
                projects: false,
                contact: false,
              });
            }}
          >
            About
          </StyledNavLink>
        </Link>
      </About>
      <Projects
        $fixed={isFixed}
        /* initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }} */
      >
        <Link href="/#projects" passHref legacyBehavior>
          <StyledNavLink
            key={"projects"}
            whileTap={{ scale: 0.9 }}
            $activemenu={activeMenu.projects}
            onClick={() => {
              setActiveMenu({
                home: false,
                about: false,
                projects: true,
                contact: false,
              });
            }}
          >
            Projects
          </StyledNavLink>
        </Link>
      </Projects>
      <Contact
        $fixed={isFixed}
        /* initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} */
      >
        <Link href="/#contact" passHref legacyBehavior>
          <StyledNavLink
            key={"contact"}
            whileTap={{ scale: 0.9 }}
            $activemenu={activeMenu.contact}
            onClick={() => {
              setActiveMenu({
                home: false,
                about: false,
                projects: false,
                contact: true,
              });
            }}
          >
            Contact
          </StyledNavLink>
        </Link>
      </Contact>
      <SocialContainer
        $fixed={isFixed}
        /* initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.25 }} */
      >
        <Socials
          key={"socials"}
          github
          linkedin
          gmail
          direction="row"
          containerFixed={isFixed}
        />
      </SocialContainer>
    </>
  );
};

export default NavList;
