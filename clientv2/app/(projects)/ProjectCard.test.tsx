import { render, cleanup } from "test-utils";
import ProjectCard from "./ProjectCard";

afterEach(() => cleanup());

describe("Tests for the ProjectCard component", () => {
  it("renders a full prop component, also checks snapshot", () => {
    const { container } = render(
      <ProjectCard
        url="thecreativeage.com.au"
        github="https://github.com/haheha24/portfolio"
        image="./images/portfolio.png"
        altTxt="Portfolio Feature Image"
        title="Portfolio"
        description="My portfolio website you are currently viewing."
      />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container).toHaveTextContent("Visit Website");
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(container).toHaveTextContent("Portfolio");
    expect(container).toHaveTextContent(
      "My portfolio website you are currently viewing."
    );
    expect(container.querySelector("img")).toHaveProperty(
      "src",
      `${window.location}images/portfolio.png` //window.location outputs the window ending with a /
    );
    expect(container.querySelector("img")).toHaveProperty(
      "alt",
      "Portfolio Feature Image"
    );
  });
  it("Renders minimal prop component", () => {
    const { container } = render(
      <ProjectCard
        title="Portfolio"
        description="My portfolio website you are currently viewing."
      />
    );
    expect(container).toHaveTextContent("Portfolio");
    expect(container).toHaveTextContent(
      "My portfolio website you are currently viewing."
    );
    expect(container).not.toHaveTextContent("Visit Website");
    expect(container.querySelector("svg")).not.toBeInTheDocument();
    expect(container.querySelector("img")).toHaveProperty(
      "src",
      `${window.location}images/work_in_progress.jpg` //window.location outputs the window ending with a /
    );
    expect(container.querySelector("img")).not.toHaveProperty(
      "alt",
      "Portfolio Feature Image"
    );
  });
});
