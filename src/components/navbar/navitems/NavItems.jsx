import React from "react";
import {
  NavItemLink,
  NavItemList,
  NavItemLists,
  NavItemsWrapper,
} from "./style";

function NavItems() {
  const navList = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "Blog",
      to: "/blog",
    },
    {
      id: 3,
      name: "About",
      to: "/about",
    },
    {
      id: 4,
      name: "Contact",
      to: "/contact",
    },
  ];
  return (
    <NavItemsWrapper>
      <NavItemLists>
        {navList.map((item) => {
          return (
            <NavItemList key={item.id}>
              <NavItemLink to={item.to}>{item.name}</NavItemLink>
            </NavItemList>
          );
        })}
      </NavItemLists>
    </NavItemsWrapper>
  );
}

export default NavItems;
