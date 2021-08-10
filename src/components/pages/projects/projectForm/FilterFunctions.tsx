import { Project } from "../../../../App";

export const searchFunction = (
  value: string,
  state: Project[]
): Array<Project> => {
  const sanitise = value.trim().toLowerCase();
  return state.filter((stateSearch) => {
    return (
      stateSearch.title.toLowerCase().match(sanitise) ||
      stateSearch.desc.toLowerCase().match(sanitise) ||
      stateSearch.tags.toString().toLowerCase().match(sanitise)
    );
  });
};

/* const checkBoxFilter = () => {

  
} */