import { Project } from "../../../../App";

interface IcheckBoxList {
  checkBox: string;
  checked: boolean;
}

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
  checkBoxList: IcheckBoxList[]
): Array<Project> => {
  //Filter any checkboxes that are true
  const checkBoxTrueArray = checkBoxList.filter((checkBoxTrue) => {
    return checkBoxTrue.checked === true;
  });
  if (checkBoxTrueArray.length === 0) {
    return searchFunction(value, projects);
  } else {
    const checkBoxFilter = (
      checkBoxArray: IcheckBoxList[],
      checkBoxName: string
    ) => {
      let checkBoxFiltered = checkBoxArray.filter((checkBoxItem) => {
        if (
          checkBoxItem.checkBox === checkBoxName &&
          checkBoxItem.checked === true
        ) {
          return checkBoxItem.checkBox === checkBoxName;
        } else {
          return checkBoxItem;
        }
      });
      //The filtered checkBoxList[] will always have 1 key in it. This means returning checkBoxFiltered[0] allows us to directly access
      //the checkBox object and it's properties from the "array".
      return checkBoxFiltered[0];
    };
    //Make a constant for each filtered checkbox
    const completed = checkBoxFilter(checkBoxList, "Completed"); // === true for completed and !== for not completed
    const notCompleted = checkBoxFilter(checkBoxList, "Not completed");
    console.log(
      `This is completed: ${completed} and this is not completed: ${notCompleted}`
    );
    //make a filtered project for each type of checkbox filter.
    const completedProjects = projects.filter((project) => {
      return completed.checked === project.completed;
    });
    const notCompletedProjects = projects.filter((project) => {
      return notCompleted.checked !== project.completed;
    });
    // Concatenate all filtered project arrays into a single return value for searchFunction
    const mergeProjects = (args: Project[]) => {
      let a = args.concat()
      for(let i=0; i < a.length; ++i) {
        for(let j=i+1; j < a.length; ++j) {
          if(a[i] === a[j]) {
            a.splice(j--, 1)
          }
        }
      }
      return a
    } ;
    const filteredProjects = mergeProjects(completedProjects.concat(notCompletedProjects))
    return searchFunction(value, filteredProjects);
  }
};
