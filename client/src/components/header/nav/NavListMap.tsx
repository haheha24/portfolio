import NavList from "./NavList";
interface INavListArray {
  styles: { grid: string; fixed: string };
  listName: string;
  endPoint: string;
  navLinkId: string;
  navLinkClass: string;
  navLinkActive: string;
}
const NavListMap = (props: {
  isHomePage: boolean;
  isGreaterThan860: boolean;
  isElementVisible: boolean;
}) => {
  const { isHomePage, isGreaterThan860, isElementVisible } = props;
  const navListArray: INavListArray[] = [
    {
      styles: { grid: "nav-li item-1", fixed: "nav-li nav-li-fixed" },
      listName: "CreativeAge",
      endPoint: "/",
      navLinkId: "home",
      navLinkClass: "nav-link nav-linkMain",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-2", fixed: "nav-li nav-li-fixed" },
      listName: "About",
      endPoint: "/about",
      navLinkId: "about",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-3", fixed: "nav-li nav-li-fixed" },
      listName: "Projects",
      endPoint: "/projects",
      navLinkId: "projects",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-4", fixed: "nav-li nav-li-fixed" },
      listName: "Contact",
      endPoint: "/contact",
      navLinkId: "contact",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
  ];

  //handle the styles and return the desired style
  const handleStyles = (match: INavListArray) => {
    //for the homescreen grid layout
    const homeMenuIs860 = isHomePage && isGreaterThan860 && isElementVisible;
    //for the homescreen fixed layout after scrolling
    const homeMenuScrolledIs860 =
      isHomePage && isGreaterThan860 && isElementVisible === false;
    //for when not on home page and width is > 860
    const notHomeIs860 =
      isHomePage === false && isGreaterThan860 && isElementVisible;
    //for when not home page and < 860 AKA responsive CSS
    const notHomeNot860 =
      isHomePage === false &&
      isGreaterThan860 === false &&
      isElementVisible === false;

    if (homeMenuIs860) {
      return match.styles.grid;
    } else if (homeMenuScrolledIs860) {
      return match.styles.fixed;
    } else if (notHomeNot860) {
      return match.styles.fixed;
    } else if (notHomeIs860) {
      return match.styles.fixed;
    } else {
      return match.styles.fixed;
    }
  };
  return (
    <>
      {navListArray.map((navItem, index) => {
        const { listName, endPoint, navLinkId, navLinkClass, navLinkActive } =
          navItem;
        return (
          <NavList
            key={index}
            liClass={handleStyles(navItem)}
            listName={listName}
            endPoint={endPoint}
            navLinkId={navLinkId}
            navLinkClass={navLinkClass}
            navLinkActive={navLinkActive}
          />
        );
      })}
    </>
  );
};

export default NavListMap;
