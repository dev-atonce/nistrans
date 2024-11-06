"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUsersStore } from "@/store/usersStore";
import { useAboutStore } from "@/store/aboutStore";
import { useContactStore } from "@/store/contactStore";
import ImagePreview from "../../Input/ImagePreview";

const FormHome = () => {
  const { updateItem } = useContactStore();
  // @ts-ignore
  const { updateLogo } = useAboutStore();
  const [logoState, setLogoState] = useState({ header: "", footer: "" });
  const [selectedHeader, setSelectedHeader] = useState<any>("");
  const [selectedFooter, setSelectedFooter] = useState<any>("");
  const [contactState, setContactState] = useState<any>({});

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

  const onFetchContact = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/contactinfo`,
      {
        cache: "no-store",
        headers: {
          authorization: `Bearer ${useUsersStore.getState().token}`,
        },
      }
    );
    const contact = await data?.json();

    setContactState(contact);
  };
  
  const handleLogoChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // @ts-ignore
    const { name, value, files } = event.target;
    if (files && files[0]) {
      setLogoState((prevState) => ({
        ...prevState,
        blog_image: files[0],
      }));
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // @ts-ignore
    const { name, value, files } = event.target;
    if (name === "image" && files && files[0]) {
      setContactState((prevState: any) => ({
        ...prevState,
        image: files[0],
      }));
    } else {
      setContactState((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmitLogo = async () => {
    await updateLogo(logoState?.header);
    await updateLogo(logoState?.footer);
    // router.push("/webpanel/blog");
  };

  const handleSubmitContact = async () => {
    await updateItem(contactState);
  };

  useEffect(() => {
    onFetchContact();
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
      <div className="grid grid-cols-12 gap-4 px-6.5 py-4 bg-white">
        <div className="col-span-12 border-b pb-4 py-3 border-stroke  dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Contact Info.
          </h3>
        </div>
        <div className="col-span-4">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Email 1
          </label>
          <input
            type="text"
            name="email"
            value={contactState?.email}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-4">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Email 2
          </label>
          <input
            type="text"
            name="email2"
            value={contactState?.email2}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-4">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Email 3
          </label>
          <input
            type="text"
            name="email3"
            value={contactState?.email3}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-4">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Contact 1 (Phone)
          </label>
          <input
            type="text"
            name="telephone"
            value={contactState?.telephone}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-4">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Contact 2 (Phone)
          </label>
          <input
            type="text"
            name="telephone2"
            value={contactState?.telephone2}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-3">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Contact 3 (Phone)
          </label>
          <input
            type="text"
            name="telephone3"
            value={contactState?.telephone3}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-3">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Facebook
          </label>
          <input
            type="text"
            name="facebook"
            value={contactState?.facebook}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-3">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Line
          </label>
          <input
            type="text"
            name="line"
            value={contactState?.line}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-3">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Instagram
          </label>
          <input
            type="text"
            name="instagram"
            value={contactState?.instagram}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-3">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Tiktok
          </label>
          <input
            type="text"
            name="tiktok"
            value={contactState?.tiktok}
            onChange={handleChange}
            placeholder="Enter Seo Title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-6">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Address
          </label>
          <textarea
            rows={7}
            type="text"
            name="addressTH"
            value={contactState?.addressTH}
            // @ts-ignore
            onChange={handleChange}
            placeholder="Enter Seo Description"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-6">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Google Map
          </label>
          <textarea
            rows={7}
            type="text"
            name="gMap"
            value={contactState?.gMap}
            // @ts-ignore
            onChange={handleChange}
            placeholder="Enter Seo Keyword"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-12">
          <button
            onClick={handleSubmitContact}
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormHome;
