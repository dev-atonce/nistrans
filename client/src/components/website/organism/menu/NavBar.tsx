import Link from "next/link";
import NavDropDown from "@/components/website/molecule/menu/NavDropDown";
import menuItem from "@/assets/menuItem.json";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

export default function NavBar({ lng }: any) {
  const pathname = usePathname();
  const  {t} = useTranslation(lng,'header');
  return (
    <div className="nav-menu h-full flex items-center " id="scrollable-content">
      {menuItem.map((item: any, key: number) => {
        if (item?.subMenu)
          return (
            <NavDropDown
              key={key}
              title={t(item.key)}
              dropdownItems={item.subMenu}
              sectionKey={key}
              lang={lng}
            />
          );
        else
          return (
            <Link
              key={key}
              href={`/${lng + item.href}`}
              title={t(item.key)}
              className={`${
                pathname == item?.href.toLowerCase()
                  ? "text-[#F67F18]"
                  : "text-[#0C2B4B]"
              } h-full flex items-center menu-item px-4 py-4 nav-button hover:text-[#F67F18] transition-all`}
            >
              {t(item.key)}
            </Link>
          );
      })}
    </div>
  );
}
