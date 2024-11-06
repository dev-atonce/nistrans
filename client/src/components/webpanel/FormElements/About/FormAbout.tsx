"use client";

import TextEditor from "../../TextEditor/TextEditor";
import { useAboutStore } from "@/store/aboutStore";
import { AboutProps } from "@/types/aboutType";
import router from "next/navigation";
import { useEffect, useState } from "react";

const FormAbout = () => {
  const [aboutState, setAboutState] = useState<AboutProps>({
    type: "",
    detail: "",
  });
  const { updateItem, fetchItemByType, items } = useAboutStore();

  const fetchData = async () => {
    await fetchItemByType("about-us");
  };

  const handleSubmit = async () => {
    await updateItem("about-us", aboutState);
  };

  const handleEditorChange = (value: string) => {
    setAboutState((prevState) => ({
      ...prevState,
      detail: value,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setAboutState(items[0]);
    }
  }, [items]);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">About Us</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 p-6.5">
        <div className="col-span-2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Detail{" "}
          </label>
          <TextEditor
            itemState={aboutState?.detail}
            handleEditorChange={handleEditorChange}
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
  );
};

export default FormAbout;
