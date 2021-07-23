import React from "react";

interface Item {
  title: string;
  menuLink: string | undefined;
}

const MenuItem: React.FC<Item> = ({ title, menuLink }) => {
  return <a href={menuLink}>{title}</a>;
};

export default MenuItem;
