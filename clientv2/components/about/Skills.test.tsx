import Skills from "./Skills";
import { cleanup, render, fireEvent } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

describe("Tests the Skills component", () => {
  it("Begins with Programming Languages and then click Frameworks, libraries and tools", () => {
    const { getByRole } = render(<Skills />);
    expect(
      getByRole("button", { name: "Programming Languages Button" })
    ).toHaveAttribute("data-active", "true");
    expect(
      getByRole("button", { name: "Frameworks, libraries and tools Button" })
    ).toHaveAttribute("data-active", "false");
    expect(getByRole("article", { name: "container" })).toHaveTextContent(
      "HTML5"
    );

    fireEvent.click(
      getByRole("button", { name: "Frameworks, libraries and tools Button" })
    );

    expect(
      getByRole("button", { name: "Programming Languages Button" })
    ).toHaveAttribute("data-active", "false");
    expect(
      getByRole("button", { name: "Frameworks, libraries and tools Button" })
    ).toHaveAttribute("data-active", "true");
    expect(getByRole("article", { name: "container" })).toHaveTextContent(
      "Node.JS"
    );
  });
});
