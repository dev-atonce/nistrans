import Cover from "@/components/website/layout/Cover";
import PrivacyEN from "@/components/website/layout/privacy/PrivacyEn";
import PrivacyJP from "@/components/website/layout/privacy/PrivacyJp";
import PrivacyTH from "@/components/website/layout/privacy/PrivacyTh";
import { useTranslations } from "next-intl";

export default function Privacy({ params: { lng } }: any) {
  const h = useTranslations("header");
  const name = {
    th: "ประกาศด้านการคุ้มครองข้อมูลส่วนบุคคล",
    en: "Privacy Notice",
    jp: "個人情報保護告示",
  };
  const content =
    lng === "th" ? (
      <PrivacyTH />
    ) : lng === "en" ? (
      <PrivacyEN />
    ) : lng === "jp" ? (
      <PrivacyJP />
    ) : (
      <PrivacyTH />
    );
  return (
    <>
      <Cover
        noHeading={true}
        // @ts-ignore
        pageName={name[lng]}
        engName="Privacy Notice"
        prevPage={{ pageName: h("home"), url: "/" }}
      />
      <div className="container   2xl:px-20 px-2 xl:px-6 mx-auto pb-10 text-black py-10">
        {content}
      </div>
    </>
  );
}
