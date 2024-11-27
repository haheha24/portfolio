import { render, fireEvent, cleanup } from "@testing-library/react";
import Button from "./Button";

afterEach(() => {
  cleanup();
});

describe("Generic Button component with default tap animation via tailwind css", () => {
  it("should render a button element", () => {
    const { getByText } = render(<Button type="button">button</Button>);
    expect(getByText("button")).toBeInTheDocument();
  });
  it("should render an anchor element", () => {
    const { getByText } = render(
      <Button as="a" href="#">
        Anchor
      </Button>
    );
    expect(getByText("Anchor")).toBeInTheDocument();
  });

  test("button tap", () => {
    const { getByText } = render(<Button type="button">button</Button>);
    expect(getByText("button")).toHaveClass("false");
    fireEvent.pointerDown(getByText("button"));
    expect(getByText("button")).toHaveClass("animate-tap");
    fireEvent.animationEnd(getByText("button"));
    expect(getByText("button")).not.toHaveClass("animate-tap");
    expect(getByText("button")).toHaveClass("false");
  });
  test("anchor tap", () => {
    const { getByText } = render(
      <Button as="a" href="#">
        Anchor
      </Button>
    );
    expect(getByText("Anchor")).toHaveClass("false");
    fireEvent.pointerDown(getByText("Anchor"));
    expect(getByText("Anchor")).toHaveClass("animate-tap");
    fireEvent.animationEnd(getByText("Anchor"));
    expect(getByText("Anchor")).not.toHaveClass("animate-tap");
    expect(getByText("Anchor")).toHaveClass("false");
  });
});
