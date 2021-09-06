import { Project } from "../../../../App";

interface IcheckBoxList {
  checkBox: string;
  checked: boolean;
}

interface IpreFilter {
  project: Project;
  checkBox: string;
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

  console.log(checkBoxList, "checkBoxList");
  console.log(checkBoxTrueArray, "checkBoxTrueArray");

  if (checkBoxTrueArray.length === 0) {
    return searchFunction(value, projects);
  } else {
    //make a filtered project for each type of checkbox filter.

    const completedProjects = projects
      .filter((project) => {
        return project.completed === true;
      })
      .map((completed) => {
        return { project: completed, checkBox: "Completed" };
      });

    const notCompletedProjects = projects
      .filter((project) => {
        return project.completed !== true;
      })
      .map((notCompleted) => {
        return { project: notCompleted, checkBox: "Not completed" };
      });

    const threeStarProjects = projects
      .filter((project) => {
        return project.stars === 3;
      })
      .map((threeStars) => {
        return { project: threeStars, checkBox: "Three-star" };
      });

    const twoStarProjects = projects
      .filter((project) => {
        return project.stars === 2;
      })
      .map((twoStars) => {
        return { project: twoStars, checkBox: "Two-star" };
      });
    const oneStarProjects = projects
      .filter((project) => {
        return project.stars === 1;
      })
      .map((oneStars) => {
        return { project: oneStars, checkBox: "One-star" };
      });

    const repoProjects = projects
      .filter((project) => {
        return (
          project.repoLink.length > 0 && project.repoLink !== ("N/A" || "")
        );
      })
      .map((repos) => {
        return { project: repos, checkBox: "Repo link" };
      });

    const deployProjects = projects
      .filter((project) => {
        return (
          project.deployLink.length > 0 && project.deployLink !== ("N/A" || "")
        );
      })
      .map((deploy) => {
        return { project: deploy, checkBox: "Deploy link" };
      });

    const htmlProjects = projects
      .filter((tags) => {
        return tags.tags.includes("HTML");
      })
      .map((html) => {
        return { project: html, checkBox: "HTML" };
      });

    const cssProjects = projects
      .filter((tags) => {
        return tags.tags.includes("CSS");
      })
      .map((css) => {
        return { project: css, checkBox: "CSS" };
      });

    const javaScriptProjects = projects
      .filter((tags) => {
        return tags.tags.includes("JavaScript");
      })
      .map((javascript) => {
        return { project: javascript, checkBox: "JavaScript" };
      });
    console.log(javaScriptProjects, "javascriptProjects")

    const reactProjects = projects
      .filter((tags) => {
        return tags.tags.includes("React");
      })
      .map((react) => {
        return { project: react, checkBox: "React" };
      });

    const nodeProjects = projects
      .filter((tags) => {
        return tags.tags.includes("Node.JS");
      })
      .map((node) => {
        return { project: node, checkBox: "Node.JS" };
      });

    const expressProjects = projects
      .filter((tags) => {
        return tags.tags.includes("Express.JS");
      })
      .map((express) => {
        return { project: express, checkBox: "Express.JS" };
      });

    const mongooseProjects = projects
      .filter((tags) => {
        return tags.tags.includes("Mongoose.JS");
      })
      .map((mongoose) => {
        return { project: mongoose, checkBox: "Mongoose.JS" };
      });

    const mongoDBProjects = projects
      .filter((tags) => {
        return tags.tags.includes("MongoDB Atlas");
      })
      .map((mongoDB) => {
        return { project: mongoDB, checkBox: "MongoDB Atlas" };
      });

    const preFilter: IpreFilter[] = [
      ...completedProjects,
      ...notCompletedProjects,
      ...threeStarProjects,
      ...twoStarProjects,
      ...oneStarProjects,
      ...repoProjects,
      ...deployProjects,
      ...javaScriptProjects,
      ...htmlProjects,
      ...cssProjects,
      ...reactProjects,
      ...nodeProjects,
      ...expressProjects,
      ...mongooseProjects,
      ...mongoDBProjects,
    ];
    const filteredProjectArray: Project[] = [];

    console.log(filteredProjectArray, "pre");

    // Remove duplicates for filteredProjectArray in loopFilteredProjects()
    const removeDuplicateProjects = (args: Project[]) => {
      let a = args.concat();
      for (let i = 0; i < args.length; ++i) {
        for (let j = i + 1; j < args.length; ++j) {
          if (args[i].title === args[j].title) {
            args.splice(j--, 1);
          }
        }
      }
      return a;
    };

    //Dynamically add in each filtered project into filteredProjectArray
    const loopFilteredProjects = (
      checkBTA: IcheckBoxList[],
      preF: IpreFilter[]
    ) => {
      for (let i = 0; i < checkBTA.length; ++i) {
        for (let j = 0; j < preF.length; ++j) {
          if (checkBTA[i].checkBox === preF[j].checkBox) {
            filteredProjectArray.push(preF[j].project);
          }
        }
      }
      return removeDuplicateProjects(filteredProjectArray)
    };

    console.log(filteredProjectArray, "post");

    // the return value of filtereProjectArray is not correctly returning when 2-4+ filters are checked. I believe it's to do with
    // removeDuplicateProjects not being being modified correctly for my use case
    return searchFunction(value, loopFilteredProjects(checkBoxTrueArray, preFilter));
  }
};
