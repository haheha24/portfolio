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
    { name: "repoLink", condition: "repoLink" && !undefined },
    {
      name: "deployLink",
      condition: "deployLink" && !undefined && !"repoLink",
    },
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
    //For each checkBox, check if it's equal to any conditionals and if true, push the conditional into matching
    //A smaller matchingConditionals allows for the following loop of switch to only do loop equal to the amount of matched conditions
    for (let i = 0; i < checkBoxList.length; i++) {
      for (let j = 0; j < conditionals.length; j++) {
        if (checkBoxList[i].checkBox === conditionals[j].name)
          matchingConditionals.push(conditionals[j]);
      }
    }
    //match each condition, looping through them all inside the switch statement.
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
        console.log(tempArr)
        let tempProjects = projects.filter((project) => {
          return !tempArr.indexOf(project);
        });
        console.log(`tempArr.length = ${tempArr.length} on loop ${i + 1}`);
        for (let j = 0; j < tempProjects.length; j++) {
          let multipleConditiosMatched = checkCondition(
            tempProjects[j],
            checkBoxArray
          );
          tempArr.push(...multipleConditiosMatched)
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
    let finalCheckBoxFilter = tempArr.filter((project, index, projectArr) => {
      return projectArr.indexOf(project) === index
    })
    return searchFunction(finalCheckBoxFilter);
  };
  if (checkBoxList !== undefined) {
    return checkBoxFilter(projects, checkBoxList);
  } else {
    return searchFunction(projects);
  }
};

export default FilteredProjects;
