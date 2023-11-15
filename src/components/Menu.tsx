"use client";

import React from "react";

const navItems = [
  { title: "HELP", href: "#", isExternal: false },
  { title: "APPLY", href: "#", isExternal: true },
  { title: "DAO", href: "https://blvkhvnd.wtf", isExternal: true },
];

export const NavItems = () => {
  return (
    <>
      {navItems.map(({ title, href, isExternal }, idx) => (
        <a
          className="py-2 text-center"
          key={`link-${idx}`}
          href={href}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {`${title}${isExternal ? "↗" : ""}`}
        </a>
      ))}
    </>
  );
};

export const MobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const displayMenuCls = showMobileMenu ? "block md:hidden" : "hidden";

  return (
    <>
      <a href="#" onClick={() => setShowMobileMenu(true)}>
        MENU↗
      </a>
      <div
        className={`${displayMenuCls} absolute top-0 right-0 bottom-0 left-0`}
        onClick={() => setShowMobileMenu(false)}
      />
      <div
        className={`${displayMenuCls} absolute top-16 right-4 bg-white border border-black shadow-md py-8 px-2 flex flex-col items-stretch w-56 gap-4 z-10`}
      >
        <NavItems />
      </div>
    </>
  );
};
