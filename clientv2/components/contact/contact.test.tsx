import { render, cleanup, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

afterEach(() => {
  cleanup();
});

describe("Run tests for the contact form component.", () => {
  it("Should show relevant validation errors for each input", async () => {
    const { queryByLabelText, getByTestId } = render(<Contact />);
    const user = userEvent.setup();
    //Formik errors are triggered by touch events
    const inputThenClick = async (
      typeMatch: HTMLElement,
      type: string | null,
      touch: HTMLElement
    ) => {
      await user.click(typeMatch);
      await user.clear(typeMatch);
      if (type !== null) {
        //userEvent.setup().type doesn't accept empty strings
        await user.type(typeMatch, type);
      }
      await user.click(touch);
    };
    const name = queryByLabelText(/Name/) as HTMLLabelElement;
    const email = queryByLabelText(/Email/) as HTMLLabelElement;
    const subject = queryByLabelText(/Subject/) as HTMLLabelElement;
    const message = queryByLabelText(/Message/) as HTMLLabelElement;

    //Name Input
    expect(name).toBeRequired();
    await inputThenClick(name!, null, email!);
    expect(getByTestId("contact-name")).toHaveTextContent(
      "Please enter your name"
    );
    await inputThenClick(name!, "a", email!);
    expect(getByTestId("contact-name")).toHaveTextContent(
      "Please enter a minimum of 2 characters"
    );
    await inputThenClick(name!, "AAAAAAAAAAAAAAAAAAAAAAAAA", email!);
    expect(getByTestId("contact-name")).toHaveTextContent(
      "Please enter a maximum of 24 characters"
    );
    await inputThenClick(name!, "Robert", email!);
    expect(getByTestId("contact-name")).not.toHaveTextContent(
      "Please enter a maximum of 24 characters"
    );
    expect(getByTestId("contact-name")).not.toHaveTextContent(
      "Please enter a minimum of 2 characters"
    );
    expect(getByTestId("contact-name")).toHaveTextContent(/Name/);

    //Email Input
    expect(email).toBeRequired();
    await inputThenClick(email!, null, name!);
    expect(getByTestId("contact-email")).toHaveTextContent(
      "Please enter your email"
    );
    await inputThenClick(email!, "a", name!);
    expect(getByTestId("contact-email")).toHaveTextContent(
      "Must be a valid email"
    );
    await inputThenClick(email!, "test@test.com", name!);
    expect(getByTestId("contact-email")).not.toHaveTextContent(
      "Must be a valid email"
    );
    expect(getByTestId("contact-email")).toHaveTextContent(/Email/);

    //Subject Input
    expect(subject).toBeRequired();
    await inputThenClick(subject!, null, email!);
    expect(getByTestId("contact-subject")).toHaveTextContent(
      "Please enter a subject for the email"
    );
    await inputThenClick(subject!, "a", email!);
    expect(getByTestId("contact-subject")).toHaveTextContent(
      "Please enter a minimum of 2 characters"
    );
    await inputThenClick(subject!, "AAAAAAAAAAAAAAAAAAAAAAAAA", email!);
    expect(getByTestId("contact-subject")).toHaveTextContent(
      "Please enter a maximum of 24 characters"
    );
    await inputThenClick(subject!, "Robert", email!);
    expect(getByTestId("contact-subject")).not.toHaveTextContent(
      "Please enter a maximum of 24 characters"
    );
    expect(getByTestId("contact-subject")).not.toHaveTextContent(
      "Please enter a minimum of 2 characters"
    );
    expect(getByTestId("contact-subject")).toHaveTextContent(/Subject/);

    //Message Input
    expect(message).toBeRequired();
    await inputThenClick(message!, null, email!);
    expect(getByTestId("contact-message")).toHaveTextContent(
      "Message: message is a required field"
    );
    await inputThenClick(message!, "a", email!);
    expect(getByTestId("contact-message")).not.toHaveTextContent(
      "Please enter a message for the email"
    );
    expect(getByTestId("contact-message")).toHaveTextContent(/Message/);
  });
  it("Should accept values as a user would type into the form", async () => {
    const user = userEvent.setup();
    const { queryByLabelText } = render(<Contact />);

    const name = queryByLabelText(/Name/);
    expect(name).toHaveValue("");
    await user.type(name!, "Robert");
    expect(name).toHaveValue("Robert");

    const email = queryByLabelText(/Email/);
    expect(email).toHaveValue("");
    await user.type(email!, "test@test.com");
    expect(email).toHaveValue("test@test.com");

    const subject = queryByLabelText(/Subject/);
    expect(subject).toHaveValue("");
    await user.type(subject!, "unit test");
    expect(subject).toHaveValue("unit test");

    const message = queryByLabelText(/Message/);
    expect(message).toHaveDisplayValue("");
    await user.type(message!, "This message is for testing purposes");
    expect(message).toHaveDisplayValue("This message is for testing purposes");
  });

  /**
   * Need to test that the modal comes up correctly.
   * Need to test for API errors being correctly shown.
   */
});
