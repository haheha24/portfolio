import { Project } from "../../../../App";

interface IcheckBoxList {
  checkBox: string;
  checked: boolean;
}
interface Iconditionals {
  [conditional: string]: string | boolean | number;
}

const FilteredProjects = (
  searchBoxValue: string,
  projects: Project[],
  checkBoxList?: IcheckBoxList[] | undefined
) => {
  const trimmedValue = searchBoxValue.trim().toLowerCase();

  const searchFunction = (projects: Project[]): Project[] => {
    return projects.filter((stateSearch) => {
      return (
        stateSearch.title.toLowerCase().match(trimmedValue) ||
        stateSearch.desc.toLowerCase().match(trimmedValue) ||
        stateSearch.tags.toString().toLowerCase().match(trimmedValue)
      );
    });
  };

  const checkCondition = (project: Project, checkBoxList: IcheckBoxList) => {
    const conditionals: Iconditionals[] = [
      { name: "completed", condition: true },
      { name: "notCompleted", condition: false },
      { name: "threeStar", condition: 3 },
      { name: "twoStar", condition: 2 },
      { name: "oneStar", condition: 1 },
      { name: "repoLink", condition: true },
      { name: "deployLink", condition: true },
      { name: "html", condition: "HTML" },
      { name: "css", condition: "CSS" },
      { name: "javaScript", condition: "JavaScript" },
      { name: "react", condition: "React" },
      { name: "nodeJS", condition: "Node.JS" },
      { name: "expressJS", condition: "Express.JS" },
      { name: "mongooseJS", condition: "Mongoose.JS" },
      { name: "mongoDBAtlas", condition: "MongoDB Atlas" },
    ];
    let matchingCheck: Project = project;
    /// GET THE FILTER WORKING. FIND A WAY TO MATCH CONDITIONALS TO CHECKBOXLIST
    // NEW CONDITIONALS WILL NARROW DOWN WHAT I NEED TO COMPARE FOR EACH PROJECT.
    // NO NEED TO CHECK ALL 15, JUST THE ONES THAT ARE RELEVANT TO THE CHECKBOXES.
    for (let i = 0; i < conditionals.length; i++) {
      if (conditionals[i].name === checkBoxList.checkBox) {
        let newConditionals = conditionals.filter(
          (condition, index, conditionalArr) => {
            console.log(condition, checkBoxList.checkBox, "newCondi Log");
            return conditionalArr[index].name === checkBoxList.checkBox;
          }
        );
        console.log(newConditionals, "new conditionals");
        matchingCheck = project;
      } else {
        matchingCheck = project;
      }
    }
    return matchingCheck;
  };

  const checkBoxFilter = (
    projects: Project[],
    checkBoxArray: IcheckBoxList[]
  ) => {
    //attempt 2 looping through each checked box
    const tempArr: Project[] = [];
    for (let i = 0; i < checkBoxArray.length; i++) {
      if (tempArr.length > 0) {
        let tempProjects = projects.filter((project) => {
          return !tempArr.indexOf(project);
        });
        console.log(`tempArr.length = ${tempArr.length} on loop ${i}`);
        console.log(`this is tempProjects: ${tempProjects}`);
        for (let j = 0; j < tempProjects.length; j++) {
          let conditionIsMatched = checkCondition(
            tempProjects[j],
            checkBoxArray[i]
          );
          tempArr.push(conditionIsMatched);
          console.log(tempArr, "tempArr.length > 0");
        }
      } else {
        for (let j = 0; j < projects.length; j++) {
          let conditionIsMatched = checkCondition(
            projects[j],
            checkBoxArray[i]
          );
          tempArr.push(conditionIsMatched);
          console.log(tempArr, "tempArr");
        }
      }
    }

    return searchFunction(tempArr);
  };
  let filtProjects: Project[] = [];
  if (checkBoxList !== undefined) {
    console.log("is not undefined");
    return (filtProjects = checkBoxFilter(projects, checkBoxList));
  } else {
    console.log("is undefined");
    return (filtProjects = searchFunction(projects));
  }
};

export default FilteredProjects;
