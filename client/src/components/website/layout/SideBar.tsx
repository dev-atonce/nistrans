"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import menuItem from "@/assets/menuItem.json";
import { RiCloseLargeLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function SideBar({ sideBar, language, lng }: any) {
  const pathname = usePathname();
  const t = useTranslations("header");
  return (
    <div className="relative h-full">
      <div
        className="sidebar-wraper w-full max-h-screen p-4 z-99"
        // style={{ height: `calc(100vh - 68px)` }}
      >
        <ul className="sidebar-menu">
          <button
            className="w-full flex justify-end"
            onClick={() => sideBar?.closeSideBar()}
            title="Close"
          >
            <RiCloseLargeLine size={40} color={"#FC7503"} />
          </button>
          {menuItem.map((item, index) => (
            <li key={index} className="menu-item rounded-lg">
              <Link
                href={`/${item.href}`}
                title={item.title}
                onClick={(e) => sideBar.toggleSubMenu(e)}
                className="p-2 hover:text-[#FC7503] flex items-center justify-between"
              >
                {t(item.key)}
                {/* @ts-ignore */}
                {item?.subMenu && (
                  <FaPlus className="plus-icon transition-all duration-200" />
                )}
              </Link>
              {/* @ts-ignore */}
              {item?.subMenu && (
                <ul className={`sub-menu`}>
                  {/* @ts-ignore */}
                  {item?.subMenu.map((sub, i) => (
                    <li key={index + i}>
                      <Link
                        href={`${sub.href}`}
                        title={sub.title}
                        onClick={sideBar.closeSideBar}
                        className="submenu-item"
                      >
                        {t(sub.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute flex justify-between w-full max-w-90 p-4 bg-white"
        style={{ bottom: "0px" }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="text-black notranslate flex gap-1">
            {language.languages.map((ld: any, i: number) => (
              <a
                key={`l_s_${i}`}
                href={pathname.replace(
                  `/${language.currentLanguage}`,
                  `/${ld.value}`
                )}
              >
                <Image
                  src={`/img/${ld.value == "en" ? "uk" : ld.value}_flag.png`}
                  alt="th"
                  width={25}
                  height={25}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
