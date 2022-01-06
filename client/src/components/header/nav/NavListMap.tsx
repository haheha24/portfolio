import NavList from "./NavList";
const NavListMap = (props: {isElementVisible: boolean}) => {
  const {isElementVisible} = props;
  const navListArray = [
    {
      styles: { grid: "nav-li item-1", fixed: "nav-li" },
      name: "CreativeAge",
      endPoint: "/",
      navLinkId: "home",
      navLinkClass: "nav-link nav-linkMain",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-2", fixed: "nav-li" },
      name: "About",
      endPoint: "/about",
      navLinkId: "about",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-3", fixed: "nav-li" },
      name: "Projects",
      endPoint: "/projects",
      navLinkId: "project",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-4", fixed: "nav-li" },
      name: "Contact",
      endPoint: "/contact",
      navLinkId: "contact",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
  ];
  return (
    <>
      {navListArray.map((navItem, index) => {
        let { styles, name, endPoint, navLinkId, navLinkClass, navLinkActive } =
          navItem;
        return <NavList
          key={index}
          liClass={isElementVisible ? styles.grid : styles.fixed}
          name={name}
          endPoint={endPoint}
          navLinkId={navLinkId}
          navLinkClass={navLinkClass}
          navLinkActive={navLinkActive}
        />;
      })}
    </>
  );
};

export default NavListMap;
