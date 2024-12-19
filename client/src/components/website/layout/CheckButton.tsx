import { useTranslations } from "next-intl";
import { BsFillBoxSeamFill } from "react-icons/bs";

export default function CheckButton() {
  const t = useTranslations("blog-section");

  return (
    <div className="lg:hidden container px-2 pt-4 mx-auto">
      <a
        href="https://www2.nissin-tw.co.jp/trace/cgi-bin/index.asp?language=0"
        className="hover:bg-black bg-[#F97316] hover:text-white transition-all  rounded-md col-span-2 items-center flex flex-col md:flex-row justify-center gap-2 py-4"
      >
        <div>
          <BsFillBoxSeamFill size={50} />
        </div>
        <div className="text-lg text-center  ">{t("tracking")}</div>
      </a>
    </div>
  );
}
