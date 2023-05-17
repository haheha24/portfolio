"use client";

import { FooterLink } from "./styles";
import Section from "../(components)/Section";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Section id="footer">
        <Link href="/privacypolicy" passHref legacyBehavior>
          <FooterLink>Privacy Policy</FooterLink>
        </Link>
      </Section>
    </footer>
  );
};

export default Footer;
