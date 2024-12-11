import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NavDropdown({ title, dropdownItems }: any) {
  const t = useTranslations("header");
  const [show, setShow] = useState<String>("hidden");
  const [toggle, setToggle] = useState<Boolean>(false);

  return (
    <>
      <button
        data-toggle={toggle}
        onMouseOver={(e) => {
          setShow("show");
          setToggle(true);
        }}
        onMouseLeave={(e) => {
          setShow("hidden");
          setToggle(false);
        }}
        data-dropdown-toggle="dropdownNavbar"
        data-dropdown-offset-skidding="100"
        className="menu-item text-slate-700 nav-button px-4 py-3 md:border-0 flex items-center justify-between w-full md:w-auto relative "
      >
        {title}
        <div
          id="dropdownNavbar"
          className={`absolute ${show} dropdown z-20 bg-white overflow-hidden left-0 w-100 ${
            show ? `top-10` : ``
          }`}
        >
          <ul aria-labelledby="dropdownLargeButton">
            {dropdownItems.map((v: any, k: any) => {
              return (
                <li key={k} className="divide-x divide-violet-50">
                  <Link
                    href={v?.href}
                    className={`text-start hover:bg-slate-100 hover:border-b border-orange-400   block px-4 py-2`}
                  >
                    {t(v?.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </button>
    </>
  );
}
