import { render, fireEvent, cleanup, configure } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";

afterEach(() => {
  cleanup();
});

describe("Test coverage for the NavigationMenu, built with radix UI NavigationMenu", () => {
  test("state changes for data-grid attribute between display prop state", () => {
    const { rerender, getByRole } = render(<NavigationMenu display="grid" />);
    expect(getByRole("navigation", { name: /Main/i })).toHaveAttribute(
      "data-grid",
      "true"
    );
    rerender(<NavigationMenu display="fixed" />);
    expect(getByRole("navigation", { name: /Main/i })).toHaveAttribute(
      "data-grid",
      "false"
    );
  });
  test("Test which nav link is active", () => {
    const { getByText } = render(<NavigationMenu display="grid" />);
    //Check that The Creative Age is the first to be active
    expect(getByText("The Creative Age")).toHaveAttribute(
      "data-active",
      "true"
    );
    expect(getByText("About")).toHaveAttribute("data-active", "false");
    fireEvent.click(getByText("About"));
    expect(getByText("The Creative Age")).toHaveAttribute(
      "data-active",
      "false"
    );
    expect(getByText("About")).toHaveAttribute("data-active", "true");
  });
});
