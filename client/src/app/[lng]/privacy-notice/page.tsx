import Cover from "@/components/website/layout/Cover";
import PrivacyEN from "@/components/website/layout/privacy/PrivacyEn";
import PrivacyJP from "@/components/website/layout/privacy/PrivacyJp";
import PrivacyTH from "@/components/website/layout/privacy/PrivacyTh";

export default function Privacy({ params: { lng } }: any) {
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
        pageName="ประกาศด้านการคุ้มครองข้อมูลส่วนบุคคล"
        engName="Privacy Notice"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container px-2 xl:px-0 mx-auto pb-10 text-black py-10">
        {content}
      </div>
    </>
  );
}
