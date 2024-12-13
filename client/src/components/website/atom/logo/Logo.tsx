import { Link } from "@/i18n/routing";
import Image from "next/image";

export function Logo({ color, img }: any) {
  return (
    <div className="">
      <Link href="/" className="_links">
        {/* {img && ( */}
        <Image
          style={{ width: "300px !important" }}
          src={
            img
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${img}`
              : "/img/nistrans_logo.png"
          }
          alt="rent"
          width={400}
          height={400}
        />
        {/* )} */}
      </Link>
    </div>
  );
}
