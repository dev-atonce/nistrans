import Cover from "@/components/website/layout/Cover";
import ServiceSection from "@/components/website/layout/ServiceSection";

export default function ServicePage() {
  return (
    <>
      <Cover
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container mx-auto ">
        <ServiceSection />
      </div>
    </>
  );
}
