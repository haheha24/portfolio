import { render, screen, cleanup } from "@testing-library/react";
import Socials from "./Socials";

afterEach(() => {
  cleanup();
});

describe("Socials Component", () => {
  it("Contains three anchors with an icon each", () => {
    render(<Socials github={true} linkedin={true} gmail={true} />);
    const gmail = screen.getByTestId("socials-gmail");
    const gmailIcon = screen.getByTestId("socials-gmail-icon");
    const linkedin = screen.getByTestId("socials-linkedin");
    const linkedinIcon = screen.getByTestId("socials-linkedin-icon");
    const github = screen.getByTestId("socials-github");
    const githubIcon = screen.getByTestId("socials-github-icon");

    expect(gmail).toBeInTheDocument();
    expect(gmail).toContainElement(gmailIcon);

    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toContainElement(linkedinIcon);

    expect(github).toBeInTheDocument();
    expect(github).toContainElement(githubIcon);
  });
  it("Accepts a css class for the container and anchor", () => {
    render(
      <Socials
        github={true}
        classIconContainer="test-class"
        classIcon="test-icon-class"
      />
    );
    const socialsContainer = screen.getByTestId("socials-container");
    const github = screen.getByTestId("socials-github");

    expect(socialsContainer).toHaveClass("test-class");
    expect(github).toHaveClass("test-icon-class");
  });
});
