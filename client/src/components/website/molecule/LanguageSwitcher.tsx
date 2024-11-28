import { usePathname } from "next/navigation";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

export default function LanguageSwitcher({
  position,
  round,
  id,
  language,
}: any) {
  const thisId = id ? `languageSwitcher${id}` : `languageSwitcher`;
  const rounded = round ? `${round}` : `rounded-lg`;
  const pathname = usePathname();


  return (
    <div className="hidden xl:inline-block notranslate px-4" id={thisId}>
      <div
        title="Language"
        className={`cursor-pointer relative px-3 py-2 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 font-medium ${rounded} text-sm flex justify-between items-center w-20`}
        // onClick={() => {
        //   language.toggleLanguage();
        //   language.setOpenID(thisId);
        // }}
        onMouseEnter={language.toggleHover}
        onMouseLeave={language.toggleHover}
      >
        <span className="flex items-center font-bold text-slate-500">
          <FaGlobe className="mr-1 font-bold" />{" "}
          {language.currentLanguage.toUpperCase()}
        </span>
        <FaChevronDown color={"gray"} />
        <div
          className={`absolute ${
            language.hovered == true ? `block` : `hidden`
          } mt-1 w-20 rounded-lg shadow-lg bg-white top-8 left-0 ring-black ring-opacity-5 z-20 overflow-hidden`}
          style={position == "top" ? { top: "-78px" } : {}}
        >
          <ul>
            {language.languages?.map((ld: any, i: number) => (
              <li key={`l_s_${i}`} className="text-sm text-slate-700 hover:bg-slate-200 cursor-pointer">
                <a href={pathname.replace(`/${language.currentLanguage}`, `/${ld.value}`)} className="w-full block px-4 py-2">
                  {ld.value.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
