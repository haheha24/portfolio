import { render, screen, cleanup } from "test-utils";
import Socials from "./Socials";

afterEach(() => {
  cleanup();
});

describe("Socials Component", () => {
  it("renders the section component", () => {
    const { container } = render(<Socials />);
    expect(container.firstChild).toMatchSnapshot();
  });
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
});
