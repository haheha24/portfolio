import { render, screen, cleanup } from "@testing-library/react";
import Socials from "./Socials";

afterEach(() => {
  cleanup();
});

// Props vertAlign, width, height and color are react-icon props which other than rendering the icon itself, do not need to be tested
//
describe("Socials Component", () => {
  it("Contains three anchors with an icon each", () => {
    render(<Socials github linkedin gmail />);
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
  it("Row prop class utility is conditionally correct", () => {
    const { getByTestId, rerender } = render(
      <Socials github linkedin gmail row />
    );
    expect(getByTestId("socials-container")).toHaveClass("flex flex-row gap-5");

    rerender(<Socials github linkedin gmail row={false} />);
    expect(getByTestId("socials-container")).toHaveClass("flex flex-col gap-5");
  });
});
