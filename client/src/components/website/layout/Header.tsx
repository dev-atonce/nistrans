"use client";
import { Logo } from "../atom/logo/Logo";
import { useState } from "react";
import NavBar from "../organism/menu/NavBar";
import SideBar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import LanguageSwitcher from "../molecule/LanguageSwitcher";
import { Link } from '@/i18n/routing';

export default function Header({ logo, lng }: any) {
  const [currentLanguage, setCurrentLanguage] = useState<string>(lng);
  const [openLang, setOpenLang] = useState<Boolean>(false);
  const [openID, setOpenID] = useState<String>("");
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<Boolean>(false);

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const languages = [
    { label: "Japanese", value: "jp" },
    { label: `English`, value: "en" },
    { label: "Thai", value: "th" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.querySelector("html")?.classList.toggle("nav-open");
    document.querySelector("body")?.classList.add("overflow-hidden");
  };
  const closeSideBar = (e: any) => {
    const subMenuItem = e?.target.closest(".submenu-item");
    if (subMenuItem) {
      subMenuItem
        .closest(".sidebar-menu")
        .querySelectorAll(".active")
        .map((e: any) => e.target.classList.remove("active"));
      subMenuItem.classList.add("active");
    }
    setIsOpen(false);
    document.querySelector("html")?.classList.remove("nav-open");
    document.querySelector("body")?.classList.remove("overflow-hidden");
  };
  const toggleSubMenu = (e: any) => {
    const subMenu = e.currentTarget.parentElement?.querySelector(".sub-menu");
    if (subMenu) {
      e.preventDefault();
      setOpenSubMenu(!openSubMenu);
      setTimeout;
      e.currentTarget.closest(".menu-item").classList.toggle("active");
      // const icon = e.currentTarget.parentElement?.querySelector(".plus-icon");
      // icon?.classList.toggle("rotate-135");
      subMenu?.classList.toggle("open");
    } else {
      // @ts-ignore
      closeSideBar();
    }
  };
  const toggleLanguage = () => setOpenLang(!openLang);

  return (
    <div className="shadow-md bg-white ">
      <div className="header container mx-auto px-2 xl:px-0">
        <div className="xl:flex justify-between mx-auto h-full px-2 lg:px-0">
          <div className="logo">
            <div className="py-4 flex justify-between">
              <Logo img={logo} />
              <div className="flex xl:hidden">
                <div
                  className="cursor-pointer flex flex-col items-center justify-around w-8 h-8 burger"
                  onClick={toggleSidebar}
                >
                  <GiHamburgerMenu size={35} color="#ED1F23" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between h-full items-center gap-30 ">
            <div className="hidden xl:flex items-center gap-10 ">
              <NavBar />
              <Link
                href={`/${lng}/recruitment`}
                className="border px-4 rounded-lg text-slate-700 items-center gap-2 flex py-1 "
              >
                <IoPersonSharp />
                <span>สมัครงาน</span>
              </Link>
            </div>
            <LanguageSwitcher
              position="bottom"
              round="rounded-full"
              id="Header"
              language={{
                currentLanguage,
                setCurrentLanguage,
                openID,
                setOpenID,
                openLang,
                setOpenLang,
                toggleLanguage,
                languages,
                toggleHover,
                hovered,
              }}
            />
          </div>
        </div>
      </div>
      <div className="block lg:none overflow-hidden">
        <div
          className={`backdrop ${isOpen ? `fixed` : `hidden`
            } top-0 bg-black opacity-70 h-full w-full z-50 overflow-hidden`}
        ></div>
        <div
          className={`fixed block z-99 lg:none top-0 right-0 h-full w-80 text-black bg-white transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <SideBar
            lng={lng}
            sideBar={{ toggleSubMenu, closeSideBar }}
            language={{
              currentLanguage,
              setCurrentLanguage,
              openID,
              setOpenID,
              openLang,
              setOpenLang,
              languages,
            }}
          />
        </div>
      </div>
    </div>
  );
}
