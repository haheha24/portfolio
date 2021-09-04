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
      .map((deploy) => {
        return { project: deploy, checkBox: "HTML" };
      });

    const cssProjects = projects
      .filter((tags) => {
        return tags.tags.includes("CSS");
      })
      .map((deploy) => {
        return { project: deploy, checkBox: "CSS" };
      });

    const javaScriptProjects = projects
      .filter((tags) => {
        return tags.tags.includes("JavaScript");
      })
      .map((deploy) => {
        return { project: deploy, checkBox: "JavaScript" };
      });

    const reactProjects = projects
      .filter((tags) => {
        return tags.tags.includes("React");
      })
      .map((deploy) => {
        return { project: deploy, checkBox: "React" };
      });

    const nodeProjects = projects
      .filter((tags) => {
        return tags.tags.includes("Node.JS");
      })
      .map((deploy) => {
        return { project: deploy, checkBox: "Node.JS" };
      });

    const expressProjects = projects
      .filter((tags) => {
        return tags.tags.includes("Express.JS");
      })
      .map((deploy) => {
        return { project: deploy, checkBox: "Express.JS" };
      });

    const mongooseProjects = projects
      .filter((tags) => {
        return tags.tags.includes("Mongoose.JS");
      })
      .map((deploy) => {
        return { project: deploy, checkBox: "Mongoose.JS" };
      });

    const mongoDBProjects = projects
      .filter((tags) => {
        return tags.tags.includes("MongoDB Atlas");
      })
      .map((deploy) => {
        return { project: deploy, checkBox: "MongoDB Atlas" };
      });

    const preFilter = [
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

    //Dynamically add in each filtered project into filteredProjectArray
    for (let i = 0; i < checkBoxTrueArray.length; ++i) {
      for (let j = 0; j < preFilter.length; ++j) {
        if (checkBoxTrueArray[i].checkBox === preFilter[j].checkBox) {
          filteredProjectArray.push(preFilter[j].project);
        }
      }
    }

    // Concatenate all completed project arrays into a single return value and remove duplicates for searchFunction
    const removeDuplicateProjects = (args: Project[]) => {
      let a = args.concat();
      for (let i = 0; i < args.length; ++i) {
        for (let j = i + 1; j < args.length; ++j) {
          if (args[i] === args[j]) {
            args.splice(j--, 1);
          }
        }
      }
      return a;
    };

    return searchFunction(value, removeDuplicateProjects(filteredProjectArray));
  }
};
