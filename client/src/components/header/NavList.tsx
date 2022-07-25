import { ReactChild } from "react";
import { NavLink } from "react-router-dom";
import { scrollToElement } from "../../utilities/helpers";
import imgSiteLogo from "../images/site_logo_512x512.png";

export interface INavLinkParams {
  liClass: string;
  listName: string | ReactChild;
  isString: boolean;
  endPoint: string;
  scrollTo?: string;
  navLinkId: string;
  navLinkClass: string;
  navLinkActive: string;
}

const NavList = ({
  liClass,
  listName,
  isString,
  endPoint,
  scrollTo,
  navLinkId,
  navLinkClass,
  navLinkActive,
}: INavLinkParams) => {
  return (
    <li className={liClass}>
      {isString ? (
        <>{listName}</>
      ) : (
        <NavLink
          to={endPoint}
          id={navLinkId}
          className={(isActive) =>
            navLinkClass + " " + (!isActive ? "unselected" : navLinkActive)
          }
          onClick={() => {
            scrollToElement(scrollTo || "home-menu");
          }}
        >
          {listName === "The Creative Age" ? (
            <>
              <img
                src={imgSiteLogo}
                alt="The Creative Age site logo"
                className="site-logo"
                style={{
                  color: "white",
                  verticalAlign: "text-bottom",
                  width: "1em",
                  height: "1em",
                }}
              />
              {listName}
            </>
          ) : (
            listName
          )}
        </NavLink>
      )}
    </li>
  );
};

export default NavList;
