import { useState } from "react";
import { BlogProps } from "../../../../types/blogType";
import ImagePreview from "../../Input/ImagePreview";
import TextEditor from "../../TextEditor/TextEditor";
import { Tabs } from "antd";



interface FormBlogProps {
  itemState: Omit<BlogProps, "id" | "status" | "createdAt" | "updatedAt">;
  setItemState: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: () => void;
  handleEditorChange: (value: string, language: string) => void;
}

const FormBlog = ({
  itemState,
  setItemState,
  handleSubmit,
  handleEditorChange,
}: FormBlogProps) => {
  const [selectedImage, setSelectedImage] = useState("" as any);

  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  // @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          {itemState?.blog_title_th}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4 p-6.5">
        <div className="col-span-2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Blog Title
          </label>
          <Tabs
            type="card"
            items={languages.map((_v, i) => {
              const id = String(i + 1);
              return {
                label: `${_v.toUpperCase()}`,
                key: id,
                children: <input
                  type="text"
                  name={`blog_title_${_v}`}
                  // @ts-ignore
                  value={`${itemState[`blog_title_${_v}`] ? itemState[`blog_title_${_v}`] : ""}`}
                  onChange={setItemState}
                  placeholder={`Blog Title ${_v.toUpperCase()}`}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />,
              };
            })}
          />
        </div>
        <div className="col-span-2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Url
          </label>
          <input
            type="text"
            name="slug"
            value={itemState.slug}
            onChange={setItemState}
            placeholder="Blog Url"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="col-span-2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Image
          </label>
          <input
            type="file"
            name="blog_image"
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
          <ImagePreview
            itemState={itemState}
            keyProp={"blog_image"}
            selectedImage={selectedImage}
            height={400}
          />
        </div>
        <div className="col-span-2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Blog Description
          </label>
          <Tabs
            type="card"
            items={languages.map((_v, i) => {
              const id = String(i + 1);
              return ({
                label: `${_v.toUpperCase()}`,
                key: id,
                children: <textarea
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  name={`blog_description_${_v}`}
                  // @ts-ignore
                  value={`${itemState[`blog_description_${_v}`] ? itemState[`blog_description_${_v}`] : ""}`}
                  onChange={(event) => setItemState(event)}
                  placeholder={`Blog Description ${_v.toUpperCase()}`}
                />
              })
            })}
          />
        </div>

        <div className="col-span-2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Blog Detail
          </label>
          <TextEditor
            languages={languages}
            itemState={itemState}
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

export default FormBlog;
