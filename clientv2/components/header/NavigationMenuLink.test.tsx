import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import NavigationMenuLink from "./NavigationMenuLink";
import { Root, List, Item } from "@radix-ui/react-navigation-menu";

afterEach(() => {
  cleanup();
});

describe("Navigation Links with radix ui Navigation Menu Link primitive", () => {
  it("should render", () => {
    render(<NavigationMenuLink href="#">Link</NavigationMenuLink>, {
      wrapper: ({ children }: { children: React.ReactNode }) => {
        return (
          <Root>
            <List>
              <Item>{children}</Item>
            </List>
          </Root>
        );
      },
    });
  });
  test("link animation tap", () => {
    const { getByText } = render(
      <NavigationMenuLink href="#">Link</NavigationMenuLink>,
      {
        wrapper: ({ children }: { children: React.ReactNode }) => {
          return (
            <Root>
              <List>
                <Item>{children}</Item>
              </List>
            </Root>
          );
        },
      }
    );
    expect(getByText("Link")).toHaveClass("false");
    fireEvent.pointerDown(getByText("Link"));
    expect(getByText("Link")).toHaveClass("animate-tap transition-transform");

    fireEvent.animationEnd(getByText("Link"));
    expect(getByText("Link")).not.toHaveClass(
      "animate-tap transition-transform"
    );
  });
});
