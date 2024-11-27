import { render, act, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BurgerMenu from "./BurgerMenu";

afterEach(() => {
  cleanup();
});

describe("Test coverage for the BurgerMenu, built with radix UI NavigationMenu", () => {
  const user = userEvent.setup();
  global.ResizeObserver = class ResizeObserver {
    [x: string]: any;
    constructor(cb: any) {
      this.cb = cb;
    }
    observe() {
      this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
    }
    unobserve() {}
    disconnect() {}
  } as any;
  test("Open and Close the Menu while testing which navlink is active", async () => {
    const { getByRole, getByText } = render(<BurgerMenu />, {
      wrapper: ({ children }: { children: React.ReactNode }) => {
        return <div style={{ pointerEvents: "auto" }}>{children}</div>;
      },
    });

    //open and close state
    expect(getByRole("button")).toHaveAttribute("data-state", "closed");
    //CLICK, SELECT, POINTERDOWN DO NOT WORK. THUS THE REST OF THE INTEGRATION CANNOT FOLLOW THROUGH.

    //open the closed button
    await user.click(getByRole("button", { expanded: false }));
    await waitFor(() => {
      expect(
        getByRole("button", { hidden: true, expanded: true })
      ).toHaveAttribute("data-state", "open");
      expect(getByRole("navigation", { name: /Main/i })).toBeInTheDocument();
      expect(getByText("The Creative Age")).toHaveAttribute(
        "data-active",
        "true"
      );
      expect(getByText("About")).toHaveAttribute("data-active", "false");
    });

    //click on a navlink and test if it's the active link
    await user.click(getByText("About"));
    await waitFor(() => {
      expect(getByText("The Creative Age")).toHaveAttribute(
        "data-active",
        "false"
      );
      expect(getByText("About")).toHaveAttribute("data-active", "true");
    });

    //close the open button
    await user.click(getByRole("button", { hidden: true, expanded: true }));
    await waitFor(() => {
      expect(getByRole("button", { expanded: false })).toHaveAttribute(
        "data-state",
        "closed"
      );
    });
  });
});
