import About from "./About";
import { cleanup, render, fireEvent } from "test-utils";

afterEach(() => {
  cleanup();
});

describe("Tests the About component", () => {
  it("renders the section component", () => {
    const { container } = render(<About />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("Contains the introduction", () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId("introduction")).toHaveTextContent("Adrian Cristallo");
  });
  it("Contains 4 buttons that can be clicked, and changes to the corresponding text content each click", () => {
    const { getByTestId } = render(<About />);
    const front = getByTestId("front");
    const back = getByTestId("back");
    const general = getByTestId("general");
    const inter = getByTestId("inter");
    const SkillsComponent = getByTestId("Skills");

    expect(getByTestId("skills-btn-container")).toContainElement(back);
    fireEvent.click(back);
    expect(SkillsComponent).toHaveTextContent(
      "Back-end technologies I have used in projects:"
    );

    expect(getByTestId("skills-btn-container")).toContainElement(general);
    fireEvent.click(general);
    expect(SkillsComponent).toHaveTextContent(
      "Other technologies I have experience in using are:"
    );

    expect(getByTestId("skills-btn-container")).toContainElement(inter);
    fireEvent.click(inter);
    expect(SkillsComponent).toHaveTextContent(
      "Interpersonal Skills and Values"
    );

    expect(getByTestId("skills-btn-container")).toContainElement(front);
    fireEvent.click(front);
    expect(SkillsComponent).toHaveTextContent(
      "My technical skills I use for web development are:"
    );
  });
});
