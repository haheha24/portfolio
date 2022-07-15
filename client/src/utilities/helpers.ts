/**
 * Finds the element of the matching id and scrolls to the element.
 * If parameter is equal to "homeLink", scrolls to top and returns undefined object properties.
 * If parameter id is null or undefined, logs an error
 * @param elementId
 * @returns an object with the properties element and position
 */
export const scrollToElement = (
  elementId: string
): { element: HTMLElement | undefined; position: number | undefined } => {
  /* searches for element id in param and scrolls to it */
  if (elementId === "homeLink") {
    window.scrollTo(0, 0);
    return {
      element: undefined,
      position: undefined,
    };
  }
  if (document.getElementById(elementId) === null) {
    console.error(`Error: ${elementId} does not exist`);
    return {
      element: undefined,
      position: undefined,
    };
  }

  //Get top pixel of id element. - 75 to adjust for section headings.
  const top = document.getElementById(elementId)?.getBoundingClientRect()!.top! - 75;
  window.scrollTo(0, top + window.scrollY);
  return {
    element: document.getElementById(elementId)!,
    position: top + window.scrollY,
  };
};
