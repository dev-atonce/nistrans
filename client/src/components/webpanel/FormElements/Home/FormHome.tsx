"use client";
import { useEffect, useState } from "react";
import { useUsersStore } from "@/store/usersStore";
import { useAboutStore } from "@/store/aboutStore";
import ImagePreview from "../../Input/ImagePreview";

const FormHome = () => {
  const { updateLogo } = useAboutStore();
  const [logoState, setLogoState] = useState({ header: "", footer: "" });
  const [selectedHeader, setSelectedHeader] = useState<File | undefined | Blob>();
  const [selectedFooter, setSelectedFooter] = useState<File | undefined | Blob>();

  const onFetch = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/logo/all`,
      {
        cache: "no-store",
        headers: {
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      }
    );
    const logos = await data?.json();

    setLogoState({
      header: logos?.find((i: any) => i?.type == "header"),
      footer: logos?.find((i: any) => i?.type == "footer"),
    });
  };

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      setLogoState((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const handleSubmitLogo = async () => {
    await updateLogo(logoState?.header, "header");
    await updateLogo(logoState?.footer, "footer");
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-9">
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">Home</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6.5">
            <div className="col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Header Logo
              </label>
              <div className="col-span-2 mb-2">
                <ImagePreview
                  itemState={logoState?.header}
                  keyProp={"image"}
                  selectedImage={selectedHeader}
                  height={200}
                />
              </div>
              <input
                type="file"
                name="header"
                onChange={(e) => {
                  handleLogoChange(e);
                  if (e.target.files && e.target.files.length > 0) {
                    setSelectedHeader(e.target.files[0]);
                  }
                }}
                accept="image/*"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>
            <div className="col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Footer Logo
              </label>
              <div className="col-span-2 mb-2">
                <ImagePreview
                  itemState={logoState?.footer}
                  keyProp={"image"}
                  selectedImage={selectedFooter}
                  height={200}
                />
              </div>
              <input
                type="file"
                name="footer"
                onChange={(e) => {
                  handleLogoChange(e);
                  if (e.target.files && e.target.files.length > 0) {
                    setSelectedFooter(e.target.files[0]);
                  }
                }}
                accept="image/*"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>
            <div className="col-span-2">
              <button
                onClick={handleSubmitLogo}
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

export default FormHome;
