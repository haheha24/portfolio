import { Project } from "../../../../App";

export const searchFunction = (
  searchValue: string,
  projects: Project[]
): Array<Project> => {
  const sanitise = searchValue.trim().toLowerCase();
  return projects.filter((stateSearch) => {
    return (
      stateSearch.title.toLowerCase().match(sanitise) ||
      stateSearch.desc.toLowerCase().match(sanitise) ||
      stateSearch.tags.toString().toLowerCase().match(sanitise)
    );
  });
};

//searchFunction filters the value variable of filterFunction after it has applied checkbox filters.
export const filterFunction = (
  value: string,
  projects: Project[],
  checkBoxArray: string | any
): Array<Project> => {
  const filteredState = projects.filter((stateSearch) => {
    return (
      stateSearch.completed === true /* ||
       stateSearch.desc.toLowerCase().match(checkBoxArray[1]) ||
      stateSearch.deployLink.toLowerCase().match(checkBoxArray[1]) ||
      stateSearch.repoLink.toLowerCase().match(checkBoxArray[1]) ||
      stateSearch.tags.toString().toLowerCase().match(checkBoxArray[1]) */
    );
  });
  return searchFunction(value, projects);
};
