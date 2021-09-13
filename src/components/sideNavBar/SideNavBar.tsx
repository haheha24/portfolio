

import "./sidenavbar.css";
import { useState, useLayoutEffect, forwardRef } from "react";
import { IhomeSubtitle } from "../pages/home/Home";

type Iprops = {
  navArray: IhomeSubtitle[];
};
/* type Irefs = {
  aboutMe: React.RefObject<HTMLHeadingElement>;
  loveSoftware: React.RefObject<HTMLHeadingElement>;
}; */
interface IscrollIndex {
  windowPos: number;
  elementArray: IhomeSubtitle[];
  arrayIndex: number;
  maxArrayIndex: number;
}

const scrollIndex = (
  windowPos: number,
  elementArray: IhomeSubtitle[],
  startArrayIndex: number,
  endArrayIndex: number
): IscrollIndex | number => {  
  console.log(elementArray[endArrayIndex].itemRef.current !== null || undefined, "line 27")
  if (startArrayIndex === endArrayIndex) return startArrayIndex;
  else if (
    startArrayIndex === endArrayIndex - 1
  ) {
    if (
      Math.abs(
        elementArray[startArrayIndex].itemRef!.current!.offsetTop - windowPos
      ) <
      Math.abs(elementArray[endArrayIndex].itemRef!.current!.offsetTop) -
        windowPos
    ) {
      return startArrayIndex;
    } else {
      return endArrayIndex;
    }
  } else { return 0/* scrollIndex(
    windowPos,
    elementArray,
    startArrayIndex,
    endArrayIndex 
  );*//* 
    let nextNearest = Math.floor(startArrayIndex + endArrayIndex) / 2;

    let a = Math.abs(
      elementArray[nextNearest].itemRef!.current!.offsetTop - windowPos
    );

    let b = Math.abs(
      elementArray[nextNearest + 1].itemRef!.current!.offsetTop - windowPos
    );
    if (a < b) {
      return scrollIndex(windowPos, elementArray, startArrayIndex, nextNearest);
    } else {
      return scrollIndex(
        windowPos,
        elementArray,
        startArrayIndex,
        endArrayIndex
      );
    }*/
  } 
    };

const SideNavBar = forwardRef<HTMLHeadElement, Iprops>(
  (props: { navArray: IhomeSubtitle[] }, ref) => {
    const [activeIndex, setActiveIndex] = useState<number | IscrollIndex>(0); //will track scroll section

    console.log(ref)
    console.log(props.navArray)
    
    useLayoutEffect(() => {
      if (ref !== null || undefined) {
      const handleScroll = () => {
        let indexScroll = scrollIndex(
          window.scrollY,
          props.navArray,
          0,
          props.navArray.length - 1
        );
        setActiveIndex(indexScroll); // this setter needs to be the final coords
      };
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.addEventListener("scroll", handleScroll);
      };
  }}, [props.navArray, ref]);

    return (
      <nav className="sidenav">
        <ul className="sidenav-ul">
          <li className="sidenav-item">Welcome</li>
          {props.navArray.map((navItem: IhomeSubtitle, index) => {
            return (
              <li
                key={index}
                className="sidenav-item"
                style={{
                  backgroundColor: activeIndex === index ? "green" : "red",
                }}
              >
                <a href={`#${navItem.itemId}`}>{navItem.itemName}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
);

export default SideNavBar;
