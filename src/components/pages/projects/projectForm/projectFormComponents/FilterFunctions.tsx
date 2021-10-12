import { Project } from "../../../../../App";

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
  checkBoxList?: IcheckBoxList[]
): Project[] => {
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
    { name: "javascript", condition: "JavaScript" },
    { name: "react", condition: "React" },
    { name: "nodejs", condition: "Node.JS" },
    { name: "expressjs", condition: "Express.JS" },
    { name: "mongoosejs", condition: "Mongoose.JS" },
    { name: "mongodbatlas", condition: "MongoDB Atlas" },
  ];
  const checkCondition = (
    project: Project,
    checkBoxList: IcheckBoxList[]
  ): Project[] => {
    let matchingConditionals: Iconditionals[] = [];
    let matchingCheck: Project[] = [];
    for (let i = 0; i < checkBoxList.length; i++) {
      for (let j = 0; j < conditionals.length; j++) {
        if (checkBoxList[i].checkBox === conditionals[j].name)
          matchingConditionals.push(conditionals[j]);
      }
    }
    for (let i = 0; i < matchingConditionals.length; i++) {
      switch (matchingConditionals[i].condition) {
        //fallthrough
        case project.completed:
        case project.stars:
        case Object.getOwnPropertyNames(project)[3]:
        case Object.getOwnPropertyNames(project)[4]:
        case project.tags[0]:
        case project.tags[1]:
        case project.tags[2]:
        case project.tags[3]:
        case project.tags[4]:
        case project.tags[5]:
        case project.tags[6]:
        case project.tags[7]:
          matchingCheck.push(project);
          break;
        default:
          console.log(`${matchingConditionals[i].name} didn't match`);
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
    console.log("checkBoxFilter()");
    return (filtProjects = checkBoxFilter(projects, checkBoxList));
  } else {
    console.log("searchFunction()");
    return (filtProjects = searchFunction(projects));
  }
};

export default FilteredProjects;
