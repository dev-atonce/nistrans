import Image from "next/image";
import Link from "next/link";
export default function ServiceCard({ item }: any) {
  return (
    <Link
      href={`/service/${item?.id}`}
      //   href={`/service/${item?.id}`}
      className="group flex flex-col items-center gap-4 hover:bg-slate-200  px-4 py-10 transition-all duration-500 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 overflow-hidden rounded-xl border border-slate-200"
    >
      <div className=" bg-red-700 p-10 rounded-full">
        <Image
          // src={
          //   item?.image
          //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`
          //     : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
          // }
          src={`/img/${item?.image}`}
          alt={item?.nameTH}
          width={60}
          height={60}
          className=""
          loading="lazy"
        />
      </div>
      <div className="px-4 pt-2 text-start text-lg transition-all flex  flex-col items-center">
        <h2 className="text-red-600">{item?.serviceNameTH}</h2>
        <p className="text-black">{item?.serviceNameEN}</p>
      </div>
    </Link>
  );
}
