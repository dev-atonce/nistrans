import Image from "next/image";
import Link from "next/link";
export default function ProductCard({ item }: any) {
  return (
    <Link
      href={`/service/${item?.id}`}
      //   href={`/${lang?.toLowerCase()}/service/${item?.id}`}
      className="group   pb-4 transition-all duration-500 col-span-12 md:col-span-6  xl:col-span-3 rounded-lg overflow-hidden"
    >
      <Image
        src={"/img/banner1.png"}
        // src={
        //   item?.image
        //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`
        //     : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
        // }
        alt={item?.nameTH}
        width={400}
        height={400}
        className="w-full object-cover aspect-[3/2] group-hover:brightness-105 transition-all rounded-lg"
        loading="lazy"
      />
      <h3 className="px-4 group-hover:text-[#070B76] pt-2  text-lg transition-all text-center text-blue-950">
        {/* {item[`serviceName${lang}`] || item?.serviceNameTH} */}
        Item Name
      </h3>
    </Link>
  );
}
