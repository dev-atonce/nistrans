import { useState } from "react";
import { BannerFormProps } from "../../../../types/bannerType";
import ImagePreview from "../../Input/ImagePreview";

interface FormBannerProps {
  itemState: BannerFormProps;
  setItemState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const FormBanner = ({
  itemState,
  setItemState,
  handleSubmit,
}: FormBannerProps) => {
  const [selectedImage, setSelectedImage] = useState("" as any);
  return (
    <div className="grid grid-cols-2 gap-9">
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Banner Form
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6.5">
            <div className="col-span-2">
              <ImagePreview
                itemState={itemState}
                keyProp={"image"}
                selectedImage={selectedImage}
                height={200}
              />
            </div>
            <div className="col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Image
              </label>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  setItemState(e);
                  if (e.target.files && e.target.files.length > 0) {
                    setSelectedImage(e.target.files[0]);
                  }
                }}
                accept="image/*"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>
            <div className="col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Image Alt
              </label>
              <input
                type="text"
                name="image_alt"
                value={itemState.image_alt}
                onChange={setItemState}
                placeholder="Enter Image Alt"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="col-span-1">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={itemState.title}
                onChange={setItemState}
                placeholder="Enter title"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="col-span-1">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Link
              </label>
              <input
                type="text"
                name="link"
                value={itemState.link}
                onChange={setItemState}
                placeholder="Enter Link"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="col-span-2">
              <button
                onClick={() => handleSubmit()}
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBanner;
