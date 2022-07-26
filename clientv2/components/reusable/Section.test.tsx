import { render, cleanup } from "@testing-library/react";
import Section from "./Section";

afterEach(() => {
  cleanup();
});

describe("Tests for the Section component", () => {
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
    expect(getByTestId("section-container")).toHaveClass("section-class");
    expect(getByTestId("section-container")).toHaveStyle("width: 50px");

    expect(getByTestId("section-h2")).toHaveClass("heading-class");
    expect(getByTestId("section-h2")).toHaveStyle("width: 50px");
    expect(container).toHaveTextContent("Testing Title");
  });
});
