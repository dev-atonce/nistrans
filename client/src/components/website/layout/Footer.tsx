import { Logo } from "@/components/website/atom/logo/Logo";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer({ logo }: any) {
  const t = useTranslations("contact");

  return (
    <div className="text-black bg-slate-200 ">
      <div className="">
        <div className="container mx-auto pt-4 px-2 xl:px-0">
          <div className="gap-4 md:gap-0 py-5 flex items-center justify-between flex-col md:flex-row">
            <div className="flex items-start gap-4 flex-col">
              <Logo img={logo} />
              <span
                className="text-base text-center md:text-left"
                style={{ whiteSpace: "pre" }}
              >
                {t("address")}
              </span>
              <div className="flex items-center gap-4">
                <FaPhone size={20} />
                <span>
                  {t("telephone")} : (+66)-2-261-1080～5 or 261-5343～6
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="md:block hidden">Certificate</label>
              <Image
                src="/img/footerCertificate.png"
                width={300}
                height={300}
                alt="cert"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 text-white">
        <div className="container mx-auto py-4 px-2 xl:px-0 sm:flex-row flex-col flex justify-between text-xs">
          <div>
            <span className="">© Siam Nistrans Co., Ltd.</span>
          </div>
          <div className="flex gap-4">
            <Link href="/cookie-policy" className="">
              นโยบายการใช้คุกกี้
            </Link>
            <Link href="/privacy-notice" className="">
              ประกาศด้านการคุ้มครองข้อมูลส่วนบุคคล
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
