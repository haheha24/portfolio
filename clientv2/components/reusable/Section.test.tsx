import { render, cleanup } from "test-utils";
import Section from "./Section";

afterEach(() => {
  cleanup();
});

describe("Tests for the Section component", () => {
  it("renders the section component", () => {
    const { container } = render(<Section />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("Section element styles", () => {
    const { getByTestId } = render(<Section />);
    expect(getByTestId("section-container")).toHaveStyle({
      opacity: 0,
      transform: "translateY(250px) translateZ(0)",
    });
  });
  it("Contains a section and h2 element", () => {
    const { getByTestId } = render(<Section />);
    const sectionContainer = getByTestId("section-container");
    const h2Container = getByTestId("section-h2");
    expect(sectionContainer).toBeInTheDocument();
    expect(h2Container).toBeInTheDocument();
  });

  it("renders a p tag with text", () => {
    const { container, getByTestId } = render(
      <Section>{<p data-testid="section-p">rendered a paragraph</p>}</Section>
    );
    expect(container).toContainElement(getByTestId("section-p"));
    expect(container).toHaveTextContent("rendered a paragraph");
    expect(container).not.toHaveTextContent("");
  });

  it("Accepts the id and title props", () => {
    const { container, getByTestId } = render(
      <Section title="Testing Title" id="test" />
    );
    expect(getByTestId("section-container")).toHaveAttribute("id", "test");

    expect(container).toHaveTextContent("Testing Title");
  });
});
