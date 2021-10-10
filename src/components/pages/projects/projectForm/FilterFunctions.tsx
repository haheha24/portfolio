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
  const conditionals: Iconditionals[] = [
    { name: "completed", condition: true },
    { name: "notCompleted", condition: false },
    { name: "threeStar", condition: 3 },
    { name: "twoStar", condition: 2 },
    { name: "oneStar", condition: 1 },
    { name: "repoLink", condition: "repoLink" },
    { name: "deployLink", condition: "deployLink" },
    { name: "html", condition: "HTML" },
    { name: "css", condition: "CSS" },
    { name: "javaScript", condition: "JavaScript" },
    { name: "react", condition: "React" },
    { name: "nodeJS", condition: "Node.JS" },
    { name: "expressJS", condition: "Express.JS" },
    { name: "mongooseJS", condition: "Mongoose.JS" },
    { name: "mongoDBAtlas", condition: "MongoDB Atlas" },
  ];
  const checkCondition = (
    project: Project,
    checkBoxList: IcheckBoxList[]
  ): Project[] => {
    //need to iterate on tags to match conditionals against tag names. Was thinking of using the keys
    /* let projectTags = project.tags; */
    //Now check if each conditionals.condition matches the relevent project properties
    let matchingConditionals: Iconditionals[] = [];
    for (let i = 0; i < checkBoxList.length; i++) {
      for (let j = 0; j < conditionals.length; j++) {
        if (checkBoxList[i].checkBox === conditionals[j].name)
          matchingConditionals.push(conditionals[j]);
      }
    }
    let matchingCheck: Project[] = [];
    for (let i = 0; i < matchingConditionals.length; i++) {
      switch (matchingConditionals[i].condition) {
        case project.completed:
          matchingCheck.push(project);
          break;
        case project.stars:
          matchingCheck.push(project);
          break;
        case Object.getOwnPropertyNames(project)[3]:
          matchingCheck.push(project);
          break;
        case Object.getOwnPropertyNames(project)[4]:
          matchingCheck.push(project);
          break;
        default:
          console.log("none matched");
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
        console.log(tempProjects, "fltered tempArr into tempProjects");
        console.log(`tempArr.length = ${tempArr.length} on loop ${i}`);
        for (let j = 0; j < tempProjects.length; j++) {
          let conditionIsMatched = checkCondition(
            tempProjects[j],
            checkBoxArray
          );
          if (conditionIsMatched !== undefined) {
            tempArr.push(...conditionIsMatched);
          }
          console.log(tempArr, "tempArr.length > 0");
        }
      } else {
        for (let j = 0; j < projects.length; j++) {
          let conditionIsMatched = checkCondition(projects[j], checkBoxArray);
          if (conditionIsMatched !== undefined) {
            tempArr.push(...conditionIsMatched);
          }
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
