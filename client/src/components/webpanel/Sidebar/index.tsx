"use client";

import React from "react";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import ClickOutside from "./ClickOutside";
import SidebarItem from "./SidebarItem";
import { useUsersStore } from "@/store/usersStore";
import { MdPowerSettingsNew } from "react-icons/md";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "GENERAL",
    menuItems: [
      {
        icon: "",
        label: "Home",
        route: "/webpanel/home",
      },
      {
        icon: "",
        label: "Banner",
        route: "/webpanel/banner",
      },
      {
        icon: "",
        label: "News & Activity",
        route: "",
        children: [
          { label: "Blog", route: "/webpanel/blog" },
          { label: "News", route: "/webpanel/news" },
          { label: "Recruitment", route: "/webpanel/recruitment" }
        ],
      },
      {
        icon: "",
        label: "Mail Box",
        route: "/webpanel/mailbox",
      },
    ],
  },
  {
    name: "SETTINGS",
    secret: true,
    menuItems: [
      {
        icon: "",
        label: "User",
        route: "/webpanel/user",
      },
      {
        icon: "",
        label: "SEO",
        route: "/webpanel/seo",
        secret: true,
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  const { role, logout } = useUsersStore();
  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-red-800 duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link
            className="text-center w-full text-bold text-white"
            href="/webpanel"
          >
            <h1 className="flex items-center justify-center gap-2 text-xl font-bold">
              <MdPowerSettingsNew size={40} /> WEBPANEL
            </h1>
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className=" px-4 py-4  lg:px-6">
            {menuGroups.map((group, groupIndex) => {
              if (!group.secret && role === "user") {
                return (
                  <div key={groupIndex}>
                    <h3 className="mb-4 ml-4 font-semibold text-white text-md">
                      {group.name}
                    </h3>
                    <ul className="mb-6 flex flex-col gap-1.5">
                      {group.menuItems.map((menuItem, menuIndex) => (
                        <SidebarItem
                          key={menuIndex}
                          item={menuItem}
                          pageName={pageName}
                          setPageName={setPageName}
                        />
                      ))}
                    </ul>
                  </div>
                );
              } else if (role === "admin") {
                return (
                  <div key={groupIndex}>
                    <h3 className="mb-4 ml-4 font-semibold text-white text-md">
                      {group.name}
                    </h3>
                    <ul className="mb-6 flex flex-col gap-1.5">
                      {group.menuItems.map((menuItem, menuIndex) => {
                        // @ts-ignore
                        if (!menuItem?.secret) {
                          return (
                            <SidebarItem
                              key={menuIndex}
                              item={menuItem}
                              pageName={pageName}
                              setPageName={setPageName}
                            />
                          );
                        }
                      })}
                    </ul>
                  </div>
                );
              } else if (role === "super") {
                return (
                  <div key={groupIndex}>
                    <h3 className="mb-4 ml-4  font-semibold text-white text-md">
                      {group.name}
                    </h3>
                    <ul className="mb-6 flex flex-col gap-1.5">
                      {group.menuItems.map((menuItem, menuIndex) => (
                        <SidebarItem
                          key={menuIndex}
                          item={menuItem}
                          pageName={pageName}
                          setPageName={setPageName}
                        />
                      ))}
                    </ul>
                  </div>
                );
              }
            })}

            <button
              onClick={() => logout()}
              className={` border border-white w-full py-2 group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:text-white "
                }`}
            >
              Sign Out
            </button>
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
