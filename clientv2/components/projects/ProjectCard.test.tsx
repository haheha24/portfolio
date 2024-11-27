import { render, waitFor, fireEvent, cleanup } from "@testing-library/react";
import ProjectCard from "./ProjectCard";
import WIP from "../../public/images/work_in_progress.jpg";

afterEach(() => cleanup());

describe("Tests for the ProjectCard component", () => {
  it("should display a card with have all props defined", () => {
    const { getByAltText, getByText, container } = render(
      <ProjectCard
        url="#"
        image={"/images/work_in_progress.jpg"}
        altTxt="test alt text"
        title="test project"
        description="this is a card for testing"
      />
    );
    //url
    expect(getByText("Visit website")).toHaveAttribute("href", "#");
    //image and alt text
    waitFor(() =>
      //Next/Image lazily loads and need to be waited for in order for the image url to match
      expect(getByAltText("test alt text")).toHaveAttribute(
        "src",
        "/images/work_in_progress.jpg"
      )
    );
    //title and description
    expect(container).toHaveTextContent("test project");
    expect(container).toHaveTextContent("this is a card for testing");
  });
});
