import About from "./About";
import { cleanup, render, fireEvent } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

describe("Tests the About component", () => {
  it("Contains the introduction", () => {
    const { container } = render(<About />);
    expect(container).toHaveTextContent(
      "Welcome! My name is Adrian Cristallo."
    );
  });
  it("Begins with Frontend Skills and then click Backend Skills", () => {
    const { getByRole } = render(<About />);
    expect(
      getByRole("button", { name: "Frontend Skills Button" })
    ).toHaveAttribute("data-active", "true");
    expect(
      getByRole("button", { name: "Backend Skills Button" })
    ).toHaveAttribute("data-active", "false");
    expect(getByRole("article", { name: "container" })).toHaveTextContent(
      "HTML"
    );

    fireEvent.click(getByRole("button", { name: "Backend Skills Button" }));

    expect(
      getByRole("button", { name: "Frontend Skills Button" })
    ).toHaveAttribute("data-active", "false");
    expect(
      getByRole("button", { name: "Backend Skills Button" })
    ).toHaveAttribute("data-active", "true");
    expect(getByRole("article", { name: "container" })).toHaveTextContent(
      "Node.JS"
    );
  });
});
