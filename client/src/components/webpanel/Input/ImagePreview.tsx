import { useState } from "react";
import Image from "next/image";

interface ImagePreviewProps {
  itemState: any;
  keyProp: string;
  selectedImage: Blob;
  height: number;
}
export default function ImagePreview({
  itemState,
  keyProp,
  selectedImage,
  height,
}: ImagePreviewProps) {
  return (
    <div className="bg-slate-300 rounded-xl flex justify-center items-center ">
      {selectedImage ? (
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt="preview"
          width={800}
          height={400}
          className="h-full  object-contain"
          style={{ maxHeight: `${height}px` }}
        />
      ) : itemState[keyProp] ? (
        <Image
          alt="preview"
          width={800}
          height={400}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${itemState[keyProp]}`}
          className="h-full  object-contain "
          style={{ maxHeight: `${height}px` }}
        />
      ) : (
        <div
          className="  text-4xl font-semibold flex items-center justify-center"
          style={{ height: `${height}px` }}
        >
          No Image
        </div>
      )}
    </div>
  );
}
